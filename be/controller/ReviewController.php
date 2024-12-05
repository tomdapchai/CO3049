<?php
require_once '../../model/ReviewModel.php';
require_once '../../model/ProductModel.php';
require_once '../../model/UserModel.php';

class ReviewController {
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAllReviews()
    {
        $reviewModel = new ReviewModel($this->db);
        $reviews = $reviewModel->getAllReviews();
        if (!$reviews) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No reviews found']);
            return;
        }
        $response = [];
        while ($review = $reviews->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $review;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getReviewByProductId($productId) {
        $reviewModel = new ReviewModel($this->db);
        $reviews = $reviewModel->getReviewByProductId($productId);
        if (!$reviews) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No reviews found']);
            return;
        }
        $response = [];
        while ($review = $reviews->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $review;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    // this one is pretty useless anyway
    public function getReviewById($reviewId)
    {
        $reviewModel = new ReviewModel($this->db);
        $review = $reviewModel->getReviewById($reviewId);
        if (!$review) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Review not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $review->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createReview($data)
    {
        $reviewModel = new ReviewModel($this->db);
        $productModel = new ProductModel($this->db);
        $userModel = new UserModel($this->db);

        // check if product exists
        if (!$productModel->getProductById($data['productId'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Product not found']);
            return;
        }

        // check if user exists
        if (!$userModel->getUserById($data['userId'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($reviewModel->createReview($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Review created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create review']);
        }
    }

    public function updateReview($reviewId, $data)
    {
        $reviewModel = new ReviewModel($this->db);
        // check if review exists
        if (!$reviewModel->getReviewById($reviewId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Review not found']);
            return;
        }

        if ($reviewModel->updateReview($reviewId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Review updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update review']);
        }
    }

    public function deleteReview($reviewId)
    {
        $reviewModel = new ReviewModel($this->db);
        // check if review exists
        if (!$reviewModel->getReviewById($reviewId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Review not found']);
            return;
        }

        if ($reviewModel->deleteReview($reviewId)) {
            echo json_encode(['status' => 'success', 'message' => 'Review deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete review']);
        }
    }
}