<?php
require_once '../../config/database.php';
class ProductModel {
    private $db;
    private $table = 'product';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllProducts() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getProductById($productId) {
        $query = "SELECT * FROM $this->table WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$productId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createProduct($data) {
        $query = "INSERT INTO $this->table (productId, name, price, short_description, full_description, tags) 
                  VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['productId'],
            $data['name'],
            $data['price'],
            $data['shortDescription'],
            $data['fullDescription'],
            json_encode($data['tags'])
        ]);
    }

    public function updateProduct($productId, $data) {
        $query = "UPDATE $this->table SET name = ?, price = ?, short_description = ?, full_description = ?, tags = ? 
                  WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['price'],
            $data['shortDescription'],
            $data['fullDescription'],
            json_encode($data['tags']),
            $productId
        ]);
    }

    public function deleteProduct($productId) {
        $query = "DELETE FROM $this->table WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$productId]);
    }
}

