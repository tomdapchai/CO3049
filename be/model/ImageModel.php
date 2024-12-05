<?php

require_once '../../config/database.php';
// this would include blog images and product images
class ImageModel {
    private $db;
    private $table = 'image';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllImages() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getImageById($imageId) {
        $query = "SELECT * FROM $this->table WHERE imageId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$imageId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createImage($imageId, $src) {
        // check if imageId already exists
        $image = $this->getImageById($imageId);
        if ($image) {
            return false;
        }

        $query = "INSERT INTO $this->table (imageId, src) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$imageId, $src]);
    }

    public function updateImageId($imageId, $newImageId) {
        $query = "UPDATE $this->table SET imageId = ? WHERE imageId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$newImageId, $imageId]);
    }

    public function updateImageSrc($imageId, $newSrc) {
        $query = "UPDATE $this->table SET src = ? WHERE imageId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$newSrc, $imageId]);
    }

    public function deleteImage($imageId) {
        $query = "DELETE FROM $this->table WHERE imageId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$imageId]);
    }

    // product images
    public function createProductImage($productId, $imageId, $type) {
        // check if productId exists (this will be executed on controller)

        $query = "INSERT INTO product_image (productId, imageId, type) VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$productId, $imageId, $type]);
    }

    public function getImagesFromProduct($productId) {
        $query = "SELECT * FROM product_image WHERE productId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$productId]);
        // take the imageIds of result, then search in image table to get src
        $images = [];
        while ($image = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $query = "SELECT * FROM image WHERE imageId = ?";
            $stmt2 = $this->db->prepare($query);
            $stmt2->execute([$image['imageId']]);
            $images[] = $stmt2->fetch(PDO::FETCH_ASSOC);
        }
        return $images;
    }

    // blog images
    public function createBlogImage($blogId, $imageId) {
        $query = "INSERT INTO blog_image (blogId, imageId) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$blogId, $imageId]);
    }

    public function getImagesFromBlog($blogId) {
        $query = "SELECT * FROM blog_image WHERE blogId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$blogId]);
        // take the imageIds of result, then search in image table to get src
        $images = [];
        while ($image = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $query = "SELECT * FROM image WHERE imageId = ?";
            $stmt2 = $this->db->prepare($query);
            $stmt2->execute([$image['imageId']]);
            $images[] = $stmt2->fetch(PDO::FETCH_ASSOC);
        }
        return $images;
    }

}