<?php
require_once '../header.php';
require_once '../../controller/ImageController.php';
require_once '../../config/database.php';

$imageController = new ImageController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    switch ($method) {
        case 'GET':
            if (isset($_GET['imageId'])) {
                $imageController->getImageById($_GET['imageId']);
            } 
            else if (isset($_GET['type']) && $_GET['type'] == 'product') {
                $imageController->getImagesFromProduct($_GET['slug']);
            } 
            else if (isset($_GET['type']) && $_GET['type'] == 'blog') {
                $imageController->getImagesFromBlog($_GET['blogId']);
            }
            else {
                $imageController->getAllImages();
            }
            break;
        case 'POST':
            // create product or blog image
            if (!$input) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            if ($_GET['type'] == 'product') {
                $imageController->createProductImage($input, $_GET['slug']);
            } else if ($_GET['type'] == 'blog') {
                $imageController->createBlogImage($input, $_GET['slug']);
            }
            else if ($_GET['type'] == 'about') {
                $imageController->createImage($input);
            }
            else {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            break;

        case 'PUT':
            if (!isset($_GET['type']) && !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            if (!isset($_GET['type'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Type is required'
                ]);
                exit();
            }
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input'
                ]);
                exit();
            }
            if ($_GET['type'] == 'src') {
                $imageController->updateImageSrc($input);
            } else if ($_GET['type'] == 'imageId') {
                $imageController->updateImageId($input);
            } else {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid value'
                ]);
                exit();
            }
            break;

        case 'DELETE':
            if (!isset($_GET['imageId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Image ID is required'
                ]);
                exit();
            }
            $imageController->deleteImage($_GET['imageId']);
            break;

        default:
            http_response_code(405);
            echo json_encode([
                'status' => 'error',
                'message' => 'Method Not Allowed'
            ]);
            exit();
    }
}  
catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Internal Server Error',
        'details' => $e->getMessage()
    ]);
    exit();
}