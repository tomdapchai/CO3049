<?php
require_once '../../model/ContactModel.php';

class ContactController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllContacts() {
        $contactModel = new ContactModel($this->db);
        $contacts = $contactModel->getAllContacts();
        if (!$contacts) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No contacts found']);
            return;
        }
        $response = [];
        while ($contact = $contacts->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $contact;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getContactById($contactId) {
        $contactModel = new ContactModel($this->db);
        $contact = $contactModel->getContactById($contactId);
        if (!$contact) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Contact not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $contact->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createContact($data) {
        $contactModel = new ContactModel($this->db);

        if ($contactModel->createContact($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Contact created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create contact']);
        }
    }

    public function updateContact($contactId, $data) {
        $contactModel = new ContactModel($this->db);
        // check if contact exists
        if (!$contactModel->getContactById($contactId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Contact not found']);
            return;
        }

        if ($contactModel->updateContact($contactId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Contact updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update contact']);
        }
    }

    public function deleteContact($contactId) {
        $contactModel = new ContactModel($this->db);
        // check if contact exists
        if (!$contactModel->getContactById($contactId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Contact not found']);
            return;
        }

        if ($contactModel->deleteContact($contactId)) {
            echo json_encode(['status' => 'success', 'message' => 'Contact deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete contact']);
        }
    }
}
