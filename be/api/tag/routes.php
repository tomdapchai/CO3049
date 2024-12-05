<?php
require_once '../header.php';
require_once '../../controller/TagController.php';

$tagController = new TagController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['tagName'])) {
                $tagController->getTagByName($_GET['tagName']);
            } else {
                $tagController->getAllTags();
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
            $tagController->createTag($input);
            break;
        case 'PUT':
            if (!isset($_GET['tagName']) || !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $tagController->updateTag($_GET['tagName'], $input);
            break;
        case 'DELETE':
            if (!isset($_GET['tagName'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Tag ID is required'
                ]);
                exit();
            }
            $tagController->deleteTag($_GET['tagName']);
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
    exit();
}