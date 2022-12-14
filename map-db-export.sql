-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Úte 13. zář 2022, 20:08
-- Verze serveru: 10.4.24-MariaDB
-- Verze PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `maps`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `cord1` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `markers`
--

INSERT INTO `markers` (`id`, `cord1`, `description`) VALUES
(1, '50°1\'48.932\"N14°31\'52.623\"E', 'Zachod'),
(2, '50°1\'41.885\"N14°31\'46.597\"E', 'Elon'),
(3, '50°1\'41.587\"N14°32\'3.592\"E', 'Zachod'),
(4, '50°1\'50.917\"N14°32\'15.642\"E', 'Zachod'),
(5, '50°1\'41.984\"N14°31\'31.766\"E', 'Zachod');

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
