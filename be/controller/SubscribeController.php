<?php
require_once '../../model/SubscribeModel.php';
class SubscribeController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllSubscribes() {
        $subcribeModel = new SubscribeModel($this->db);
        $subcribes = $subcribeModel->getAllSubscribes();
        $response = [];
        while ($subcribe = $subcribes->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $subcribe;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function createSubscribe($data) {
        $subcribeModel = new SubscribeModel($this->db);

        if ($subcribeModel->createSubscribe($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Subscribe created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create subcribe']);
        }
    }

    public function deleteSubscribe($subcribeId) {
        $subcribeModel = new SubscribeModel($this->db);

        if ($subcribeModel->deleteSubscribe($subcribeId)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Subscribe deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete subcribe']);
        }
    }
}