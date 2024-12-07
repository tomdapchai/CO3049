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
        $query = "
            SELECT i.*, pi.type 
            FROM product_image pi
            INNER JOIN image i ON pi.imageId = i.imageId
            WHERE pi.productId = ?
        ";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$productId]);
    
        $images = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        return $images;
    }

    // blog images
    public function createBlogImage($blogId, $imageId, $isThumbnail) {
        $query = "INSERT INTO blog_image (blogId, imageId, isThumbnail) VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$blogId, $imageId, $isThumbnail]);
    }

    public function getImagesFromBlog($blogId) {
        $query = "
            SELECT i.*, bi.isThumbnail 
            FROM blog_image bi
            INNER JOIN image i ON bi.imageId = i.imageId
            WHERE bi.blogId = ?
        ";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$blogId]);
    
        $images = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        return $images;
    }
    

}