<?php
require_once '../../model/ExtensionModel.php';

class ExtensionController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllExtensions() {
        $extensionModel = new ExtensionModel($this->db);
        $extensions = $extensionModel->getAllExtensions();
        $response = [];
        while ($extension = $extensions->fetch(PDO::FETCH_ASSOC)) {
            // Convert numeric values to boolean for frontend compatibility
            $extension['status_install'] = (bool)$extension['status_install'];
            $extension['status_enable'] = (bool)$extension['status_enable'];
            $response[] = $extension;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getExtensionById($extensionId) {
        $extensionModel = new ExtensionModel($this->db);
        $extension = $extensionModel->getExtensionById($extensionId);
        
        if (!$extension) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Extension not found']);
            return;
        }
        
        $extensionData = $extension->fetch(PDO::FETCH_ASSOC);
        // Convert numeric values to boolean for frontend compatibility
        $extensionData['status_install'] = (bool)$extensionData['status_install'];
        $extensionData['status_enable'] = (bool)$extensionData['status_enable'];
        
        echo json_encode(['status' => 'success', 'data' => $extensionData]);
    }

    public function updateExtensionStatus($data) {
        $extensionModel = new ExtensionModel($this->db);
        
        if (!$extensionModel->getExtensionById($data['id'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Extension not found']);
            return;
        }

        // Convert boolean values to numeric for database compatibility
        $data['status_install'] = $data['status_install'] ? 1 : 0;
        $data['status_enable'] = $data['status_enable'] ? 1 : 0;

        if ($extensionModel->updateExtensionStatus($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Extension status updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update extension status']);
        }
    }
}