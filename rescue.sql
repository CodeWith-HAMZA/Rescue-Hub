-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 12, 2024 at 10:39 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rescue`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `description` text NOT NULL,
  `status` enum('pending','processing','eligible','not_eligible') NOT NULL DEFAULT 'pending',
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `contactName` varchar(255) NOT NULL,
  `contactPhone` varchar(255) NOT NULL,
  `contactEmail` varchar(255) NOT NULL,
  `magnitude` float DEFAULT NULL,
  `earthquakeLocation` varchar(255) DEFAULT NULL,
  `earthquakeDate` datetime DEFAULT NULL,
  `floodSeverity` enum('Minor','Moderate','Severe') DEFAULT NULL,
  `floodLocation` varchar(255) DEFAULT NULL,
  `floodDate` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `userId`, `description`, `status`, `city`, `country`, `contactName`, `contactPhone`, `contactEmail`, `magnitude`, `earthquakeLocation`, `earthquakeDate`, `floodSeverity`, `floodLocation`, `floodDate`, `created_at`, `updated_at`) VALUES
(1, 13, 'yuhto\'', 'pending', 'HYDERABAD', 'Pakistan', 'contact name', 'contact phone', 'uueu@gmali.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-21 07:21:15', '2024-07-21 07:21:15'),
(2, 13, 'aoeu', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', 'ioiaoeuou', 'codeonlinesource@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-21 07:40:10', '2024-07-21 07:40:10'),
(3, 13, 'aoeu', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', 'ioiaoeuou', 'codeonlinesource@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-21 07:40:47', '2024-07-21 07:40:47'),
(4, 13, 'aoeu', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', 'ioiaoeuou', 'codeonlinesource@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-21 07:40:49', '2024-07-21 07:40:49'),
(5, 13, 'I stuck at the mountain hill and the flood is increasing... help', 'pending', 'Hyderabad', 'Pakistan', 'Hamza', '03362103259', 'hs@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 06:23:45', '2024-08-06 06:23:45'),
(6, 13, 'this is desc', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'hs@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:57:03', '2024-08-06 11:57:03'),
(7, 13, 'this is desc', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'hs@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:57:03', '2024-08-06 11:57:03'),
(8, 13, 'this is desc', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'hseu@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:57:40', '2024-08-06 11:57:40'),
(9, 13, 'this is desc', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'hseu@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:57:40', '2024-08-06 11:57:40'),
(10, 13, 'aodeuhad', 'pending', 'Hamza', 'pakistan', 'sahuteh', '03362103259', 'astuhaseo@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:59:34', '2024-08-06 11:59:34'),
(11, 13, 'aodeuhad', 'pending', 'Hamza', 'pakistan', 'sahuteh', '03362103259', 'astuhaseo@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:59:34', '2024-08-06 11:59:34'),
(12, 13, 'aodeuhad', 'pending', 'Hamza', 'pakistan', 'sahuteh', '03362103259', '907832459087@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:59:45', '2024-08-06 11:59:45'),
(13, 13, 'aodeuhad', 'pending', 'Hamza', 'pakistan', 'sahuteh', '03362103259', '907832459087@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 11:59:45', '2024-08-06 11:59:45'),
(14, 13, 'aodeuhad', 'pending', 'Hamza', 'pakistan', 'sahuteh', '03362103259', 'jibhai@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 12:02:39', '2024-08-06 12:02:39'),
(15, 13, 'uaoeuaou aeu ', 'pending', 'HYDERABAD', 'Pakistan', 'contact name', '3362103259', 'athou@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 12:52:55', '2024-08-06 12:52:55'),
(16, 13, 'tcutiui', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', '03362103259', 'aao@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 13:13:29', '2024-08-06 13:13:29'),
(17, 13, 'tcutiui', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', '03362103259', 'aao@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 13:13:40', '2024-08-06 13:13:40'),
(18, 13, 'destahu', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', '03362103259', 'codeonlinesource@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 14:01:00', '2024-08-06 14:01:00'),
(19, 13, 'destahu', 'pending', 'osethuoastunheou', 'Pakistan', 'Hamza Shaikh sathusatohu', '03362103259', 'codeonlinesource@gmail.com', 3, '2000 | 3434', '2024-08-18 19:00:00', 'Severe', '3543 | 3434', '2024-08-16 19:00:00', '2024-08-06 14:03:08', '2024-08-06 14:03:08'),
(20, 13, 'aoutaoehuaoeuaoeuuoei u oeuioe uao oeu ', 'processing', 'Hyderabad', 'saotuh', 'hamza shaikh', '0336521934', 'hs@gmail.com', 7, '3434 | 3434', '2024-08-18 19:00:00', 'Moderate', '3434 | 34545', '2024-08-18 19:00:00', '2024-08-09 07:16:54', '2024-08-12 06:54:54'),
(21, 13, 'hdih', 'pending', 'di', 'ih', 'iu', '45454545', 'dhhhd@gmial.com', 6, 'hdhi', '2024-08-03 19:00:00', 'Moderate', 'dh', '2024-08-04 19:00:00', '2024-08-10 08:01:47', '2024-08-10 08:01:47'),
(22, 13, 'hdih', 'pending', 'di', 'ih', 'iu', '45454545', 'dhhhd@gmial.com', 6, 'hdhi', '2024-08-03 19:00:00', 'Moderate', 'dh', '2024-08-04 19:00:00', '2024-08-10 08:01:51', '2024-08-10 08:01:51'),
(23, 13, 'hdih', 'processing', 'di', 'ih', 'iu', '45454545', 'dhhhd@gmial.com', 6, 'hdhi', '2024-08-03 19:00:00', 'Moderate', 'dh', '2024-08-04 19:00:00', '2024-08-10 08:02:06', '2024-08-11 13:40:21'),
(24, 13, 'hdih', 'pending', 'di', 'ih', 'iu', '45454545', 'dhhhd@gmial.com', 6, 'hdhi', '2024-08-03 19:00:00', 'Moderate', 'dh', '2024-08-04 19:00:00', '2024-08-10 08:02:12', '2024-08-10 08:02:12'),
(25, 13, 'aoeuoeuo', 'pending', 'oaeu', 'oeueu', 'eoueu', 'aoeuu', 'ueaou@eu.com', 7, 'eh', '2024-08-10 08:11:56', 'Moderate', 'eouou', '2024-08-12 19:00:00', '2024-08-10 08:12:14', '2024-08-10 08:12:14'),
(26, 13, 'aoeuoeuo', 'processing', 'oaeu', 'oeueu', 'eoueu', 'aoeuu', 'ueaou@eu.com', 7, 'eh', '2024-08-10 08:11:56', 'Moderate', 'eouou', '2024-08-12 19:00:00', '2024-08-10 08:13:29', '2024-08-11 13:38:15'),
(27, 13, 'aoeu', 'pending', 'uea', 'ue', 'eu', 'ue', 'eu@gmail.com', 3, 'ueu', '2024-08-05 19:00:00', 'Moderate', 'eu', '2024-08-26 19:00:00', '2024-08-10 08:39:26', '2024-08-10 08:39:26'),
(28, 13, 'aoeu', 'not_eligible', 'uea', 'ue', 'eu', 'ue', 'eu@gmail.com', 3, 'ueu', '2024-08-05 19:00:00', 'Moderate', 'eu', '2024-08-26 19:00:00', '2024-08-10 08:40:59', '2024-08-11 13:37:59'),
(29, 13, 'aoeu', 'not_eligible', 'uea', 'Hyderabad', 'eu', 'ue', 'eu@gmail.com', 3, 'ueu', '2024-08-05 19:00:00', 'Moderate', 'eu', '2024-08-26 19:00:00', '2024-08-10 08:41:30', '2024-08-11 13:45:17'),
(30, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:43:05', '2024-08-19 07:43:05'),
(31, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:43:20', '2024-08-19 07:43:20'),
(32, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:43:32', '2024-08-19 07:43:32'),
(33, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:44:21', '2024-08-19 07:44:21'),
(34, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:44:25', '2024-08-19 07:44:25'),
(35, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:46:43', '2024-08-19 07:46:43'),
(36, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:46:44', '2024-08-19 07:46:44'),
(37, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:47:00', '2024-08-19 07:47:00'),
(38, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:48:52', '2024-08-19 07:48:52'),
(39, 16, 'shaddu', 'pending', '34', 'ht', 'eu', '34', 'eouoeu@dmail.com', 3, '3', '2024-08-11 19:00:00', 'Moderate', '3434', '2024-08-10 19:00:00', '2024-08-19 07:48:56', '2024-08-19 07:48:56'),
(40, 13, 'u', 'pending', 'Hyderabad', 'Pakistan', 'Shazaib ', '03362103259', 'code@gamil.com', 3, '3434', '2024-08-10 19:00:00', 'Severe', '3434', '2024-08-03 19:00:00', '2024-08-19 11:25:50', '2024-08-19 11:25:50'),
(41, 13, 'u', 'pending', 'Hyderabad', 'Pakistan', 'Shazaib ', '03362103259', 'code@gamil.com', 3, '3434', '2024-08-10 19:00:00', 'Severe', '3434', '2024-08-03 19:00:00', '2024-08-19 11:29:23', '2024-08-19 11:29:23'),
(42, 13, 'u', 'pending', 'Hyderabad', 'Pakistan', 'Shazaib ', '03362103259', 'code@gamil.com', 3, '3434', '2024-08-10 19:00:00', 'Severe', '3434', '2024-08-03 19:00:00', '2024-08-19 11:29:50', '2024-08-19 11:29:50'),
(43, 13, 'u', 'pending', 'Hyderabad', 'Pakistan', 'Shazaib ', '03362103259', 'code@gamil.com', 3, '3434', '2024-08-10 19:00:00', 'Severe', '3434', '2024-08-03 19:00:00', '2024-08-19 11:30:13', '2024-08-19 11:30:13'),
(44, 13, 'u', 'pending', 'Hyderabad', 'Pakistan', 'Shazaib ', '03362103259', 'code@gamil.com', 3, '3434', '2024-08-10 19:00:00', 'Severe', '3434', '2024-08-03 19:00:00', '2024-08-19 11:30:24', '2024-08-19 11:30:24'),
(45, 13, 'uaou', 'pending', 'Hyderabad', 'Pak', 'name', '0343478374', 'ohu@gmail.com', 6, '355 | 35857', '2024-08-04 19:00:00', 'Severe', '3434  | 335835', '2024-08-19 19:00:00', '2024-08-19 11:33:51', '2024-08-19 11:33:51'),
(46, 13, 'uaou', 'pending', 'Hyderabad', 'Pak', 'name', '0343478374', 'ohu@gmail.com', 6, '355 | 35857', '2024-08-04 19:00:00', 'Severe', '3434  | 335835', '2024-08-19 19:00:00', '2024-08-19 11:35:12', '2024-08-19 11:35:12'),
(47, 13, 'uaou', 'pending', 'Hyderabad', 'Pak', 'name', '0343478374', 'ohu@gmail.com', 6, '355 | 35857', '2024-08-04 19:00:00', 'Severe', '3434  | 335835', '2024-08-19 19:00:00', '2024-08-19 11:35:26', '2024-08-19 11:35:26'),
(48, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:39:00', '2024-08-19 11:39:00'),
(49, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:39:33', '2024-08-19 11:39:33'),
(50, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:40:12', '2024-08-19 11:40:12'),
(51, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:41:01', '2024-08-19 11:41:01'),
(52, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:41:20', '2024-08-19 11:41:20'),
(53, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:41:27', '2024-08-19 11:41:27'),
(54, 13, 'aua', 'pending', 'Hyderabad', 'Pakistan', 'hamza', '03362103259', 'ateohu@gmail.com', 7, '34834 | 374837', '2024-08-17 19:00:00', 'Severe', '3243 | 34347', '2024-08-10 19:00:00', '2024-08-19 11:41:32', '2024-08-19 11:41:32'),
(55, 15, 'A magnitude 6.7 earthquake struck the city, causing significant structural damage to buildings and infrastructure. There are reports of power outages and some areas are experiencing aftershocks.\n\n', 'pending', 'Sans Francisco', 'US', 'John Doe', '(555) 123-4567', 'john.doe@example.com', 6, '37.7749 | -122.4194', '2024-08-04 19:00:00', 'Severe', '37.749 | -122.494', '2024-08-11 19:00:00', '2024-08-19 11:48:39', '2024-08-19 11:48:39'),
(56, 15, 'A magnitude 6.7 earthquake struck the city, causing significant structural damage to buildings and infrastructure. There are reports of power outages and some areas are experiencing aftershocks.\n\n', 'pending', 'Sans Francisco', 'US', 'John Doe', '(555) 123-4567', 'john.doe@example.com', 6, '37.7749 | -122.4194', '2024-08-04 19:00:00', 'Severe', '37.749 | -122.494', '2024-08-11 19:00:00', '2024-08-19 11:49:19', '2024-08-19 11:49:19'),
(57, 15, 'A magnitude 6.7 earthquake struck the city, causing significant structural damage to buildings and infrastructure. There are reports of power outages and some areas are experiencing aftershocks. this is the better way to help us\n\n', 'pending', 'Sans Francisco', 'US', 'John Doe', '(555) 123-4567', 'john.doe@example.com', 4, '37.7749 | -122.4194', '2024-08-04 19:00:00', 'Moderate', '37.749 | -122.494', '2024-08-11 19:00:00', '2024-08-19 11:50:07', '2024-08-19 11:50:07'),
(58, 15, 'A magnitude 6.7 earthquake struck the city, causing significant structural damage to buildings and infrastructure. There are reports of power outages and some areas are experiencing aftershocks. this is the better way to help us\n\n', 'eligible', 'Washington', 'US', 'John Doe', '(555) 123-4567', 'john.doe@example.com', 4, '37.7749 | -122.4194', '2024-08-04 19:00:00', 'Moderate', '37.749 | -122.494', '2024-08-11 19:00:00', '2024-08-19 11:50:18', '2024-08-19 13:12:29'),
(59, 13, 'uoeoe', 'pending', 'Hyd', 'Pak', 'ali', '3362103259', 'ali@gmail.com', 3, '3453', '2024-08-05 19:00:00', 'Minor', '33543 | 83758', '2024-08-19 19:00:00', '2024-08-26 09:29:10', '2024-08-26 09:29:10'),
(60, 13, 'uoeoe', 'pending', 'Hyd', 'Pak', 'ali', '3362103259', 'ali@gmail.com', 3, '3453', '2024-08-05 19:00:00', 'Minor', '33543 | 83758', '2024-08-19 19:00:00', '2024-08-26 09:29:53', '2024-08-26 09:29:53'),
(61, 13, 'uoeoe', 'pending', 'Hyd', 'Pak', 'ali', '3362103259', 'ali@gmail.com', 3, '3453', '2024-08-05 19:00:00', 'Minor', '33543 | 83758', '2024-08-19 19:00:00', '2024-08-26 09:31:03', '2024-08-26 09:31:03'),
(62, 13, 'ueu3', 'pending', 'Hyd', 'Pakistan', 'code@gmail.com', '+92 3434778787', 'eue@gmail.com', 3, '3434 | 4334 ', '2024-08-18 19:00:00', 'Moderate', '2424 | 3784', '2024-08-03 19:00:00', '2024-08-26 09:38:17', '2024-08-26 09:38:17'),
(63, 13, 'ueu3', 'processing', 'Hyd', 'Pakistan', 'code@gmail.com', '+92 3434778787', 'eue@gmail.com', 3, '3434 | 4334 ', '2024-08-18 19:00:00', 'Moderate', '2424 | 3784', '2024-08-03 19:00:00', '2024-08-26 09:40:20', '2024-09-10 04:09:47'),
(64, 13, 'ueu3', 'eligible', 'Hyd', 'Pakistan', 'code@gmail.com', '+92 3434778787', 'eue@gmail.com', 3, '3434 | 4334 ', '2024-08-18 19:00:00', 'Severe', '2424 | 3784', '2024-08-03 19:00:00', '2024-08-26 09:40:27', '2024-09-09 22:33:41'),
(65, 13, 'ueu3', 'processing', 'Hyd', 'Pakistan', 'code@gmail.com', '+92 3434778787', 'eue@gmail.com', 6, '3434 | 4334 ', '2024-08-18 19:00:00', 'Minor', '2424 | 3784', '2024-08-03 19:00:00', '2024-08-26 09:40:52', '2024-08-26 09:46:20'),
(66, 22, 'this is new application', 'processing', 'Hyderabad', 'Pakistan', '03362103259', '0336203452', 'Primary Email: mrw58901878@gmail.com, Email: hamza@gmail.com, Cnic: 3323232323333', 5, '3535 | 3534', '2024-09-08 19:00:00', 'Severe', '3543 | 3743', '2024-09-07 19:00:00', '2024-09-12 06:18:30', '2024-09-12 06:27:12'),
(67, 22, 'I\'m stuck in natural disasater kindly help me...!!!! support us...', 'pending', 'Hyderabad', 'Pakistan', '03362103259', '03362103259', 'Primary Email: mrw58901878@gmail.com, Email: hamaz@gmail.com, Cnic: 4130398017761', 4, '3434 | 3434', '2024-09-02 19:00:00', 'Severe', '3433 | 3434', '2024-09-08 19:00:00', '2024-09-12 10:07:09', '2024-09-12 10:07:09'),
(68, 22, 'help us...', 'pending', 'Hyderabad', 'Pakistan', '03362103257', '03362103259', 'Primary Email: mrw58901878@gmail.com, Email: Hamza@gmail.com, Cnic: 4130334345455', 3, '3434 | 3434', '2024-09-08 19:00:00', 'Moderate', '2432 | 3434', '2024-09-15 19:00:00', '2024-09-12 10:20:41', '2024-09-12 10:20:41');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text,
  `page` varchar(255) DEFAULT NULL,
  `description` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `key`, `value`, `page`, `description`, `created_at`, `updated_at`) VALUES
(1, 'home_section1_main_heading', 'Welcome to the NDRS\n', 'home', 'Main heading on the homepage', '2024-08-16 20:20:47', '2024-09-12 07:09:58'),
(2, 'home_section1_secondary_heading', 'Natural Diaster Relief System', 'home', 'Subheading on the homepage', '2024-08-16 20:20:47', '2024-09-09 21:39:28'),
(3, 'home_section2_main_heading', 'How We Help', 'home', 'Main heading for the second section on the homepage', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(4, 'home_section3_main_heading', 'Our Services', 'home', 'Main heading for the third section on the homepage', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(5, 'home_section3_secondary_heading', 'Rapid Response & Support', 'home', 'Subheading for the third section on the homepage', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(6, 'home_section4_main_heading', 'Join Our Efforts', 'home', 'Main heading for the fourth section on the homepage', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(7, 'home_section4_secondary_heading', 'Become a Volunteer', 'home', 'Subheading for the fourth section on the homepage', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(8, 'aboutus_section1_main_heading', 'About Natural Disaster Releief System', 'aboutus', 'Main heading on the About Us page', '2024-08-16 20:20:47', '2024-09-09 21:46:56'),
(9, 'aboutus_section1_secondary_heading', 'NDRS is dedicated to providing timely assistance in the face of natural disasters, including floods and earthquakes.\n\n', 'aboutus', 'Subheading on the About Us page', '2024-08-16 20:20:47', '2024-09-12 06:30:42'),
(10, 'aboutus_section1_paragraph', 'NDRS is dedicated to providing timely assistance in the face of natural disasters, including floods and earthquakes.\n\n', 'aboutus', 'Paragraph text on the About Us page', '2024-08-16 20:20:47', '2024-09-12 06:32:23'),
(11, 'aboutus_section2_main_heading', 'Our Team', 'aboutus', 'Main heading for the second section on the About Us page', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(12, 'aboutus_section2_card1_heading', 'John Doe - Field Coordinator', 'aboutus', 'Heading for the first team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(13, 'aboutus_section2_card1_paragraph', 'John has over 10 years of experience in disaster management and leads our field operations.', 'aboutus', 'Paragraph text for the first team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(14, 'aboutus_section2_card2_heading', 'Jane Smith - Technical Lead', 'aboutus', 'Heading for the second team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(15, 'aboutus_section2_card2_paragraph', 'Jane is an expert in developing innovative rescue technologies.', 'aboutus', 'Paragraph text for the second team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(16, 'aboutus_section3_main_heading', 'Meet the Team', 'aboutus', 'Main heading for the third section on the About Us page', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(17, 'aboutus_section3_first_card_team_name', 'Alice Brown', 'aboutus', 'First team member name', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(18, 'aboutus_section3_first_card_team_paragraph', 'Alice specializes in earthquake response strategies.', 'aboutus', 'First team member paragraph', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(19, 'aboutus_section3_first_card_team_secondary_heading', 'Earthquake Specialist', 'aboutus', 'Secondary heading for the first team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(20, 'aboutus_section3_second_card_team_name', 'Bob Johnson', 'aboutus', 'Second team member name', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(21, 'aboutus_section3_second_card_team_paragraph', 'Bob oversees our flood rescue operations.', 'aboutus', 'Second team member paragraph', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(22, 'aboutus_section3_second_card_team_secondary_heading', 'Flood Rescue Coordinator', 'aboutus', 'Secondary heading for the second team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(23, 'aboutus_section3_third_card_team_name', 'Charlie Davis', 'aboutus', 'Third team member name', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(24, 'aboutus_section3_third_card_team_paragraph', 'Charlie is our logistics expert, ensuring timely delivery of aid.', 'aboutus', 'Third team member paragraph', '2024-08-16 20:20:47', '2024-08-16 20:20:47'),
(25, 'aboutus_section3_third_card_team_secondary_heading', 'Logistics Expert', 'aboutus', 'Secondary heading for the third team member card', '2024-08-16 20:20:47', '2024-08-16 20:20:47');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int NOT NULL,
  `applicationId` int NOT NULL,
  `filename` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `applicationId`, `filename`, `url`, `created_at`, `updated_at`) VALUES
(32, 1, 'shaddu file', 'https://seatuh.com', '2024-08-09 06:42:15', '2024-08-09 06:42:15'),
(33, 26, 'application?.name', 'url1', '2024-08-10 08:13:29', '2024-08-10 08:13:29'),
(34, 26, 'application?.name', 'url2', '2024-08-10 08:13:29', '2024-08-10 08:13:29'),
(35, 27, 'application?.name', 'https://utfs.io/f/22efbb02-9ba2-429d-8fe6-8c14c3efe4b7-4lefir.webp', '2024-08-10 08:39:26', '2024-08-10 08:39:26'),
(36, 27, 'application?.name', 'https://utfs.io/f/4f9263b4-c104-4348-a461-bf46ebd0a3c2-np04ic.png', '2024-08-10 08:39:26', '2024-08-10 08:39:26'),
(37, 28, 'application?.name', 'https://utfs.io/f/f1cea060-7c32-4ffb-8324-4ac1223b5d69-4lefir.webp', '2024-08-10 08:40:59', '2024-08-10 08:40:59'),
(38, 28, 'application?.name', 'https://utfs.io/f/8393e160-33fd-4358-8333-dbb73c232dba-np04ic.png', '2024-08-10 08:40:59', '2024-08-10 08:40:59'),
(39, 29, 'application?.name', 'https://utfs.io/f/a5d3aa27-9d26-44f9-a1d5-88b6e677ab9f-4lefir.webp', '2024-08-10 08:41:30', '2024-08-10 08:41:30'),
(40, 29, 'application?.name', 'https://utfs.io/f/fafd12ac-7ee2-491d-8f59-5a93f1fef45a-np04ic.png', '2024-08-10 08:41:30', '2024-08-10 08:41:30'),
(41, 48, 'application?.name', 'https://utfs.io/f/6229df3e-40f0-4f0c-a35e-e6397d43123d-np04ic.png', '2024-08-19 11:39:00', '2024-08-19 11:39:00'),
(42, 49, 'application?.name', 'https://utfs.io/f/d39afc29-a9c1-49ff-9beb-c34271fb0552-np04ic.png', '2024-08-19 11:39:33', '2024-08-19 11:39:33'),
(43, 50, 'application?.name', 'https://utfs.io/f/6338da9b-751e-4930-8512-5eec021ccac1-np04ic.png', '2024-08-19 11:40:12', '2024-08-19 11:40:12'),
(44, 51, 'application?.name', 'https://utfs.io/f/5936da68-8e8f-4488-ae36-13b0c295653e-np04ic.png', '2024-08-19 11:41:01', '2024-08-19 11:41:01'),
(45, 52, 'application?.name', 'https://utfs.io/f/d6260655-aa35-4d00-ab2a-fc20e8ff7482-np04ic.png', '2024-08-19 11:41:20', '2024-08-19 11:41:20'),
(46, 53, 'application?.name', 'https://utfs.io/f/defabc33-9f64-4694-bee3-d3612b57af1c-np04ic.png', '2024-08-19 11:41:27', '2024-08-19 11:41:27'),
(47, 54, 'application?.name', 'https://utfs.io/f/fa28c314-9820-493f-b740-b16acb33734c-np04ic.png', '2024-08-19 11:41:32', '2024-08-19 11:41:32'),
(48, 55, 'application?.name', 'https://utfs.io/f/313f351b-9a8f-424a-b74d-e57b91704a2d-ibcluw.jpeg', '2024-08-19 11:48:39', '2024-08-19 11:48:39'),
(49, 55, 'application?.name', 'https://utfs.io/f/c8fc4c3b-97a7-4f18-96c3-9604bc4e3d4e-nm33wo.jpeg', '2024-08-19 11:48:39', '2024-08-19 11:48:39'),
(50, 56, 'application?.name', 'https://utfs.io/f/ddfdc751-0ad1-4d06-8808-93ed5fa23756-ibcluw.jpeg', '2024-08-19 11:49:19', '2024-08-19 11:49:19'),
(51, 56, 'application?.name', 'https://utfs.io/f/7a5b6850-7f9d-4919-962d-36d64c440780-nm33wo.jpeg', '2024-08-19 11:49:19', '2024-08-19 11:49:19'),
(52, 57, 'application?.name', 'https://utfs.io/f/45bac4a0-3eb5-48b7-933e-4f1e4d358118-ibcluw.jpeg', '2024-08-19 11:50:07', '2024-08-19 11:50:07'),
(53, 57, 'application?.name', 'https://utfs.io/f/ee9fc2ba-ba82-4907-8ac3-a2e3c7bcac92-nm33wo.jpeg', '2024-08-19 11:50:07', '2024-08-19 11:50:07'),
(54, 58, 'application?.name', 'https://utfs.io/f/aa4c1885-dd4c-4a24-b8fd-ebb7b61be786-ibcluw.jpeg', '2024-08-19 11:50:18', '2024-08-19 11:50:18'),
(55, 58, 'application?.name', 'https://utfs.io/f/1d17a29e-e4be-485a-a3b5-29dbdb7d68fe-nm33wo.jpeg', '2024-08-19 11:50:18', '2024-08-19 11:50:18'),
(56, 60, 'application?.name', 'https://utfs.io/f/86d61051-db7c-41b1-b356-bea67b65abb7-ogosiy.png', '2024-08-26 09:29:53', '2024-08-26 09:29:53'),
(57, 60, 'application?.name', 'https://utfs.io/f/0e186012-01a7-4d45-b630-d00ad59309bd-62wcsx.jpg', '2024-08-26 09:29:53', '2024-08-26 09:29:53'),
(58, 61, 'application?.name', 'https://utfs.io/f/11d9c547-dc63-4573-98c9-548f1a6d67d6-ogosiy.png', '2024-08-26 09:31:03', '2024-08-26 09:31:03'),
(59, 61, 'application?.name', 'https://utfs.io/f/7e6a7ddd-80fa-4cd6-aca8-71d6a3d13072-62wcsx.jpg', '2024-08-26 09:31:03', '2024-08-26 09:31:03'),
(60, 63, 'application?.name', 'https://utfs.io/f/c4ebf430-0098-4d47-8708-bacc65a646bb-lt51w8.png', '2024-08-26 09:40:20', '2024-08-26 09:40:20'),
(61, 64, 'application?.name', 'https://utfs.io/f/5f2e0d75-ce34-4859-a4b0-2f0d8da10065-lt51w8.png', '2024-08-26 09:40:27', '2024-08-26 09:40:27'),
(62, 65, 'application?.name', 'https://utfs.io/f/8e546a1e-f8f6-4220-96df-17b3dbfccfec-lt51w8.png', '2024-08-26 09:40:52', '2024-08-26 09:40:52'),
(63, 66, 'application?.name', 'http://localhost:4000/uploads/1726121910836-20220901-pakistan_floods_3-nyt-ac.jpg', '2024-09-12 06:18:30', '2024-09-12 06:18:30'),
(64, 67, 'application?.name', 'http://localhost:4000/uploads/1726135628910-dd.jpeg', '2024-09-12 10:07:09', '2024-09-12 10:07:09'),
(65, 68, 'application?.name', 'http://localhost:4000/uploads/1726136441595-20220901-pakistan_floods_3-nyt-ac.jpg', '2024-09-12 10:20:41', '2024-09-12 10:20:41'),
(66, 68, 'application?.name', 'http://localhost:4000/uploads/1726136441603-imgg.jpeg', '2024-09-12 10:20:41', '2024-09-12 10:20:41'),
(67, 68, 'application?.name', 'http://localhost:4000/uploads/1726136441602-dd.jpeg', '2024-09-12 10:20:41', '2024-09-12 10:20:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `onBoarded` varchar(255) DEFAULT '0',
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `fullName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `bio` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `onBoarded`, `username`, `email`, `password`, `isAdmin`, `fullName`, `address`, `phoneNumber`, `profilePicture`, `bio`, `created_at`, `updated_at`) VALUES
(13, '0', 'Online_Source', 'codeonlinesource@gmail.com', 'using-clerk-auth-instead-this', 0, 'Online_Source', '43434', '3434434343434', NULL, '4343434', '2024-07-21 06:33:38', '2024-08-26 09:47:45'),
(14, '0', 'Star Joker', 'starjoker343@gmail.com', 'using-clerk-auth-instead-this', 0, 'Star Joker', 'jamshoro, sindh university, hyderabad, sindh, pakistan', '03362103259', NULL, 'i\'m a government employee in education, i have 12 childrens and 3 wives, i\'m currently in natural disaster, due to the flood in my village', '2024-07-21 08:32:58', '2024-08-26 09:47:54'),
(15, '1', 'Hamza', 'hamza263973@gmail.com', 'using-clerk-auth-instead-this', 0, 'Hamza', 'this is my address', '034834787487', NULL, 'ouoeu', '2024-08-16 16:08:58', '2024-08-16 16:09:17'),
(16, '1', 'shank', 'aouaoeuaoeu@gmail.com', 'using-clerk-auth-instead-this', 0, 'shank', 'this is the address of mine', '03362103259', NULL, 'this is my bio of mine', '2024-08-19 06:47:21', '2024-08-19 07:00:47'),
(21, '1', 'shafique', 'shafiquealisangrasi@gmail.com', '...', 0, 'shaf', '...', '...', '...', '...', '2024-09-09 17:17:47', '2024-09-09 17:17:47'),
(22, '1', 'umrw58901878@gmail.com', 'mrw58901878@gmail.com', 'using-clerk-auth-instead-this', 0, 'Mr.', 'this is my address', '03362103259', NULL, 'this is my bio', '2024-09-12 06:08:26', '2024-09-12 10:06:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `key` (`key`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `applicationId` (`applicationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `media_ibfk_1` FOREIGN KEY (`applicationId`) REFERENCES `applications` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
