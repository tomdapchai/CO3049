<?php
require_once '../../config/database.php';

class ReviewModel {
    private $db;
    private $table = 'review';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllReviews() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getReviewByProductId($productId) {
        $query = "SELECT * FROM $this->table WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$productId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getReviewById($reviewId) {
        $query = "SELECT * FROM $this->table WHERE reviewId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$reviewId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createReview($data) {
        $query = "INSERT INTO $this->table (productId, userId, rating, content, reviewer) 
                  VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['productId'],
            $data['userId'],
            $data['rating'],
            $data['comment'],
            $data['reviewer']
        ]);
    }

    public function updateReview($reviewId, $data) {
        $query = "UPDATE $this->table SET rating = ?, content = ?
                  WHERE reviewId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['rating'],
            $data['comment'],
            $reviewId
        ]);
    }

    public function deleteReview($reviewId) {
        $query = "DELETE FROM $this->table WHERE reviewId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$reviewId]);
    }
}