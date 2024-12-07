<?php
require_once '../../model/ImageModel.php';
include_once '../../model/ProductModel.php';
include_once '../../model/BlogModel.php';

// for checking product existence
class ImageController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllImages() {
        $imageModel = new ImageModel($this->db);
        $images = $imageModel->getAllImages();
        if (!$images) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No images found']);
            return;
        }
        $response = [];
        while ($image = $images->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $image;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getImageById($imageId) {
        $imageModel = new ImageModel($this->db);
        $image = $imageModel->getImageById($imageId);
        if (!$image) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Image not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $image->fetch(PDO::FETCH_ASSOC)]);
    }

    public function updateImageId($data) {
        $imageModel = new ImageModel($this->db);
        // check if imageId exists
        if (!$imageModel->getImageById($data['imageId'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Image not found']);
            return;
        }

        if ($imageModel->updateImageId($data['imageId'], $data['newId'])) {
            echo json_encode(['status' => 'success', 'message' => 'Image Id updated']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update image']);
        }
    }

    public function updateImageSrc($data) {
        $imageModel = new ImageModel($this->db);
        if (!$imageModel->getImageById($data['imageId'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Image not found']);
            return;
        }

        if ($imageModel->updateImageSrc($data['imageId'], $data['newSrc'])) {
            echo json_encode(['status' => 'success', 'message' => 'Image src updated']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update image']);
        }
    }

    public function deleteImage($imageId) {
        $imageModel = new ImageModel($this->db);

        if (!$imageModel->getImageById($imageId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Image not found']);
            return;
        }

        if ($imageModel->deleteImage($imageId)) {
            echo json_encode(['status' => 'success', 'message' => 'Image deleted']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete image']);
        }
    }

    public function createProductImage($data, $slug) {
        $productModel = new ProductModel($this->db);
        $product = $productModel->getProductById($slug);
        if (!$product) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Product not found']);
            return;
        }
        // check if imageId already exists
        $imageModel = new ImageModel($this->db);
        $image = $imageModel->getImageById($data['imageId']);
        if ($image) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Image with name '.$data['imageId'].' already exists']);
            return;
        }
        if ($data['type'] != 'product' && $data['type'] != 'description') {
            http_response_code(404);
            echo json_encode(['status'=> 'error', 'message'=> 'Invalid type']);
            return;
        }

        $imageModel->createImage($data['imageId'], $data['src']);
        $imageModel->createProductImage($slug, $data['imageId'], $data['type']);
        echo json_encode(['status' => 'success', 'message' => 'Product image created']);
    }

    public function getImagesFromProduct($slug) {
        $imageModel = new ImageModel($this->db);
        $images = $imageModel->getImagesFromProduct($slug);
        if (!$images) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No images found']);
            return;
        }
        $response = [];
        foreach ($images as $image) {
            $response[] = [
                'imageId' => $image['imageId'],
                'src' => $image['src'],
                'type' => $image['type']
            ];
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function createBlogImage($data, $blogId) {
        $blogModel = new BlogModel($this->db);
        $blog = $blogModel->getBlogById($blogId);
        if (!$blog) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Blog not found']);
            return;
        }

        $imageModel = new ImageModel($this->db);
        $imageModel->createImage($data['imageId'], $data['src']);
        $imageModel->createBlogImage($blogId, $data['imageId'], $data['isThumbnail']);
        echo json_encode(['status' => 'success', 'message' => 'Blog image created']);
    }

    public function getImagesFromBlog($blogId) {
        $imageModel = new ImageModel($this->db);
        $images = $imageModel->getImagesFromBlog($blogId);
        if (!$images) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No images found']);
            return;
        }
        $response = [];
        foreach ($images as $image) {
            $response[] = [
                'imageId' => $image['imageId'],
                'src' => $image['src'],
                'isThumbnail' => $image['isThumbnail']
            ];
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }
}