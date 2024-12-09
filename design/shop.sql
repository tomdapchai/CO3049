-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 05:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blogId` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `content_original` longtext NOT NULL,
  `posted` datetime NOT NULL DEFAULT current_timestamp(),
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blogId`, `title`, `content`, `content_original`, `posted`, `tags`) VALUES
('blog-sunday', 'Blog for a beautiful sunday evening', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">What is Lorem Ipsum?</h1>\n<h2 class=\"text-lg font-bold mb-2\">From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</h2>\n<p class=\"text-base text-black\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:<br/><br/>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”<br/><br/>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733649446/cqjtgjvir0jmzoac4ogy.jpg\" alt=\"blog-sunday-1\" width=\"600\" height=\"300\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”<br/><br/>As Cicero would put it, “Um, not so fast.”<br/><br/>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733649447/fkasycdvthtzjogam5ek.png\" alt=\"blog-sunday-2\" width=\"500\" height=\"300\" class=\"rounded-lg\" /></div>\n<h2 class=\"text-lg font-bold mb-2\">Hedonist Roots</h2>\n<p class=\"text-base text-black\">Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.<br/><br/>In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733674065/ydauu7tcbdxubpaxcwnp.png\" alt=\"blog-sunday-3\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.</p></div>', 'HEADLINE<What is Lorem Ipsum?>\nSECTION<From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.>\nP<Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n\n    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”\n\nThe purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.>\nIMG<blog-sunday-1, 600, 300>\nP<Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”\n\nAs Cicero would put it, “Um, not so fast.”\n\nThe placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.>\nIMG<blog-sunday-2, 500, 300>\nSECTION<Hedonist Roots>\nP<Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.\n\nIn particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:>\nIMG<blog-sunday-3, 600, 400>\nP<McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.>', '2024-12-08 16:17:32', '[\"blog\",\"sunday\"]');

-- --------------------------------------------------------

--
-- Table structure for table `blog_image`
--

CREATE TABLE `blog_image` (
  `imageId` varchar(255) NOT NULL,
  `blogId` varchar(255) NOT NULL,
  `isThumbnail` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_image`
--

INSERT INTO `blog_image` (`imageId`, `blogId`, `isThumbnail`) VALUES
('blog-sunday-1', 'blog-sunday', 0),
('blog-sunday-2', 'blog-sunday', 0),
('blog-sunday-3', 'blog-sunday', 0),
('blog-sunday-thumb', 'blog-sunday', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contactId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `subject` mediumtext DEFAULT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contactId`, `name`, `email`, `phone_number`, `subject`, `message`) VALUES
(1, 'Tam', 'vothanhtam2407@gmail.com', '0935671005', 'Test contact', 'HI I\'d talk about something wrong with your shop'),
(2, 'Test', 'sadasd@gmail.com', '', '', 'Hi I\'d like to complain something');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `imageId` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`imageId`, `src`) VALUES
('blog-sunday-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733649446/cqjtgjvir0jmzoac4ogy.jpg'),
('blog-sunday-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733649447/fkasycdvthtzjogam5ek.png'),
('blog-sunday-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733674065/ydauu7tcbdxubpaxcwnp.png'),
('blog-sunday-thumb', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733674109/zfuffpp6aztfmeu0nt8w.png'),
('gonna-done-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733628324/edgs2huex6myg8ane9tq.jpg'),
('gonna-done-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733628324/tgyryq1jcgxhx0l3e4zn.png'),
('gonna-done-thumb', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733628325/so7fg2z4tfdstuyspokx.png'),
('sofa-chair-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623298/buss6zzr3hlg7lm6wr7p.jpg'),
('sofa-chair-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623298/m37bxsvxnhvwo3fj3x0u.jpg'),
('sofa-chair-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623300/wrylzxxwzasqse1ej9hv.jpg'),
('sofa-chair-desc', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623303/imbi10qsmo6md9msbrko.jpg'),
('table-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733647858/gakygsqvafnczkwwafew.jpg'),
('table-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733647863/iqxo3jhukspdz5a9qmxe.jpg'),
('table-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733647864/gp1gbsbcdlckxox6gaj4.jpg'),
('wood-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733543692/u6twlci8rvouveucttgs.png'),
('wood-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733645950/kwqliakxuualevbjsqjj.jpg'),
('wood-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733646164/yytqavaokfe2omlydl5r.jpg'),
('wood-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733543695/tck1m2xjh71vlyeo5dcd.jpg'),
('wood-desc-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733645952/i3z6m6mkzvlunicn98s9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `products` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`products`)),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(500) NOT NULL,
  `status` enum('completed','pending','cancelled') NOT NULL DEFAULT 'pending',
  `completedAt` datetime DEFAULT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`orderId`, `userId`, `name`, `products`, `createdAt`, `phone_number`, `email`, `address`, `status`, `completedAt`, `total`) VALUES
(6, 5, 'Thanh Tam', '[{\"quantity\":5,\"color\":\"yellow\",\"size\":\"compact\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-07 22:53:21', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'cancelled', NULL, 5000000),
(7, 5, 'Thanh Tam', '[{\"quantity\":1,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"},{\"quantity\":4,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"blue\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-07 23:15:40', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 17:09:07', 5000000),
(8, 5, 'Thanh Tam', '[{\"quantity\":1,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"},{\"quantity\":4,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"blue\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":3,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"large\",\"color\":\"blue\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-07 23:29:52', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 17:09:08', 8000000),
(9, 5, 'Thanh Tam', '[{\"quantity\":5,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":5,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"large\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":5,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"large\",\"color\":\"blue\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":5,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"large\",\"color\":\"yellow\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":5,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"compact\",\"color\":\"blue\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-07 23:31:16', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 17:09:05', 25000000),
(10, 5, 'Thanh Tam', '[{\"quantity\":5,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"},{\"quantity\":2,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-07 23:59:21', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'cancelled', NULL, 7000000),
(11, 5, 'Thanh Tam', '[{\"quantity\":5,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"},{\"quantity\":2,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-08 00:01:47', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 17:09:02', 7000000),
(12, 5, 'Thanh Tam', '[{\"quantity\":1,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"}]', '2024-12-08 07:24:55', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 17:09:00', 1000000),
(13, 5, 'Thanh Tam', '[{\"quantity\":2,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"}]', '2024-12-08 07:26:25', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 17:09:00', 2000000),
(15, 5, 'Thanh Tam', '[{\"quantity\":6,\"color\":\"yellow\",\"size\":\"compact\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":1,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"yellow\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-08 08:53:03', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'cancelled', NULL, 7000000),
(16, NULL, 'Thanh Tam', '[{\"quantity\":2,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"},{\"quantity\":2,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"standard\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000}]', '2024-12-08 08:55:04', '0935671005', 'asdasd@gmail.com', '01 Street 06, Thu Duc, Hà Giang', 'completed', '2024-12-08 17:08:58', 4000000),
(17, 5, 'Thanh Tam', '[{\"quantity\":1,\"productName\":\"Wooden styled chair\",\"productId\":\"ghe-go-cong-thai-hoc\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"yellow\"}]', '2024-12-08 08:57:14', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 06:07:19', 1000000),
(18, 5, 'Handsome dude', '[{\"quantity\":1,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"compact\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":1,\"productName\":\"Sofa chair with handmade\",\"productId\":\"sofa-chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733623298\\/buss6zzr3hlg7lm6wr7p.jpg\",\"productPrice\":10000000,\"size\":\"compact\",\"color\":\"yellow\"}]', '2024-12-08 11:59:56', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 06:10:25', 11000000);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `size` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `color` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `short_description` mediumtext NOT NULL,
  `full_description` longtext DEFAULT NULL,
  `full_description_original` longtext NOT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `name`, `price`, `size`, `color`, `short_description`, `full_description`, `full_description_original`, `tags`) VALUES
('ban-an-tien-loi', 'Fine Dinning Table', 5000000, '[\"compact\",\"standard\",\"large\"]', '[\"violet\",\"black\",\"yellow\"]', 'This is a great table for multi purpose family uses', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">The best dinning table you can find</h1>\n<h2 class=\"text-lg font-bold mb-2\">Why it should in your house</h2>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733647864/gp1gbsbcdlckxox6gaj4.jpg\" alt=\"table-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<The best dinning table you can find>\nSECTION<Why it should in your house>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >\nIMG<table-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >', '[\"dining\",\"table\",\"luxury\"]'),
('ghe-go-cong-thai-hoc', 'Wooden styled chair', 2000000, '[\"standard\",\"large\",\"compact\"]', '[\"yellow\",\"violet\",\"black\"]', 'This is the description', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">This is headline</h1>\n<p class=\"text-base text-black\">Với một số tập đoàn lớn như Tập đoàn Dầu khí quốc gia Việt Nam, Điện lực, Bưu chính Viễn thông, Công nghiệp than - khoáng sản, Tổng công ty Đường sắt, Đầu tư phát triển đường cao tốc Việt Nam... sẽ chuyển tổ chức đảng về trực thuộc Đảng bộ Chính phủ.<br/><br/>Trong Hội nghị tổng kết của Ủy ban quản lý vốn nhà nước tại doanh nghiệp chiều 6/12, Phó thủ tướng Hồ Đức Phớc đề cập tới Nghị quyết số 18 của Ban chấp hành Trung ương Đảng về sắp xếp tổ chức bộ máy. Theo ông Phớc, định hướng sáp nhập, chia tách các đơn vị nhằm giúp bộ máy hành chính hoạt động hiệu quả, tinh gọn hơn.</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733543695/tck1m2xjh71vlyeo5dcd.jpg\" alt=\"wood-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733645952/i3z6m6mkzvlunicn98s9.jpg\" alt=\"wood-desc-2\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">Hi vọng thông tin trên đã giúp bạn hiểu hơn về sản phẩm của chúng tôi</p></div>', 'HEADLINE<This is headline>\nP<Với một số tập đoàn lớn như Tập đoàn Dầu khí quốc gia Việt Nam, Điện lực, Bưu chính Viễn thông, Công nghiệp than - khoáng sản, Tổng công ty Đường sắt, Đầu tư phát triển đường cao tốc Việt Nam... sẽ chuyển tổ chức đảng về trực thuộc Đảng bộ Chính phủ.\n\nTrong Hội nghị tổng kết của Ủy ban quản lý vốn nhà nước tại doanh nghiệp chiều 6/12, Phó thủ tướng Hồ Đức Phớc đề cập tới Nghị quyết số 18 của Ban chấp hành Trung ương Đảng về sắp xếp tổ chức bộ máy. Theo ông Phớc, định hướng sáp nhập, chia tách các đơn vị nhằm giúp bộ máy hành chính hoạt động hiệu quả, tinh gọn hơn.>\nIMG<wood-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<wood-desc-2, 600, 400>\nP<Hi vọng thông tin trên đã giúp bạn hiểu hơn về sản phẩm của chúng tôi>', '[\"wood\",\"chair\",\"comfort\"]'),
('sofa-chair', 'Sofa chair with handmade', 10000000, '[\"compact\",\"standard\",\"large\"]', '[\"yellow\",\"violet\",\"black\"]', 'Your favorite sofa chair', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733623303/imbi10qsmo6md9msbrko.jpg\" alt=\"sofa-chair-desc\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\r\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\r\n\r\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\r\nIMG<sofa-chair-dec, 600, 400>\r\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\r\n\r\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"sofa\",\"chair\",\"comfort\"]');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `imageId` varchar(255) NOT NULL,
  `productId` varchar(255) NOT NULL,
  `type` enum('product','description') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`imageId`, `productId`, `type`) VALUES
('sofa-chair-1', 'sofa-chair', 'product'),
('sofa-chair-2', 'sofa-chair', 'product'),
('sofa-chair-3', 'sofa-chair', 'product'),
('sofa-chair-desc', 'sofa-chair', 'description'),
('table-1', 'ban-an-tien-loi', 'product'),
('table-2', 'ban-an-tien-loi', 'product'),
('table-desc-1', 'ban-an-tien-loi', 'description'),
('wood-1', 'ghe-go-cong-thai-hoc', 'product'),
('wood-2', 'ghe-go-cong-thai-hoc', 'product'),
('wood-3', 'ghe-go-cong-thai-hoc', 'product'),
('wood-desc-1', 'ghe-go-cong-thai-hoc', 'description'),
('wood-desc-2', 'ghe-go-cong-thai-hoc', 'description');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `reviewId` int(11) NOT NULL,
  `productId` varchar(255) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `rating` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `reviewer` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`reviewId`, `productId`, `content`, `rating`, `userId`, `reviewer`, `createdAt`) VALUES
(5, 'ghe-go-cong-thai-hoc', 'nice product hehe', 5, 5, 'Thanh Tam', '2024-12-07 14:24:28'),
(6, 'ghe-go-cong-thai-hoc', 'fabulous, fantastic', 4, 5, 'Thanh Tam', '2024-12-07 23:34:32'),
(9, 'sofa-chair', 'awesome chair', 5, 5, 'Thanh Tam', '2024-12-08 11:59:31');

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `tag_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`tag_name`) VALUES
('blog'),
('chair'),
('comfort'),
('dining'),
('luxury'),
('sofa'),
('sunday'),
('table'),
('tag1'),
('tag2'),
('tag3'),
('wood');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `joinAt` datetime NOT NULL DEFAULT current_timestamp(),
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `status` enum('active','banned') NOT NULL DEFAULT 'active',
  `cart` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`cart`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `password`, `name`, `joinAt`, `username`, `email`, `phone_number`, `street`, `city`, `status`, `cart`) VALUES
(2, '$2y$10$KQZUryeXXoAFrDMz8tcuOuc7KATco2rta/T4JR7tKipQfISlfVdGK', 'Thanh Tâm', '2024-12-08 23:13:31', 'test4', 'vothanhtam2407@gmail.com', '0935671005', '01 Street 06, An Phu Ward', 'Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'active', '[{\"quantity\":1,\"color\":\"purple\",\"size\":\"L\",\"productName\":\"Leviosa\",\"productId\":\"leviosa\",\"productImage\":\"\\/images\\/sample-products\\/2.png\",\"productPrice\":2000000},{\"quantity\":1,\"color\":\"purple\",\"size\":\"L\",\"productName\":\"Lolito\",\"productId\":\"lolito\",\"productImage\":\"\\/images\\/sample-products\\/3.png\",\"productPrice\":3000000},{\"quantity\":1,\"color\":\"purple\",\"size\":\"L\",\"productName\":\"Respira\",\"productId\":\"respira\",\"productImage\":\"\\/images\\/sample-products\\/4.jpg\",\"productPrice\":4000000}]'),
(4, '$2y$10$z2N9HXu9967EHnFwmkHUs.xKn2XQ37tnvJKqwDGM5AXRp3Rjuitzi', NULL, '2024-12-08 23:13:31', 'test3', NULL, NULL, NULL, NULL, 'active', NULL),
(5, '$2y$10$91YTRnAsAQh.MXHzxQ.SFuPSaSQ4MhyxRarhREeg4UnhmxnAcYZ1m', 'Thanh Tam', '2024-12-08 23:13:31', 'tomdapchai', 'vothanhtam2407@gmail.com', '0935671005', '01 Street 06', 'Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'active', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blogId`);

--
-- Indexes for table `blog_image`
--
ALTER TABLE `blog_image`
  ADD PRIMARY KEY (`imageId`),
  ADD KEY `blogId` (`blogId`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contactId`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`imageId`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`imageId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`reviewId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`tag_name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `reviewId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_image`
--
ALTER TABLE `blog_image`
  ADD CONSTRAINT `blog_image_ibfk_1` FOREIGN KEY (`imageId`) REFERENCES `image` (`imageId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_image_ibfk_2` FOREIGN KEY (`blogId`) REFERENCES `blog` (`blogId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE SET NULL;

--
-- Constraints for table `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`imageId`) REFERENCES `image` (`imageId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_image_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
