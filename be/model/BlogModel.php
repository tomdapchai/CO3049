<?php
require_once '../../config/database.php';

class BlogModel {
    private $db;
    private $table = 'blog';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllBlogs() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getBlogById($blogId) {
        $query = "SELECT * FROM $this->table WHERE blogId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$blogId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createBlog($data) {
        $query = "INSERT INTO $this->table (blogId, title, content, content_original, overview, thumbnail, tags) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['blogId'],
            $data['title'],
            $data['content'],
            $data['contentOriginal'],
            $data['overview'],
            $data['thumbnail'],
            json_encode($data['tags'])
        ]);
    }

    public function updateBlog($blogId, $data) {
        $query = "UPDATE $this->table SET title = ?, content = ?, tags = ?, content_original = ?, overview = ?, thumbnail = ? 
                  WHERE blogId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['title'],
            $data['content'],
            json_encode($data['tags']),
            $data['contentOriginal'],
            $data['overview'],
            $data['thumbnail'],
            $blogId
        ]);
    }

    public function deleteBlog($blogId) {
        $query = "DELETE FROM $this->table WHERE blogId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$blogId]);
    }
}