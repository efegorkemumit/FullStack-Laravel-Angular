-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 17 Kas 2023, 18:07:20
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `ecommerceapi`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `cart_shops`
--

CREATE TABLE `cart_shops` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `type_discount` bigint(20) UNSIGNED NOT NULL COMMENT '1 pertancge, 2 cash',
  `discount` double NOT NULL,
  `cprice` double NOT NULL,
  `product_size_id` bigint(20) UNSIGNED DEFAULT NULL,
  `product_size_color_id` bigint(20) UNSIGNED DEFAULT NULL,
  `code_cupon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code_discount` int(11) DEFAULT NULL,
  `pricebrm` double NOT NULL,
  `subtotal` double NOT NULL,
  `total` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `categories`
--

INSERT INTO `categories` (`id`, `name`, `icon`, `images`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Shoes', 'fa-solid fa-shoe-prints', 'categories/vVOoeJTCCy2HcCW2IZ4Whk5tuCAtde0DpiyqHKFa.png', '2023-11-09 14:03:40', '2023-11-09 14:03:40', NULL),
(2, 'Dress', 'fa-solid fa-person-dress', 'categories/3L4T0x3myIF4A9N5aQbg1dSmvUBuXuyFwFUhWT4x.png', '2023-11-09 14:19:59', '2023-11-09 14:19:59', NULL),
(3, 'Computer', 'fa-solid fa-computer', 'categories/rFf65DeH63MjIup4IS80S5I2yxMUgAEDOFUgSinC.png', '2023-11-09 14:20:04', '2023-11-09 14:21:02', NULL),
(4, 'Watch', 'fa-solid fa-clock', 'categories/vA2MuDopV8jJNKC5vT8dy9mVIaRVzcpDStfVsGoE.png', '2023-11-09 14:20:14', '2023-11-09 14:20:53', NULL),
(5, 'Mobile Phone', 'fa-solid fa-mobile-button', 'categories/prC1h9yT0eejxwoTsbR3gzieVTVIN1pHvHtaaduX.png', '2023-11-09 14:20:20', '2023-11-09 14:20:44', NULL),
(6, 'Sport', 'fa-solid fa-bicycle', 'categories/ZWpPHgG9R5Jrp46Msil2W5L5c8tQnG9Piq9IIkLS.png', '2023-11-09 14:20:37', '2023-11-09 14:20:37', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `cupons`
--

CREATE TABLE `cupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_discount` tinyint(1) UNSIGNED NOT NULL COMMENT '1 percent, 2 money',
  `discount` double NOT NULL,
  `type_count` tinyint(1) NOT NULL COMMENT '1 limited, 2 unlimited',
  `num_use` double NOT NULL,
  `categories` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `products` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `cupons`
--

INSERT INTO `cupons` (`id`, `code`, `type_discount`, `discount`, `type_count`, `num_use`, `categories`, `products`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'test', 0, 0, 0, 0, '', '', NULL, '2023-11-14 15:28:49', '2023-11-14 15:28:49'),
(2, '111111', 1, 50, 1, 50, NULL, '2', '2023-11-13 06:40:05', '2023-11-14 15:28:48', '2023-11-14 15:28:48'),
(3, '111111111', 1, 50, 1, 50, '4', NULL, '2023-11-13 06:40:43', '2023-11-14 15:28:47', '2023-11-14 15:28:47'),
(4, 'three', 1, 50, 1, 50, '4,5,2', NULL, '2023-11-13 06:41:06', '2023-11-14 15:28:46', '2023-11-14 15:28:46'),
(5, 'threep', 1, 50, 1, 50, NULL, '3,2,1', '2023-11-13 06:41:28', '2023-11-14 15:28:45', '2023-11-14 15:28:45'),
(6, 'threep2', 1, 50, 2, 50, NULL, '3,2,1', '2023-11-13 06:41:48', '2023-11-13 06:59:32', '2023-11-13 06:59:32'),
(7, 'sss', 1, 50, 2, 0, NULL, '3', '2023-11-13 06:43:37', '2023-11-13 06:59:31', '2023-11-13 06:59:31'),
(8, 'sss11', 1, 50, 1, 50, NULL, '3', '2023-11-13 06:44:05', '2023-11-13 06:59:28', '2023-11-13 06:59:28'),
(9, 'gorkem', 1, 5, 1, 222, NULL, '9,8,5,2', '2023-11-13 06:48:44', '2023-11-14 15:29:31', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `discounts`
--

CREATE TABLE `discounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type_discount` tinyint(1) UNSIGNED NOT NULL COMMENT '1 percent, 2 money',
  `discount` double NOT NULL,
  `state` tinyint(1) UNSIGNED DEFAULT NULL COMMENT '1 active, 2 passive',
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `type` tinyint(1) UNSIGNED DEFAULT NULL COMMENT '1 product, 2 categories',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `discounts`
--

INSERT INTO `discounts` (`id`, `code`, `type_discount`, `discount`, `state`, `start_date`, `end_date`, `type`, `created_at`, `updated_at`, `deleted_at`) VALUES
(36, '655395dbce05d', 2, 80, 1, '2023-11-14 21:00:00', '2023-11-28 21:00:00', 1, '2023-11-14 12:44:27', '2023-11-15 11:01:56', NULL),
(37, '655396b787ddd', 1, 10, 1, '2023-11-15 21:00:00', '2023-11-28 21:00:00', 2, '2023-11-14 12:48:07', '2023-11-15 11:02:47', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `discount_categories`
--

CREATE TABLE `discount_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `categorie_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `discount_categories`
--

INSERT INTO `discount_categories` (`id`, `discount_id`, `categorie_id`, `created_at`, `updated_at`) VALUES
(1, 37, 5, '2023-11-14 12:48:07', '2023-11-14 12:48:07'),
(2, 37, 2, '2023-11-14 12:48:07', '2023-11-14 12:48:07'),
(3, 37, 1, '2023-11-14 12:48:07', '2023-11-14 12:48:07');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `discount_products`
--

CREATE TABLE `discount_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `discount_products`
--

INSERT INTO `discount_products` (`id`, `discount_id`, `product_id`, `created_at`, `updated_at`) VALUES
(16, 36, 8, '2023-11-15 10:38:21', '2023-11-15 10:38:21'),
(17, 36, 8, '2023-11-15 11:01:56', '2023-11-15 11:01:56');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_dsc` double NOT NULL,
  `price_usd` double NOT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 in demo, 2 public, 3 blocked',
  `images` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `interview` tinyint(4) DEFAULT 1,
  `stock` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `products`
--

INSERT INTO `products` (`id`, `category_id`, `title`, `slug`, `sku`, `price_dsc`, `price_usd`, `tags`, `description`, `summary`, `state`, `images`, `interview`, `stock`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 'COMPUTER ONE', 'computer-one', '123', 50, 5, NULL, '123', '123', 2, 'products/5tH998EckLiDlHQKuhurFIeaUcwQZpWRb8vk2tuu.png', 1, 123, '2023-11-10 05:10:01', '2023-11-14 15:10:40', NULL),
(2, 1, 'SHOES ONE', 'shoes-one', 'hh', 500, 100, '22,4', 'ttt', 'ttt', 2, 'products/9TvBGKyZaqEF6SoYMxdfDhXOzRxEKqidCngAhbqQ.png', 1, 77, '2023-11-10 05:15:53', '2023-11-14 15:11:06', NULL),
(3, 4, 'Watch severiz', 'watch-severiz', '505', 50, 50, 'marka,tan,aaa', 'asd', '15', 1, 'products/107FlebA9e4LICPWUpKEYSZ4TGC2HwFx6IoETXtv.png', 1, 50, '2023-11-10 05:19:07', '2023-11-10 05:19:07', NULL),
(4, 1, 'SHOES TWO', 'shoes-two', '11', 123, 12, 'dress,dd', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Lorem Ipsum is simply dummy text of the printing and typesetting ', 1, 'products/1mcOdi6dV8W5MHHuzEcMRKM4YRwQgGlaKelY6ChP.png', 2, 11, '2023-11-10 05:21:37', '2023-11-14 15:12:18', NULL),
(5, 2, 'DRESS THREE', 'dress-three', '5', 500, 50, 'dress', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown', 3, 'products/6lL8mPLxVXa84BAXaLt5JLdz9tmC3NC7WbrY3DJn.png', 1, 500, '2023-11-14 15:13:53', '2023-11-14 21:53:29', NULL),
(6, 4, 'WATCH Ipsum is ', 'watch-ipsum-is-simply-dummy', 'H626265', 500, 20, NULL, 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown', 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown', 1, 'products/281EXpdmeLK78OUOVFaPoQ7N4hT2dgZjaVz3Hr0s.png', 1, 50, '2023-11-14 15:14:53', '2023-11-14 15:14:53', NULL),
(7, 3, 'COMPUTER TWO', 'computer-two', 'ASDA5G5', 100, 1, 'computer', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of', 1, 'products/SVNMD7ZzHKArquAy6DsubI3RTBzlevxAQthJWI8t.png', 1, 500, '2023-11-14 15:16:34', '2023-11-14 15:16:34', NULL),
(8, 6, 'SPORT TWO', 'sport-two', '500', 500, 10, NULL, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good a', 1, 'products/6oDyKWARL4RbDVTRRtgD3pXzKPjGGONXI5kVsHzD.png', 1, 500, '2023-11-14 15:23:11', '2023-11-14 15:23:11', NULL),
(9, 6, 'SPORT2 Richard', 'sport2-richard', '100', 123, 100, 'sport', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going', 1, 'products/uy7HoWEM02Xde1qavrLcnnXlroMuMpTzOAZdqBz4.png', 1, 100, '2023-11-14 15:24:57', '2023-11-14 15:24:57', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `product_colors`
--

CREATE TABLE `product_colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `product_colors`
--

INSERT INTO `product_colors` (`id`, `name`, `code`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'White', '#fff', NULL, NULL, NULL),
(2, 'Red', '#0c0c0c0', NULL, NULL, NULL),
(3, 'Black', '#000', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `product_color_sizes`
--

CREATE TABLE `product_color_sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_color_id` bigint(20) UNSIGNED NOT NULL,
  `product_size_id` bigint(20) UNSIGNED NOT NULL,
  `stock` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `product_color_sizes`
--

INSERT INTO `product_color_sizes` (`id`, `product_color_id`, `product_size_id`, `stock`, `created_at`, `updated_at`, `deleted_at`) VALUES
(18, 3, 20, 10, '2023-11-11 07:19:39', '2023-11-11 07:19:39', NULL),
(19, 2, 20, 10, '2023-11-11 07:20:07', '2023-11-11 07:20:07', NULL),
(20, 1, 20, 10, '2023-11-11 07:20:32', '2023-11-11 08:11:53', NULL),
(21, 3, 21, 20, '2023-11-11 07:20:45', '2023-11-11 07:20:45', NULL),
(22, 2, 21, 20, '2023-11-11 07:21:11', '2023-11-11 07:21:11', NULL),
(23, 1, 21, 5, '2023-11-11 07:46:30', '2023-11-11 07:46:30', NULL),
(24, 3, 22, 50, '2023-11-11 07:46:50', '2023-11-11 08:11:44', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `images` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `images`, `type`, `size`, `file_name`, `created_at`, `updated_at`) VALUES
(23, 4, 'products/3sjdqtBwYu9q02fPb2tFzyH3borzOg7z835KKQLd.png', 'png', '511376', 'shoes-4.png', '2023-11-10 08:18:59', '2023-11-10 08:18:59'),
(25, 4, 'products/Sf8e5qu5WOnUikzoHweWp9jpR4cajza7hq4yH3bO.png', 'png', '535613', 'shoes-3.png', '2023-11-14 15:11:54', '2023-11-14 15:11:54'),
(26, 4, 'products/JylqGia5xpOu8HJ38hpxAj0wgitIV5dqEDOWJVhL.png', 'png', '476901', 'shoes-5.png', '2023-11-14 15:11:58', '2023-11-14 15:11:58'),
(27, 5, 'products/4ZInPerseIc0NrkSUBic2STTDUK19kHo32IUb3eS.png', 'png', '457085', 'dress-1.png', '2023-11-14 15:13:53', '2023-11-14 15:13:53'),
(28, 5, 'products/Ulp5ABBVY0DBqvbwyxP4YZwgRSjx3SD7tTI6Zu2o.png', 'png', '457085', 'dress-1.png', '2023-11-14 15:13:53', '2023-11-14 15:13:53'),
(29, 5, 'products/Ct4UlpG7ONR1qWWO8LnljjhRkg4UUnRZqjA1Asjy.png', 'png', '457085', 'dress-1.png', '2023-11-14 15:13:53', '2023-11-14 15:13:53'),
(30, 7, 'products/0QwAmn3XuaRGcUwwoQCgSduR8OnUqZgGAymdXH6W.png', 'png', '491343', 'cp-2.png', '2023-11-14 15:16:34', '2023-11-14 15:16:34'),
(31, 7, 'products/vrpP3QN1971gY7jc0BDNx50M7btnT19ueXfTJS1J.png', 'png', '491343', 'cp-2.png', '2023-11-14 15:16:34', '2023-11-14 15:16:34'),
(32, 9, 'products/Wy8FDuFSQLOqauGsqVL1F7pvwgJaXr35LRl51Pjd.png', 'png', '647170', 'sport-2.png', '2023-11-14 15:24:57', '2023-11-14 15:24:57');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `product_sizes`
--

INSERT INTO `product_sizes` (`id`, `product_id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(20, 4, 'xs', '2023-11-11 07:19:39', '2023-11-11 07:19:39', NULL),
(21, 4, 'xl', '2023-11-11 07:20:45', '2023-11-11 08:11:48', NULL),
(22, 4, 's', '2023-11-11 07:46:50', '2023-11-11 07:46:50', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `urlLink` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `sliders`
--

INSERT INTO `sliders` (`id`, `title`, `description`, `urlLink`, `images`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'title', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab,', '#1', 'slider/tPy2nku0XI6UFZAIgOlfpBp682JcVTgVcBZGsEXh.png', '2023-11-09 15:26:04', '2023-11-09 15:26:04', NULL),
(2, 'title2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab, quibusdam saepe iste nemo provident.', '#', 'slider/pzpaiQssnUbfcCZjIDvwt3pkUef10AhPXiODaccp.png', '2023-11-09 15:26:29', '2023-11-09 15:26:29', NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `is_admin`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'a', 'deneme12@gmail.com', NULL, '$2y$10$qj9hO7WC/n443xx.X674M.cwwsW6Msnv03yH.uIWTcpacJ.VSCPuu', 1, NULL, '2023-11-10 05:01:23', '2023-11-10 05:01:23');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `cart_shops`
--
ALTER TABLE `cart_shops`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `cupons`
--
ALTER TABLE `cupons`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `discount_categories`
--
ALTER TABLE `discount_categories`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `discount_products`
--
ALTER TABLE `discount_products`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Tablo için indeksler `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Tablo için indeksler `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Tablo için indeksler `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `product_color_sizes`
--
ALTER TABLE `product_color_sizes`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `cart_shops`
--
ALTER TABLE `cart_shops`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Tablo için AUTO_INCREMENT değeri `cupons`
--
ALTER TABLE `cupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Tablo için AUTO_INCREMENT değeri `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Tablo için AUTO_INCREMENT değeri `discount_categories`
--
ALTER TABLE `discount_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `discount_products`
--
ALTER TABLE `discount_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Tablo için AUTO_INCREMENT değeri `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Tablo için AUTO_INCREMENT değeri `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tablo için AUTO_INCREMENT değeri `product_color_sizes`
--
ALTER TABLE `product_color_sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Tablo için AUTO_INCREMENT değeri `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Tablo için AUTO_INCREMENT değeri `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Tablo için AUTO_INCREMENT değeri `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
