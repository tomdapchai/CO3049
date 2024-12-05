<?php
require_once '../../model/TagModel.php';

class TagController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllTags() {
        $tagModel = new TagModel($this->db);
        $tags = $tagModel->getAllTags();
        if (!$tags) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No tags found']);
            return;
        }
        $response = [];
        while ($tag = $tags->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $tag;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getTagByName($tagName) {
        $tagModel = new TagModel($this->db);
        $tag = $tagModel->getTagByName($tagName);
        if (!$tag) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Tag not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $tag->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createTag($data) {
        $tagModel = new TagModel($this->db);
        // check if tag already exists
        if ($tagModel->getTagByName($data['tagName'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Tag already exists']);
            return;
        }
        if ($tagModel->createTag($data['tagName'])) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Tag created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create tag']);
        }
    }

    public function updateTag($tagName, $data) {
        $tagModel = new TagModel($this->db);
        // check if tag exists
        if (!$tagModel->getTagByName($tagName)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Tag not found']);
            return;
        }

        if ($tagModel->updateTag($tagName, $data['newTagName'])) {
            echo json_encode(['status' => 'success', 'message' => 'Tag updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update tag']);
        }
    }

    public function deleteTag($tagName) {
        $tagModel = new TagModel($this->db);
        // check if tag exists
        if (!$tagModel->getTagByName($tagName)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Tag not found']);
            return;
        }

        if ($tagModel->deleteTag($tagName)) {
            echo json_encode(['status' => 'success', 'message' => 'Tag deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete tag']);
        }
    }
}