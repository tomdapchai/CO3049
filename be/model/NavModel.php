<?php
require_once '../../config/database.php';

class NavModel {
    private $db;
    private $table = 'nav_links';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllNavLinks() {
        $query = "SELECT * FROM $this->table ORDER BY display_order ASC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getNavLinkById($id) {
        $query = "SELECT * FROM $this->table WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createNavLink($data) {
        // Get the highest order value
        $query = "SELECT MAX(display_order) as max_order FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $newOrder = ($result['max_order'] !== null) ? $result['max_order'] + 1 : 1;
        
        $query = "INSERT INTO $this->table (title, url, display_order) VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['title'],
            $data['url'],
            $newOrder
        ]);
    }

    public function updateNavLink($data) {
        $query = "UPDATE $this->table SET title = ?, url = ? WHERE id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['title'],
            $data['url'],
            $data['id']
        ]);
    }

    public function deleteNavLink($id) {
        // Get the order of the link to be deleted
        $query = "SELECT display_order FROM $this->table WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$id]);
        $link = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$link) {
            return false;
        }
        
        $deletedOrder = $link['display_order'];
        
        // Delete the link
        $query = "DELETE FROM $this->table WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $deleted = $stmt->execute([$id]);
        
        if ($deleted) {
            // Update the order of remaining links
            $query = "UPDATE $this->table SET display_order = display_order - 1 WHERE display_order > ?";
            $stmt = $this->db->prepare($query);
            $stmt->execute([$deletedOrder]);
        }
        
        return $deleted;
    }
    
    public function updateNavLinkOrder($data) {
        $success = true;
        $this->db->beginTransaction();
        
        try {
            foreach ($data as $link) {
                $query = "UPDATE $this->table SET display_order = ? WHERE id = ?";
                $stmt = $this->db->prepare($query);
                $result = $stmt->execute([$link['display_order'], $link['id']]);
                
                if (!$result) {
                    $success = false;
                    break;
                }
            }
            
            if ($success) {
                $this->db->commit();
                return true;
            } else {
                $this->db->rollBack();
                return false;
            }
        } catch (Exception $e) {
            $this->db->rollBack();
            return false;
        }
    }
}