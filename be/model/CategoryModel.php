<?php
require_once '../../config/database.php';

class CategoryModel {
    private $db;
    private $table = 'category';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllCategories() {
        $query = "SELECT * FROM $this->table ORDER BY display_order ASC";
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
        // Get the highest display_order
        $query = "SELECT MAX(display_order) as max_order FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $maxOrder = $row['max_order'] ?? 0;
        
        $query = "INSERT INTO $this->table (category_id, name, image, display_order) 
                  VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['categoryId'],
            $data['name'],
            $data['image'],
            $maxOrder + 1
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
    
    public function updateCategoryOrder($categories) {
        $this->db->beginTransaction();
        try {
            foreach ($categories as $category) {
                $query = "UPDATE $this->table SET display_order = ? WHERE category_id = ?";
                $stmt = $this->db->prepare($query);
                $stmt->execute([$category['displayOrder'], $category['categoryId']]);
            }
            $this->db->commit();
            return true;
        } catch (Exception $e) {
            $this->db->rollBack();
            return false;
        }
    }
}