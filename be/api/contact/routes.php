<?php
require_once '../header.php';
require_once '../../controller/ContactController.php';

$contactController = new ContactController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['contactId'])) {
                $contactController->getContactById($_GET['contactId']);
            } else {
                $contactController->getAllContacts();
            }
            break;
        case 'POST':
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            $contactController->createContact($input);
            break;
        case 'PUT':
            if (!isset($_GET['contactId']) || !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $contactController->updateContact($_GET['contactId'], $input);
            break;
        case 'DELETE':
            if (!isset($_GET['contactId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Contact ID is required'
                ]);
                exit();
            }
            $contactController->deleteContact($_GET['contactId']);
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