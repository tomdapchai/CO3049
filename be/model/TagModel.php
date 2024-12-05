<?php
require_once '../../config/database.php';

class TagModel {
    private $db;
    private $table = 'tag';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllTags() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getTagByName($tagName) {
        $query = "SELECT * FROM $this->table WHERE tag_name = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$tagName]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createTag($tagName) {
        $query = "INSERT INTO $this->table (tag_name) 
                  VALUE (?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $tagName
        ]);
    }

    public function updateTag($tagName, $newTagName) {
        $query = "UPDATE $this->table SET tag_name = ?
                  WHERE tag_name = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $newTagName,
            $tagName
        ]);
    }

    public function deleteTag($tagName) {
        $query = "DELETE FROM $this->table WHERE tag_name = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$tagName]);
    }
}