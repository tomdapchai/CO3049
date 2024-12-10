<?php
require_once '../header.php';
require_once '../../controller/SiteInfoController.php';

$siteInfoController = new SiteInfoController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            $siteInfoController->getSiteInfo();
            break;
        case 'PUT':
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            $siteInfoController->updateSiteInfo($input);
            break;
        default:
            http_response_code(405);
            echo json_encode([
                'status' => 'error',
                'message' => 'Method Not Allowed'
            ]);
            exit();
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}