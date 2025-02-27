<?php
require_once '../../model/SocialModel.php';

class SocialController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllSocials() {
        $socialModel = new SocialModel($this->db);
        $socials = $socialModel->getAllSocials();
        $response = [];
        while ($social = $socials->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $social;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getSocialById($socialId = null) {
        $socialModel = new SocialModel($this->db);
        $social = $socialModel->getSocialById($socialId);
        if (!$social) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Social media not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $social->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createSocial($data) {
        $socialModel = new SocialModel($this->db);
        if ($socialModel->getSocialById($data['id'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Social media with id '.$data['id'].' already exists']);
            return;
        }

        if ($socialModel->createSocial($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Social media created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create social media']);
        }
    }

    public function updateSocial($socialId, $data) {
        $socialModel = new SocialModel($this->db);
        if (!$socialModel->getSocialById($socialId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Social media not found']);
            return;
        }

        if ($socialModel->updateSocial($socialId, $data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message
            ' => 'Social media updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update social media']);
        }
    }

    public function deleteSocial($socialId) {
        $socialModel = new SocialModel($this->db);
        if (!$socialModel->getSocialById($socialId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Social media not found']);
            return;
        }

        if ($socialModel->deleteSocial($socialId)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Social media deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete social media']);
        }
    }
}