-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 07, 2022 at 05:25 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Blog Users`
--

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `body` text NOT NULL,
  `writer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `title`, `body`, `writer`) VALUES
(1, 'Consejos para los futuros \"Devs\"', 'Tips para mejorar las practicas de desarrollo y destacar siendo un Jr!\r\n\r\n1. Practicar bastante! \r\nNo importa lo que suceda, jamas pierdas el foco. Muchas veces nos encontramos con el paradigma al primer error que nos encontramos en el desarrollo y esto suele ser muy frustrante, pero no es algo eterno, todo tiene solucion!\r\n\r\n2. Consigue un mentor o una persona con seniority mas alto que el tuyo!\r\nPor lo general los seniors arriba de uno suelen ser bastante exigentes con uno pero esto nos lleva a mejorar nuestro razonamiento y metodos a la hora de desarrollar. Ellos nos hacen mejores desarrolladores al final del dia.\r\n\r\nHablaremos mas en la siguiente parte!', 'Jorge A Bravo P \r\nSsr Software QA Tester'),
(8, 'Jorge Bravo', 'Desarrollador Jr', 'Jorginho'),
(9, 'La verdad que soy un Genio!', 'Honestamente me costo muchisimo hacerlo pero lo logre!', 'Jb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
