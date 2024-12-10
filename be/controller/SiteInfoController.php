<?php
require_once '../../model/SiteInfoModel.php';

class SiteInfoController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getSiteInfo() {
        $infoModel = new SiteInfoModel($this->db);
        $info = $infoModel->getSiteInfo();
        $response = $info->fetch(PDO::FETCH_ASSOC);
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function updateSiteInfo($data) {
        $infoModel = new SiteInfoModel($this->db);
        if ($infoModel->updateSiteInfo($data)) {
            echo json_encode(['status' => 'success', 'message' => 'Site info updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update site info']);
        }
    }
}