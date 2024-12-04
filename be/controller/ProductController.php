<?php
require '../../model/ProductModel.php';

class ProductController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllProducts() {
        $productModel = new ProductModel($this->db);
        $products = $productModel->getAllProducts();
        if (!$products) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No products found']);
            return;
        }
        $response = [];
        while ($product = $products->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $product;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getProductById($productId) {
        $productModel = new ProductModel($this->db);
        $product = $productModel->getProductById($productId);
        if (!$product) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Product not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $product->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createProduct($data) {
        $productModel = new ProductModel($this->db);
        // check if product already exists
        if ($productModel->getProductById($data['productId'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Product already exists']);
            return;
        }
        if ($productModel->createProduct($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Product created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create product']);
        }
    }

    public function updateProduct($productId, $data) {
        $productModel = new ProductModel($this->db);
        // check if product exists
        if (!$productModel->getProductById($productId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Product not found']);
            return;
        }

        if ($productModel->updateProduct($productId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Product updated']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update product']);
        }
    }

    public function deleteProduct($productId) {
        $productModel = new ProductModel($this->db);
        if ($productModel->deleteProduct($productId)) {
            echo json_encode(['status' => 'success', 'message' => 'Product deleted']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete product']);
        }
    }
}

