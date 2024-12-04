<?php
require_once '../../model/BlogModel.php';

class BlogController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllBlogs() {
        $blogModel = new BlogModel($this->db);
        $blogs = $blogModel->getAllBlogs();
        if (!$blogs) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No blogs found']);
            return;
        }
        $response = [];
        while ($blog = $blogs->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $blog;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getBlogById($blogId) {
        $blogModel = new BlogModel($this->db);
        $blog = $blogModel->getBlogById($blogId);
        if (!$blog) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Blog not found']);
        }
        echo json_encode(['status' => 'success', 'data' => $blog->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createBlog($data) {
        $blogModel = new BlogModel($this->db);
        // check if blog already exists
        if ($blogModel->getBlogById($data['blogId'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Blog with id '.$data['blogId'].' already exists']);
            return;
        }

        if ($blogModel->createBlog($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Blog created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create blog']);
        }
    }

    public function updateBlog($blogId, $data) {
        $blogModel = new BlogModel($this->db);
        // check if blog exists
        if (!$blogModel->getBlogById($blogId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Blog not found']);
            return;
        }

        if ($blogModel->updateBlog($blogId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Blog updated']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update blog']);
        }
    }

    public function deleteBlog($blogId) {
        $blogModel = new BlogModel($this->db);
        // check if blog exists
        if (!$blogModel->getBlogById($blogId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Blog not found']);
            return;
        }
        
        if ($blogModel->deleteBlog($blogId)) {
            echo json_encode(['status' => 'success', 'message' => 'Blog deleted']);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete blog']);
        }
    }

}