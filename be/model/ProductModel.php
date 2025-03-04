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
        return $stmt;
    }

    public function getProductById($productId) {
        $query = "SELECT * FROM $this->table WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$productId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createProduct($data) {
        $query = "INSERT INTO $this->table (productId, name, price, size, color, short_description, full_description, tags, full_description_original) 
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['productId'],
            $data['name'],
            $data['price'],
            json_encode($data['size']),
            json_encode($data['color']),
            $data['shortDescription'],
            $data['fullDescription'],
            json_encode($data['tags']),
            $data['fullDescriptionOriginal']
        ]);
    }

    public function updateProduct($productId, $data) {
        $query = "UPDATE $this->table SET name = ?, price = ?, size = ?, color =?, short_description = ?, full_description = ?, tags = ?, full_description_original = ? 
                  WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['price'],
            json_encode($data['size']),
            json_encode($data['color']),
            $data['shortDescription'],
            $data['fullDescription'],
            json_encode($data['tags']),
            $data['fullDescriptionOriginal'],
            $productId
        ]);
    }

    public function deleteProduct($productId) {
        $query = "DELETE FROM $this->table WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$productId]);
    }
}

