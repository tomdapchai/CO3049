<?php
require_once '../../model/AdModel.php';

class AdController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAd() {
        $adModel = new AdModel($this->db);
        $ad = $adModel->getAd();
        echo json_encode(['status' => 'success', 'data' => $ad->fetch(PDO::FETCH_ASSOC)]);
    }

    public function updateAd($data) {
        $adModel = new AdModel($this->db);

        if ($adModel->updateAd($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Ad updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update ad']);
        }
    }
}