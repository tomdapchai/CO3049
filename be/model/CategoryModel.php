<?php
require_once '../../config/database.php';

class CategoryModel {
    private $db;
    private $table = 'category';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllCategories() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getCategoryById($categoryId) {
        $query = "SELECT * FROM $this->table WHERE category_id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$categoryId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createCategory($data) {
        $query = "INSERT INTO $this->table (category_id, name, image) 
                  VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['categoryId'],
            $data['name'],
            $data['image']
        ]);
    }

    public function updateCategory($data) {
        $query = "UPDATE $this->table SET name = ?, image = ? 
                  WHERE category_id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['image'],
            $data['categoryId']
        ]);
    }

    public function deleteCategory($categoryId) {
        $query = "DELETE FROM $this->table WHERE category_id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$categoryId]);
    }
}