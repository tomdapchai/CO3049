<?php
require_once '../../config/database.php';
require_once '../../model/OrderModel.php';
require_once '../../model/ProductModel.php';
include_once '../../model/UserModel.php';
class OrderController {
    private $db;
    private $orderModel;

    public function __construct($db) {
        $this->db = $db;
        $this->orderModel = new OrderModel($db);
    }

    public function getAllOrders() {
        $orders = $this->orderModel->getAllOrders();
        if ($orders) {
            $orders_arr = array();
            while ($row = $orders->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $order_item = array(
                    'orderId' => $orderId,
                    'userId' => $userId,
                    'products' => json_decode($products),
                    'phone_number' => $phone_number,
                    'address' => $address,
                    'status' => $status,
                    'createdAt' => $createdAt,
                    'completedAt' => $completedAt,
                    'total' => $total,
                    'name' => $name,
                    'discount' => $discount
                );
                array_push($orders_arr, $order_item);
            }
            echo json_encode($orders_arr);
        } else {
            echo json_encode(array('message' => 'No orders found'));
        }
    }

    public function getOrderById($orderId) {
        $order = $this->orderModel->getOrderById($orderId);
        if ($order) {
            $row = $order->fetch(PDO::FETCH_ASSOC);
            extract($row);
            $order_item = array(
                'orderId' => $orderId,
                'userId' => $userId,
                'products' => json_decode($products),
                'phone_number' => $phone_number,
                'address' => $address,
                'status' => $status,
                'createdAt' => $createdAt,
                'completedAt' => $completedAt,
                'total' => $total,
                'name' => $name,
                'discount' => $discount
            );
            echo json_encode($order_item);
        } else {
            echo json_encode(array('message' => 'No order found'));
        }
    }

    public function getOrderByUserId($userId) {
        $order = $this->orderModel->getOrderByUserId($userId);
        if ($order) {
            $order_arr = array();
            while ($row = $order->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $order_item = array(
                    'orderId' => $orderId,
                    'userId' => $userId,
                    'products' => json_decode($products),
                    'phone_number' => $phone_number,
                    'address' => $address,
                    'status' => $status,
                    'createdAt' => $createdAt,
                    'completedAt' => $completedAt,
                    'total' => $total,
                    'name' => $name,
                    'discount' => $discount
                );
                array_push($order_arr, $order_item);
            }
            echo json_encode($order_arr);
        } else {
            echo json_encode(array('message' => 'No order found'));
        }
    }


    public function createOrder($data) {
        // check if products exists
        $productModel = new ProductModel($this->db);
        // check if products exists, by checking each productId in data['products']
        // data['products'] is an array of productId and quantity
        foreach ($data['products'] as $product) {
            if (!$productModel->getProductById($product['productId'])) {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Product not found']);
                return;
            }
        }

        $orderId = $this->orderModel->createOrder($data);
        if ($orderId) {
            echo json_encode(array('orderId' => $orderId));
        } else {
            echo json_encode(array('message' => 'Failed to create order'));
        }
    }


    // only for admin
    public function updateOrder($orderId, $data) {
        // check if order exists
        if (!$this->orderModel->getOrderById($orderId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Order not found']);
            return;
        }

        // check if products exists
        $productModel = new ProductModel($this->db);
        foreach ($data['products'] as $product) {
            if (!$productModel->getProductById($product['productId'])) {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Product not found']);
                return;
            }
        }

        if ($this->orderModel->updateOrder($orderId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Order updated']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to update order']);
        }
    }

    public function updateOrderStatus($orderId, $status) {
        // check if order exists
        if (!$this->orderModel->getOrderById($orderId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Order not found']);
            return;
        }

        if ($this->orderModel->updateOrderStatus($orderId, $status)) {
            echo json_encode(['status' => 'success', 'message' => 'Order status updated']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to update order status']);
        }
    }


    public function deleteOrder($orderId) {
        // check if order exists
        if (!$this->orderModel->getOrderById($orderId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Order not found']);
            return;
        }

        if ($this->orderModel->deleteOrder($orderId)) {
            echo json_encode(['status' => 'success', 'message' => 'Order deleted']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete order']);
        }
    }

}