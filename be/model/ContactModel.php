<?php
require_once '../../config/database.php';

class ContactModel {
    private $db;
    private $table = 'contact';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllContacts() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getContactById($contactId) {
        $query = "SELECT * FROM $this->table WHERE contactId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$contactId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createContact($data) {
        $query = "INSERT INTO $this->table (name, email, phone_number, further_info) 
                  VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        $contactId = $this->db->lastInsertId();
        // return contactId along with the result
        return $stmt->execute([
            $data['name'],
            $data['email'],
            $data['phone_number'],
            $data['further_info']
        ]) ? $contactId : false;
    }

    public function updateContact($contactId, $data) {
        $query = "UPDATE $this->table SET name = ?, email = ?, phone_number = ?, further_info = ?
                  WHERE contactId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['email'],
            $data['phone_number'],
            $data['further_info'],
            $contactId
        ]);
    }

    public function deleteContact($contactId) {
        $query = "DELETE FROM $this->table WHERE contactId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$contactId]);
    }

}