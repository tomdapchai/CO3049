<?php
require_once '../../model/CategoryModel.php';
class CategoryController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllCategories() {
        $categoryModel = new CategoryModel($this->db);
        $categories = $categoryModel->getAllCategories();
        $response = [];
        while ($category = $categories->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $category;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getCategoryById($categoryId = null) {
        $categoryModel = new CategoryModel($this->db);
        $category = $categoryModel->getCategoryById($categoryId);
        if (!$category) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Category not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $category->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createCategory($data) {
        $categoryModel = new CategoryModel($this->db);
        // check if category already exists
        if ($categoryModel->getCategoryById($data['categoryId'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Category with id '.$data['categoryId'].' already exists']);
            return;
        }

        if ($categoryModel->createCategory($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Category created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create category']);
        }
    }

    public function updateCategory($data) {
        $categoryModel = new CategoryModel($this->db);
        // check if category exists
        if (!$categoryModel->getCategoryById($data['categoryId']
        )) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Category not found']);
            return;
        }

        if ($categoryModel->updateCategory($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Category updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update category']);
        }

    }

    public function deleteCategory($categoryId) {
        $categoryModel = new CategoryModel($this->db);
        // check if category exists
        if (!$categoryModel->getCategoryById($categoryId
        )) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Category not found']);
            return;
        }   
    }

}