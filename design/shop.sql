-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2025 at 03:51 PM
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
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`id`, `title`, `image`, `link`, `enable`) VALUES
(1, 'Table advertise', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740734176/fn1lanvtfrc7ceccrsnx.jpg', 'http://localhost:3000/shop?query=chair', 1);

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blogId` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `content_original` longtext NOT NULL,
  `overview` text DEFAULT NULL,
  `posted` datetime NOT NULL DEFAULT current_timestamp(),
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `thumbnail` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blogId`, `title`, `content`, `content_original`, `overview`, `posted`, `tags`, `thumbnail`) VALUES
('blog-sunday', 'Blog for a beautiful sunday evening', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">What is Lorem Ipsum?</h1>\n<h2 class=\"text-lg font-bold mb-2\">From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</h2>\n<p class=\"text-base text-black\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:<br/><br/>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”<br/><br/>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733649446/cqjtgjvir0jmzoac4ogy.jpg\" alt=\"blog-sunday-1\" width=\"600\" height=\"300\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”<br/><br/>As Cicero would put it, “Um, not so fast.”<br/><br/>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733649447/fkasycdvthtzjogam5ek.png\" alt=\"blog-sunday-2\" width=\"500\" height=\"300\" class=\"rounded-lg\" /></div>\n<h2 class=\"text-lg font-bold mb-2\">Hedonist Roots</h2>\n<p class=\"text-base text-black\">Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.<br/><br/>In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733674065/ydauu7tcbdxubpaxcwnp.png\" alt=\"blog-sunday-3\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.</p></div>', 'HEADLINE<What is Lorem Ipsum?>\nSECTION<From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.>\nP<Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n\n    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”\n\nThe purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.>\nIMG<blog-sunday-1, 600, 300>\nP<Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”\n\nAs Cicero would put it, “Um, not so fast.”\n\nThe placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.>\nIMG<blog-sunday-2, 500, 300>\nSECTION<Hedonist Roots>\nP<Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.\n\nIn particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:>\nIMG<blog-sunday-3, 600, 400>\nP<McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.>', 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.', '2024-12-08 16:17:32', '[\"blog\",\"sunday\"]', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733674109/zfuffpp6aztfmeu0nt8w.png'),
('blog-test-thumb', 'Blog test thumb', '<div class=\"w-full flex flex-col justify-center items-start\">Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb </div>', 'Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb ', 'Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb Blog test thumb', '2025-03-03 21:32:40', '[\"test\"]', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1741012360/hrmqiuxggnox21t7zjnc.jpg');

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
('blog-sunday-thumb', 'blog-sunday', 1),
('blog-test-thumb-hange', 'blog-test-thumb', 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text DEFAULT NULL,
  `display_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`, `image`, `display_order`) VALUES
('bed', 'Beds hehe', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740665869/q0ic5mketfqgcroeuhxo.jpg', 1),
('chair', 'Chair', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740920415/c9sz9cadjrtabfzwlixb.png', 2);

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
  `message` longtext NOT NULL,
  `sendAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contactId`, `name`, `email`, `phone_number`, `subject`, `message`, `sendAt`) VALUES
(1, 'Tam', 'vothanhtam2407@gmail.com', '0935671005', 'Test contact', 'HI I\'d talk about something wrong with your shop', '2025-03-02 21:41:14'),
(2, 'Test', 'sadasd@gmail.com', '', '', 'Hi I\'d like to complain something', '2025-03-02 21:41:14'),
(3, 'Tam', 'example@gmail.com', '', '', 'Hi asdasdasdasdasdsdfsdff', '2025-03-02 21:41:14'),
(4, 'aaaaaaaaa', 'contact@furniro.com', '', '', 'adadsdasdasda For more information about our products & services, please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!', '2025-03-03 08:29:07');

-- --------------------------------------------------------

--
-- Table structure for table `extension`
--

CREATE TABLE `extension` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `status_install` tinyint(1) NOT NULL DEFAULT 0,
  `status_enable` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `extension`
--

INSERT INTO `extension` (`id`, `name`, `description`, `status_install`, `status_enable`) VALUES
('advertisement', 'Advertisement', 'Monetize your website by displaying ads from partners and sponsors.', 1, 0),
('chatbot', 'Chatbot', 'Add an AI-powered chatbot to assist your customers with inquiries and support.', 1, 1),
('feedback-carousel', 'Feedback Carousel', 'Display customer reviews and testimonials in a carousel.', 1, 1),
('image-gallery', 'Image Gallery', 'Beautiful, responsive image galleries to showcase your products or portfolio.', 1, 1),
('price-comparison', 'Price Comparison', 'Compare prices with competitors to help customers make informed decisions.', 1, 1),
('products-for-you', 'Products For You', 'Personalized product recommendations based on user browsing history and preferences.', 1, 1);

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
('about-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733808487/wxscpedp1425kojpyxyl.jpg'),
('about-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733808488/ughstw9omnle3evqryzu.jpg'),
('about-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733808489/wfgjmdutx9pgcjfu2gk7.jpg'),
('about-4', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733808489/efnl6f59lpjrdpybtnzn.jpg'),
('ban-an-thep-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733934046/nlwgo53rfbbvdswkjqha.png'),
('ban-an-thep-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733934045/ouuqyci7ua3jgqtwu8xo.png'),
('ban-an-thep-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733934047/qlu3kcobqwxk8dssrbci.jpg'),
('ban-lam-viec-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932794/i15x8ubjfa3vvph8i1ba.jpg'),
('ban-lam-viec-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932794/n9te4wmee4gnardhb6je.jpg'),
('ban-lam-viec-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932797/xceczs8flkllk9jzasvn.jpg'),
('ban-lam-viec-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932804/cgxdw6vkojsrc9ale1qq.jpg'),
('ban-thep-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933785/lnqufdcbzvqxsycxmcqm.jpg'),
('ban-thep-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933785/rbbjq5d5ivz5rbnbet3x.png'),
('ban-thep-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933785/pw9ii6psn0dmjnj8fl2t.png'),
('ban-thep-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933789/jepyrphrst7uqzellcaa.jpg'),
('ban-tra-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931587/pxv7yu8ygrmggj0yumyp.png'),
('ban-tra-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931586/qbgnb6r3mzvuwyqi5atb.jpg'),
('ban-tra-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931591/hwjrrowt9xse1fqff6ox.jpg'),
('ban-tra-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931592/zkoxbkhzljpxm9vr6s2t.jpg'),
('banner', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740761003/iotpemxagsgxxelx7evj.jpg'),
('blog-sunday-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733649446/cqjtgjvir0jmzoac4ogy.jpg'),
('blog-sunday-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733649447/fkasycdvthtzjogam5ek.png'),
('blog-sunday-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733674065/ydauu7tcbdxubpaxcwnp.png'),
('blog-sunday-thumb', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733674109/zfuffpp6aztfmeu0nt8w.png'),
('blog-test-thumb-hange', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1741012360/hrmqiuxggnox21t7zjnc.jpg'),
('blog-thursday-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733935654/nacwvtwrwz8yvckvzaug.png'),
('blog-thursday-thumb', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733935655/txblkv8s1gtas8gkiqoz.png'),
('demo-furnora-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740920207/qb2itqdkpx1etyni9tba.png'),
('demo-furnora-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740920206/ze1m42t0jhcupgjf3ubt.png'),
('demo-furnora-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740920208/ax3bifzaoya2rfdfmsgt.jpg'),
('demo-furnora-description-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740920221/pvglzbx2uxtepyq4eakj.jpg'),
('giuong-go-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931813/pacj8kdo7qzesb59azwi.jpg'),
('giuong-go-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931812/uz1uh251ajqqzjqlrr4c.jpg'),
('giuong-go-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931813/ptzbzi0jpgvwzefs90iz.png'),
('giuong-go-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733931818/ppkkdxalz0g3c59tdtvd.jpg'),
('gonna-done-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733628324/edgs2huex6myg8ane9tq.jpg'),
('gonna-done-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733628324/tgyryq1jcgxhx0l3e4zn.png'),
('gonna-done-thumb', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733628325/so7fg2z4tfdstuyspokx.png'),
('hange', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740586991/oe3bzabtndast1rhnzwf.jpg'),
('sofa-chair-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623298/buss6zzr3hlg7lm6wr7p.jpg'),
('sofa-chair-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623298/m37bxsvxnhvwo3fj3x0u.jpg'),
('sofa-chair-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623300/wrylzxxwzasqse1ej9hv.jpg'),
('sofa-chair-desc', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733623303/imbi10qsmo6md9msbrko.jpg'),
('sofa-dem-ni-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932944/hgnxfm3fxqaf7mtypvls.png'),
('sofa-dem-ni-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932944/frf0lyv4nvkk6ghec3kk.jpg'),
('sofa-dem-ni-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932961/gqgkxyljx067g7d3cejd.jpg'),
('table-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733647858/gakygsqvafnczkwwafew.jpg'),
('table-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733647863/iqxo3jhukspdz5a9qmxe.jpg'),
('table-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733647864/gp1gbsbcdlckxox6gaj4.jpg'),
('test-image', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740761003/iotpemxagsgxxelx7evj.jpg'),
('test-image-abc', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740761003/iotpemxagsgxxelx7evj.jpg'),
('tu-quan-ao-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932374/mczgymx0ykgpcgfji8mw.jpg'),
('tu-quan-ao-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932373/lwtco1dpahmezkhz2sko.jpg'),
('tu-quan-ao-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932373/xftxzzshd9myqsrs6ljs.jpg'),
('tu-quan-ao-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733932375/o4aspa62nilf2b47gg7i.png'),
('wood-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733543692/u6twlci8rvouveucttgs.png'),
('wood-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733645950/kwqliakxuualevbjsqjj.jpg'),
('wood-3', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733646164/yytqavaokfe2omlydl5r.jpg'),
('wood-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733543695/tck1m2xjh71vlyeo5dcd.jpg'),
('wood-desc-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733645952/i3z6m6mkzvlunicn98s9.jpg'),
('xich-du-go-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933521/bany9o4enmqzq1fhuwf5.jpg'),
('xich-du-go-2', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933522/lnxabdrscmkpa5ip9x2j.jpg'),
('xich-du-go-desc-1', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1733933527/gghy4ajpkircfjvybnuw.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `nav_links`
--

CREATE TABLE `nav_links` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `display_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nav_links`
--

INSERT INTO `nav_links` (`id`, `title`, `url`, `display_order`) VALUES
(1, 'Home', '/', 1),
(2, 'Products', '/shop', 2),
(3, 'Rooms', '/shop', 3),
(4, 'About', '/about', 4),
(5, 'Contact', '/contact', 5),
(6, 'Blog', '/blog', 6),
(8, 'tesst', '/test', 7),
(9, 'Ngan', '/ngan', 8);

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
(18, 5, 'Handsome dude', '[{\"quantity\":1,\"productId\":\"ghe-go-cong-thai-hoc\",\"size\":\"compact\",\"color\":\"violet\",\"productName\":\"Wooden styled chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733543692\\/u6twlci8rvouveucttgs.png\",\"productPrice\":1000000},{\"quantity\":1,\"productName\":\"Sofa chair with handmade\",\"productId\":\"sofa-chair\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733623298\\/buss6zzr3hlg7lm6wr7p.jpg\",\"productPrice\":10000000,\"size\":\"compact\",\"color\":\"yellow\"}]', '2024-12-08 11:59:56', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-08 06:10:25', 11000000),
(19, 5, 'Thanh Tam', '[{\"quantity\":1,\"productName\":\"Stainless Steel Work Desk\",\"productId\":\"ban-lam-viec-thep-khong-gi\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733933785\\/lnqufdcbzvqxsycxmcqm.jpg\",\"productPrice\":3200000,\"size\":\"standard\",\"color\":\"violet\"},{\"quantity\":1,\"productName\":\"Steel Dining Table with Glass Top\",\"productId\":\"ban-an-thep-mat-kinh\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733934046\\/nlwgo53rfbbvdswkjqha.png\",\"productPrice\":5000000,\"size\":\"standard\",\"color\":\"yellow\"}]', '2024-12-11 23:38:32', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2024-12-11 17:40:39', 8200000),
(20, 5, 'Thanh Tam', '[{\"quantity\":2,\"productId\":\"sofa-chair\",\"size\":\"compact\",\"color\":\"violet\",\"productName\":\"Sofa chair with handmade\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733623298\\/buss6zzr3hlg7lm6wr7p.jpg\",\"productPrice\":10000000},{\"quantity\":3,\"productName\":\"Natural Wooden Swing Chair\",\"productId\":\"ghe-xich-du-go-tu-nhien\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733933521\\/bany9o4enmqzq1fhuwf5.jpg\",\"productPrice\":5500000,\"size\":\"compact\",\"color\":\"violet\"}]', '2025-01-04 17:11:24', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2025-01-04 11:14:04', 36500000),
(21, 5, 'Thanh Tam', '[{\"quantity\":1,\"productName\":\"Industrial Wooden Desk\",\"productId\":\"ban-lam-viec-go-cong-nghiep\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1733932794\\/i15x8ubjfa3vvph8i1ba.jpg\",\"productPrice\":2800000,\"size\":\"standard\",\"color\":\"black\"}]', '2025-02-17 17:20:32', '0935671005', 'vothanhtam2407@gmail.com', '01 Street 06, Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'completed', '2025-02-26 16:07:07', 2800000);

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
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `name`, `price`, `size`, `color`, `short_description`, `full_description`, `full_description_original`, `tags`, `category`) VALUES
('ban-an-thep-mat-kinh', 'Steel Dining Table with Glass Top', 5000000, '[\"standard\",\"large\",\"oversized\"]', '[\"yellow\",\"violet\",\"blue\"]', 'A stylish dining table with a steel frame and tempered glass top.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733934047/qlu3kcobqwxk8dssrbci.jpg\" alt=\"ban-an-thep-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<ban-an-thep-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"stainless\",\"steel\",\"table\"]', NULL),
('ban-an-tien-loi', 'Fine Dinning Table', 5000000, '[\"compact\",\"standard\",\"large\"]', '[\"violet\",\"black\",\"yellow\"]', 'This is a great table for multi purpose family uses', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">The best dinning table you can find</h1>\n<h2 class=\"text-lg font-bold mb-2\">Why it should in your house</h2>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733647864/gp1gbsbcdlckxox6gaj4.jpg\" alt=\"table-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<The best dinning table you can find>\nSECTION<Why it should in your house>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >\nIMG<table-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >', '[\"dining\",\"table\",\"luxury\"]', NULL),
('ban-lam-viec-go-cong-nghiep', 'Industrial Wooden Desk', 2800000, '[\"standard\",\"large\",\"compact\"]', '[\"black\",\"yellow\",\"violet\",\"blue\"]', 'A sturdy desk made of industrial wood, perfect for offices and studying.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733932804/cgxdw6vkojsrc9ale1qq.jpg\" alt=\"ban-lam-viec-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<ban-lam-viec-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"wood\",\"table\"]', NULL),
('ban-lam-viec-thep-khong-gi', 'Stainless Steel Work Desk', 3200000, '[\"standard\",\"large\"]', '[\"violet\",\"yellow\",\"black\"]', 'A sleek and durable desk made of stainless steel, perfect for offices and workshops.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733933789/jepyrphrst7uqzellcaa.jpg\" alt=\"ban-thep-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<ban-thep-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"stainless\",\"steel\",\"table\"]', NULL),
('ban-tra-go-tu-nhien', 'Natural Wooden Coffee Table', 850000, '[\"compact\",\"standard\",\"large\"]', '[\"yellow\",\"black\",\"green\"]', 'A compact coffee table made of natural wood, ideal for any living room.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">The best dinning table you can find</h1>\n<h2 class=\"text-lg font-bold mb-2\">Why it should in your house</h2>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733931592/zkoxbkhzljpxm9vr6s2t.jpg\" alt=\"ban-tra-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<The best dinning table you can find>\nSECTION<Why it should in your house>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >\nIMG<ban-tra-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >', '[\"wood\",\"natural\",\"table\",\"coffee\"]', NULL),
('ghe-go-cong-thai-hoc', 'Wooden styled chair', 2000000, '[\"standard\",\"large\",\"compact\"]', '[\"yellow\",\"violet\",\"black\"]', 'This is the description', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">This is headline</h1>\n<p class=\"text-base text-black\">Với một số tập đoàn lớn như Tập đoàn Dầu khí quốc gia Việt Nam, Điện lực, Bưu chính Viễn thông, Công nghiệp than - khoáng sản, Tổng công ty Đường sắt, Đầu tư phát triển đường cao tốc Việt Nam... sẽ chuyển tổ chức đảng về trực thuộc Đảng bộ Chính phủ.<br/><br/>Trong Hội nghị tổng kết của Ủy ban quản lý vốn nhà nước tại doanh nghiệp chiều 6/12, Phó thủ tướng Hồ Đức Phớc đề cập tới Nghị quyết số 18 của Ban chấp hành Trung ương Đảng về sắp xếp tổ chức bộ máy. Theo ông Phớc, định hướng sáp nhập, chia tách các đơn vị nhằm giúp bộ máy hành chính hoạt động hiệu quả, tinh gọn hơn.</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733543695/tck1m2xjh71vlyeo5dcd.jpg\" alt=\"wood-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733645952/i3z6m6mkzvlunicn98s9.jpg\" alt=\"wood-desc-2\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">Hi vọng thông tin trên đã giúp bạn hiểu hơn về sản phẩm của chúng tôi</p></div>', 'HEADLINE<This is headline>\nP<Với một số tập đoàn lớn như Tập đoàn Dầu khí quốc gia Việt Nam, Điện lực, Bưu chính Viễn thông, Công nghiệp than - khoáng sản, Tổng công ty Đường sắt, Đầu tư phát triển đường cao tốc Việt Nam... sẽ chuyển tổ chức đảng về trực thuộc Đảng bộ Chính phủ.\n\nTrong Hội nghị tổng kết của Ủy ban quản lý vốn nhà nước tại doanh nghiệp chiều 6/12, Phó thủ tướng Hồ Đức Phớc đề cập tới Nghị quyết số 18 của Ban chấp hành Trung ương Đảng về sắp xếp tổ chức bộ máy. Theo ông Phớc, định hướng sáp nhập, chia tách các đơn vị nhằm giúp bộ máy hành chính hoạt động hiệu quả, tinh gọn hơn.>\nIMG<wood-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<wood-desc-2, 600, 400>\nP<Hi vọng thông tin trên đã giúp bạn hiểu hơn về sản phẩm của chúng tôi>', '[\"wood\",\"chair\",\"comfort\"]', NULL),
('ghe-xich-du-go-tu-nhien', 'Natural Wooden Swing Chair', 5500000, '[\"standard\",\"oversized\",\"large\"]', '[\"yellow\",\"green\",\"black\"]', 'An outdoor swing chair made from natural wood, designed for relaxation and durability.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733933527/gghy4ajpkircfjvybnuw.jpg\" alt=\"xich-du-go-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<xich-du-go-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"swing\",\"wood\"]', NULL),
('ke-sach-go-5-tang', '5-Tier Wooden Bookshelf', 1500000, '[\"compact\",\"standard\",\"oversized\"]', '[\"yellow\",\"violet\",\"blue\"]', 'A modern-style wooden bed with a minimalist yet elegant design.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">The best dinning table you can find</h1>\n<h2 class=\"text-lg font-bold mb-2\">Why it should in your house</h2>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733931818/ppkkdxalz0g3c59tdtvd.jpg\" alt=\"giuong-go-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<The best dinning table you can find>\nSECTION<Why it should in your house>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >\nIMG<giuong-go-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all >', '[\"bed\",\"wood\",\"modern\"]', NULL),
('sofa-chair', 'Sofa chair with handmade', 10000000, '[\"compact\",\"standard\",\"large\"]', '[\"yellow\",\"violet\",\"black\"]', 'Your favorite sofa chair', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733623303/imbi10qsmo6md9msbrko.jpg\" alt=\"sofa-chair-desc\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<sofa-chair-dec, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"sofa\",\"chair\",\"comfort\"]', NULL),
('sofa-go-dem-ni', 'Sofa with Upholstered Cushion', 4200000, '[\"standard\",\"large\",\"oversized\"]', '[\"blue\",\"violet\",\"yellow\"]', 'A natural wooden sofa combined with soft fabric cushions for comfort and elegance.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733932961/gqgkxyljx067g7d3cejd.jpg\" alt=\"sofa-dem-ni-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<sofa-dem-ni-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"sofa\",\"fabric\"]', NULL),
('test-color-pick-product', 'test color picker', 1000000, '[\"compact\",\"standard\"]', '[\"#1677ff\",\"#57be4f\",\"#e41616\"]', 'test color', '<div class=\"w-full flex flex-col justify-center items-start\">haha</div>', 'haha', '[]', NULL),
('tu-quan-ao-go-canh-truot', 'Sliding Door Wooden Wardrobe', 3500000, '[\"compact\",\"standard\",\"large\"]', '[\"yellow\",\"green\",\"black\"]', 'A wooden wardrobe with sliding doors for convenient space-saving.', '<div class=\"w-full flex flex-col justify-center items-start\"><h1 class=\"text-2xl font-bold mb-4\">Best of all sofa you can get</h1>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p>\n<div class=\"w-full flex justify-center items-center\">\n            <Image src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1733932375/o4aspa62nilf2b47gg7i.png\" alt=\"tu-quan-ao-desc-1\" width=\"600\" height=\"400\" class=\"rounded-lg\" /></div>\n<p class=\"text-base text-black\">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all</p></div>', 'HEADLINE<Best of all sofa you can get>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>\nIMG<tu-quan-ao-desc-1, 600, 400>\nP<The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\nThe passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all>', '[\"wardrobe\",\"wood\"]', NULL);

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
('ban-an-thep-1', 'ban-an-thep-mat-kinh', 'product'),
('ban-an-thep-2', 'ban-an-thep-mat-kinh', 'product'),
('ban-an-thep-desc-1', 'ban-an-thep-mat-kinh', 'description'),
('ban-lam-viec-1', 'ban-lam-viec-go-cong-nghiep', 'product'),
('ban-lam-viec-2', 'ban-lam-viec-go-cong-nghiep', 'product'),
('ban-lam-viec-3', 'ban-lam-viec-go-cong-nghiep', 'product'),
('ban-lam-viec-desc-1', 'ban-lam-viec-go-cong-nghiep', 'description'),
('ban-thep-1', 'ban-lam-viec-thep-khong-gi', 'product'),
('ban-thep-2', 'ban-lam-viec-thep-khong-gi', 'product'),
('ban-thep-3', 'ban-lam-viec-thep-khong-gi', 'product'),
('ban-thep-desc-1', 'ban-lam-viec-thep-khong-gi', 'description'),
('ban-tra-1', 'ban-tra-go-tu-nhien', 'product'),
('ban-tra-2', 'ban-tra-go-tu-nhien', 'product'),
('ban-tra-3', 'ban-tra-go-tu-nhien', 'product'),
('ban-tra-desc-1', 'ban-tra-go-tu-nhien', 'description'),
('giuong-go-1', 'ke-sach-go-5-tang', 'product'),
('giuong-go-2', 'ke-sach-go-5-tang', 'product'),
('giuong-go-3', 'ke-sach-go-5-tang', 'product'),
('giuong-go-desc-1', 'ke-sach-go-5-tang', 'description'),
('hange', 'test-color-pick-product', 'product'),
('sofa-chair-1', 'sofa-chair', 'product'),
('sofa-chair-2', 'sofa-chair', 'product'),
('sofa-chair-3', 'sofa-chair', 'product'),
('sofa-chair-desc', 'sofa-chair', 'description'),
('sofa-dem-ni-1', 'sofa-go-dem-ni', 'product'),
('sofa-dem-ni-2', 'sofa-go-dem-ni', 'product'),
('sofa-dem-ni-desc-1', 'sofa-go-dem-ni', 'description'),
('table-1', 'ban-an-tien-loi', 'product'),
('table-2', 'ban-an-tien-loi', 'product'),
('table-desc-1', 'ban-an-tien-loi', 'description'),
('tu-quan-ao-1', 'tu-quan-ao-go-canh-truot', 'product'),
('tu-quan-ao-2', 'tu-quan-ao-go-canh-truot', 'product'),
('tu-quan-ao-3', 'tu-quan-ao-go-canh-truot', 'product'),
('tu-quan-ao-desc-1', 'tu-quan-ao-go-canh-truot', 'description'),
('wood-1', 'ghe-go-cong-thai-hoc', 'product'),
('wood-2', 'ghe-go-cong-thai-hoc', 'product'),
('wood-3', 'ghe-go-cong-thai-hoc', 'product'),
('wood-desc-1', 'ghe-go-cong-thai-hoc', 'description'),
('wood-desc-2', 'ghe-go-cong-thai-hoc', 'description'),
('xich-du-go-1', 'ghe-xich-du-go-tu-nhien', 'product'),
('xich-du-go-2', 'ghe-xich-du-go-tu-nhien', 'product'),
('xich-du-go-desc-1', 'ghe-xich-du-go-tu-nhien', 'description');

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
(9, 'sofa-chair', 'awesome chair', 5, 5, 'Thanh Tam', '2024-12-08 11:59:31'),
(10, 'test-color-pick-product', 'So lit dude', 5, 5, 'Thanh Tam', '2025-03-02 00:17:34'),
(11, 'ghe-xich-du-go-tu-nhien', 'YO this is sleepy ahhhh', 3, 5, 'Thanh Tam', '2025-03-02 00:24:00');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL,
  `display_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `name`, `image`, `display_order`) VALUES
('bedroom', 'Bedroom', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740903571/rcedrrfgxatrmk3d1h2m.png', 1),
('livingroom', 'Living Room', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740968525/eghsuu1f18bkuzoahdk8.png', 2);

-- --------------------------------------------------------

--
-- Table structure for table `social_media`
--

CREATE TABLE `social_media` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_media`
--

INSERT INTO `social_media` (`id`, `name`, `info`, `image`) VALUES
('facebook', 'Facebook', 'https://www.facebook.com', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740676038/wcln0zm8knyahokxhuj2.png'),
('instagram', 'Instagram', 'https://www.instagram.com', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740676368/dpi5lyi3r3rtvf0xjohc.png');

-- --------------------------------------------------------

--
-- Table structure for table `subcriber`
--

CREATE TABLE `subcriber` (
  `email` varchar(255) NOT NULL,
  `subcribe_id` int(11) NOT NULL,
  `sendAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcriber`
--

INSERT INTO `subcriber` (`email`, `subcribe_id`, `sendAt`) VALUES
('vothanhtam2407@gmail.com', 1, '2025-03-02 21:42:41'),
('abc@aa.com', 2, '2025-03-02 21:42:41'),
('asdasdasddas@gmail.com', 3, '2025-03-02 21:42:41'),
('asdasdasddas@gmail.com', 4, '2025-03-03 08:37:30');

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
('bed'),
('bedroom'),
('blog'),
('chair'),
('coffee'),
('comfort'),
('dining'),
('fabric'),
('luxury'),
('modern'),
('natural'),
('sofa'),
('stainless'),
('steel'),
('sunday'),
('swing'),
('table'),
('tag1'),
('tag2'),
('tag3'),
('test'),
('thumb'),
('wardrobe'),
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
(5, '$2y$10$91YTRnAsAQh.MXHzxQ.SFuPSaSQ4MhyxRarhREeg4UnhmxnAcYZ1m', 'Thanh Tam', '2024-12-08 23:13:31', 'tomdapchai', 'vothanhtam2407@gmail.com', '0935671005', '01 Street 06', 'Thu Duc city, Hồ Chí Minh (Sài Gòn)', 'active', '[{\"quantity\":1,\"productName\":\"test color picker\",\"productId\":\"test-color-pick-product\",\"productImage\":\"https:\\/\\/res.cloudinary.com\\/dgwujcdba\\/image\\/upload\\/v1740586991\\/oe3bzabtndast1rhnzwf.jpg\",\"productPrice\":1000000,\"size\":\"compact\",\"color\":\"#1677ff\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `website_info`
--

CREATE TABLE `website_info` (
  `aboutID` int(11) NOT NULL,
  `about` longtext DEFAULT NULL,
  `about_original` longtext DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `email` varchar(255) DEFAULT '',
  `logo` text DEFAULT NULL,
  `home_banner` text DEFAULT NULL,
  `theme_color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `website_info`
--

INSERT INTO `website_info` (`aboutID`, `about`, `about_original`, `phone_number`, `address`, `email`, `logo`, `home_banner`, `theme_color`) VALUES
(1, '<div id=\"template\">\n<section><main>\n<h1 style=\"text-align: center;\"><span style=\"font-size: 24pt;\">Welcome</span></h1>\n<p>Welcome to our company! We are delighted to have you here and excited to share our journey with you.</p>\n<p>This is where you can int<em>roduce your company and make </em>a strong first impr<strong>ession on your visitors.</strong></p>\n</main><footer>\n<p><small>Confidential</small></p>\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1740921253/sx7esflp0gdfar2howv8.jpg\" alt=\"chair\" width=\"541\" height=\"406\"></p>\n</footer></section>\n<section><main>\n<h1 style=\"text-align: center;\">Our Mission</h1>\n<p style=\"text-align: center;\">Our company is dedicated to providing exceptional solutions that address the following key areas:</p>\n<ul>\n<li>Mission point 1</li>\n<li>Mission point 2</li>\n<li>Mission point 3</li>\n</ul>\n<p>We are committed to excellence in everything we do, ensuring that our clients receive the highest quality service and support.</p>\n<table style=\"border-collapse: collapse; width: 100%; height: 108.6px;\" border=\"1\"><colgroup><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"></colgroup>\n<tbody>\n<tr style=\"height: 36.2px;\">\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n</tr>\n<tr style=\"height: 36.2px;\">\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n</tr>\n<tr style=\"height: 36.2px;\">\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n</tr>\n</tbody>\n</table>\n<p>*{mission.statement}*</p>\n</main></section>\n<section><main>\n<h1>Our Story</h1>\n<p>Our journey began with a vision to create something meaningful that would make a difference by * {founding.date}*.</p>\n<p>We\'ve grown from our humble beginnings to become a trusted name in our industry.</p>\n<p>Here\'s how our story unfolded:</p>\n<h2>Chapter 1: The Beginning</h2>\n<p>Our founders came together with a shared vision and determined:</p>\n<ul>\n<li>what problems needed solving; and</li>\n<li>how we could provide unique solutions.</li>\n</ul>\n<p>This led to the creation of our company and its core values.</p>\n<h2>Chapter 2: Growth and Development</h2>\n<p>As we expanded, we refined our approach and built a team of dedicated professionals.</p>\n<p>This allowed us to develop innovative solutions tailored to our clients\' specific needs.</p>\n<h2>Chapter 3: Where We Are Today</h2>\n<p>Today, we continue to evolve and adapt to meet the changing demands of the market.</p>\n<p>Our commitment to quality and customer satisfaction remains at the heart of everything we do.</p>\n</main></section>\n<section><main>\n<h1>Our Product</h1>\n<p>Our flagship product is designed to solve real-world problems with innovative features including:</p>\n<ul>\n<li>Feature 1: Description of how this feature benefits users</li>\n<li>Feature 2: Explanation of what makes this feature unique</li>\n<li>Feature 3: Details about how this feature addresses specific needs</li>\n</ul>\n<p>We continuously improve our product based on customer feedback and emerging technologies.</p>\n<p>*{product.launch.date}*</p>\n</main></section>\n<section><main>\n<p><span style=\"font-size: 20px;\">Example Text Section</span></p>\n<p>&nbsp;</p>\n<p><span style=\"font-size: 20px;\"> This is an example section where you can add your own content. Feel free to modify this text to suit your specific needs. </span></p>\n<p>&nbsp;</p>\n<p>You can include information about your team, testimonials, or any other content that would be valuable to your audience.</p>\n<p>&nbsp;</p>\n<p>Contact Information:</p>\n<p>Name: [Your Name] <br>Phone: [Your Phone Number] <br><a href=\"mailto:example@example.com\">example@example.com</a></p>\n<p>&nbsp;</p>\n<p>Additional Contact:</p>\n<p>Name: [Another Name] <br>Phone: [Another Phone Number] <br><a href=\"mailto:another@example.com\">another@example.com</a></p>\n</main></section>\n</div>', '<div id=\"template\">\n<section><main>\n<h1 style=\"text-align: center;\"><span style=\"font-size: 24pt;\">Welcome</span></h1>\n<p>Welcome to our company! We are delighted to have you here and excited to share our journey with you.</p>\n<p>This is where you can int<em>roduce your company and make </em>a strong first impr<strong>ession on your visitors.</strong></p>\n</main><footer>\n<p><small>Confidential</small></p>\n<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://res.cloudinary.com/dgwujcdba/image/upload/v1740921253/sx7esflp0gdfar2howv8.jpg\" alt=\"chair\" width=\"541\" height=\"406\"></p>\n</footer></section>\n<section><main>\n<h1 style=\"text-align: center;\">Our Mission</h1>\n<p style=\"text-align: center;\">Our company is dedicated to providing exceptional solutions that address the following key areas:</p>\n<ul>\n<li>Mission point 1</li>\n<li>Mission point 2</li>\n<li>Mission point 3</li>\n</ul>\n<p>We are committed to excellence in everything we do, ensuring that our clients receive the highest quality service and support.</p>\n<table style=\"border-collapse: collapse; width: 100%; height: 108.6px;\" border=\"1\"><colgroup><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"><col style=\"width: 19.964%;\"></colgroup>\n<tbody>\n<tr style=\"height: 36.2px;\">\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n</tr>\n<tr style=\"height: 36.2px;\">\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n</tr>\n<tr style=\"height: 36.2px;\">\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n<td>&nbsp;</td>\n</tr>\n</tbody>\n</table>\n<p>*{mission.statement}*</p>\n</main></section>\n<section><main>\n<h1>Our Story</h1>\n<p>Our journey began with a vision to create something meaningful that would make a difference by * {founding.date}*.</p>\n<p>We\'ve grown from our humble beginnings to become a trusted name in our industry.</p>\n<p>Here\'s how our story unfolded:</p>\n<h2>Chapter 1: The Beginning</h2>\n<p>Our founders came together with a shared vision and determined:</p>\n<ul>\n<li>what problems needed solving; and</li>\n<li>how we could provide unique solutions.</li>\n</ul>\n<p>This led to the creation of our company and its core values.</p>\n<h2>Chapter 2: Growth and Development</h2>\n<p>As we expanded, we refined our approach and built a team of dedicated professionals.</p>\n<p>This allowed us to develop innovative solutions tailored to our clients\' specific needs.</p>\n<h2>Chapter 3: Where We Are Today</h2>\n<p>Today, we continue to evolve and adapt to meet the changing demands of the market.</p>\n<p>Our commitment to quality and customer satisfaction remains at the heart of everything we do.</p>\n</main></section>\n<section><main>\n<h1>Our Product</h1>\n<p>Our flagship product is designed to solve real-world problems with innovative features including:</p>\n<ul>\n<li>Feature 1: Description of how this feature benefits users</li>\n<li>Feature 2: Explanation of what makes this feature unique</li>\n<li>Feature 3: Details about how this feature addresses specific needs</li>\n</ul>\n<p>We continuously improve our product based on customer feedback and emerging technologies.</p>\n<p>*{product.launch.date}*</p>\n</main></section>\n<section><main>\n<p><span style=\"font-size: 20px;\">Example Text Section</span></p>\n<p>&nbsp;</p>\n<p><span style=\"font-size: 20px;\"> This is an example section where you can add your own content. Feel free to modify this text to suit your specific needs. </span></p>\n<p>&nbsp;</p>\n<p>You can include information about your team, testimonials, or any other content that would be valuable to your audience.</p>\n<p>&nbsp;</p>\n<p>Contact Information:</p>\n<p>Name: [Your Name] <br>Phone: [Your Phone Number] <br><a href=\"mailto:example@example.com\">example@example.com</a></p>\n<p>&nbsp;</p>\n<p>Additional Contact:</p>\n<p>Name: [Another Name] <br>Phone: [Another Phone Number] <br><a href=\"mailto:another@example.com\">another@example.com</a></p>\n</main></section>\n</div>', '(+84) 546-6789', '295 5th St Avenue, New York NY10000, United States', 'contact@furniro.com', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740921540/we2ry9xygolfx5xyavqr.png', 'https://res.cloudinary.com/dgwujcdba/image/upload/v1740921587/qrmbrnbsk3hopt7sixdi.png', '#ffffff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `idx_display_order` (`display_order`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contactId`);

--
-- Indexes for table `extension`
--
ALTER TABLE `extension`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`imageId`);

--
-- Indexes for table `nav_links`
--
ALTER TABLE `nav_links`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `idx_display_order` (`display_order`);

--
-- Indexes for table `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcriber`
--
ALTER TABLE `subcriber`
  ADD PRIMARY KEY (`subcribe_id`);

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
-- Indexes for table `website_info`
--
ALTER TABLE `website_info`
  ADD PRIMARY KEY (`aboutID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nav_links`
--
ALTER TABLE `nav_links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `reviewId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subcriber`
--
ALTER TABLE `subcriber`
  MODIFY `subcribe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `website_info`
--
ALTER TABLE `website_info`
  MODIFY `aboutID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
