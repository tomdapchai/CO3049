<?php
require_once '../header.php';
require_once '../../controller/ReviewController.php';

$reviewController = new ReviewController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['productId'])) {
                $reviewController->getReviewByProductId($_GET['productId']);
            } else {
                $reviewController->getAllReviews();
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
            $reviewController->createReview($input);
            break;
        case 'PUT':
            if (!isset($_GET['reviewId']) || !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $reviewController->updateReview($_GET['reviewId'], $input);
            break;
        case 'DELETE':
            if (!isset($_GET['reviewId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Review ID is required'
                ]);
                exit();
            }
            $reviewController->deleteReview($_GET['reviewId']);
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
        'message' => 'Internal Server Error'
    ]);
    exit();
}