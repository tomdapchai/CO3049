<?php
require_once '../../config/database.php';
require_once '../../controller/ProductController.php';
require_once '../header.php';

$productController = new ProductController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['slug'])) {
                $productController->getProductById($_GET['slug']);
            } else {
                $productController->getAllProducts();
            }
            break;

        case 'POST':
            if (!$input) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid JSON input', 'data' => $input]);
                exit();
            }
            $productController->createProduct($input);
            break;

        case 'PUT':
            if (!isset($_GET['slug']) && !$input) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
                exit();
            }
            if (!isset($_GET['slug'])) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Product slug is required']);
                exit();
            }
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid JSON input']);
                exit();
            }
            $productController->updateProduct($_GET['slug'], $input);
            break;

        case 'DELETE':
            if (!isset($_GET['slug'])) {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Product ID is required']);
                exit();
            }
            $productController->deleteProduct($_GET['slug']);
            break;

        default:
            http_response_code(405); // Method Not Allowed
            echo json_encode(['status' => 'error', 'message' => 'Invalid HTTP method']);
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}

