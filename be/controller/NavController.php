<?php
require_once '../../model/NavModel.php';

class NavController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllNavLinks() {
        $navModel = new NavModel($this->db);
        $navLinks = $navModel->getAllNavLinks();
        $response = [];
        while ($link = $navLinks->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $link;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getNavLinkById($id) {
        $navModel = new NavModel($this->db);
        $navLink = $navModel->getNavLinkById($id);
        
        if (!$navLink) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Navigation link not found']);
            return;
        }
        
        echo json_encode(['status' => 'success', 'data' => $navLink->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createNavLink($data) {
        $navModel = new NavModel($this->db);
        
        if (!isset($data['title']) || !isset($data['url'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Title and URL are required']);
            return;
        }

        if ($navModel->createNavLink($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Navigation link created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create navigation link']);
        }
    }

    public function updateNavLink($data) {
        $navModel = new NavModel($this->db);
        
        if (!isset($data['id'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Navigation link ID is required']);
            return;
        }
        
        if (!$navModel->getNavLinkById($data['id'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Navigation link not found']);
            return;
        }

        if ($navModel->updateNavLink($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Navigation link updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update navigation link']);
        }
    }

    public function deleteNavLink($id) {
        $navModel = new NavModel($this->db);
        
        if (!$navModel->getNavLinkById($id)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Navigation link not found']);
            return;
        }

        if ($navModel->deleteNavLink($id)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Navigation link deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete navigation link']);
        }
    }
    
    public function updateNavLinkOrder($data) {
        $navModel = new NavModel($this->db);
        
        if (!is_array($data)) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid data format']);
            return;
        }

        if ($navModel->updateNavLinkOrder($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Navigation link order updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update navigation link order']);
        }
    }
}