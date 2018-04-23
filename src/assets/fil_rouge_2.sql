-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2018 at 02:09 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fil_rouge_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `enquete`
--

DROP TABLE IF EXISTS `enquete`;
CREATE TABLE IF NOT EXISTS `enquete` (
  `id_enquete` int(11) NOT NULL AUTO_INCREMENT,
  `nom_enquete` varchar(45) DEFAULT NULL,
  `type_affaire` varchar(45) DEFAULT NULL,
  `date_creation` date DEFAULT NULL,
  `localisation` varchar(45) DEFAULT NULL,
  `statut` varchar(45) DEFAULT NULL,
  `classee` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_enquete`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `enquete`
--

INSERT INTO `enquete` (`id_enquete`, `nom_enquete`, `type_affaire`, `date_creation`, `localisation`, `statut`, `classee`) VALUES
(1, 'Meutre à Halloween', 'Homicide', '1980-11-09', 'usa', 'non résolue', 0),
(2, 'La Blague de trop', 'harcelement moral', '1965-06-12', 'montreuil', 'résolue', 1),
(3, 'La sabotage de la fusée', NULL, '2018-03-30', 'Antibes', NULL, 0),
(5, 'dsadsadasdasdsa', 'dsadsadasfdsfasdfsasdfa', '1988-02-25', 'dsadasdasdasd', '3', 0),
(6, 'test affaire', 'test affaire', '1988-02-26', 'test affaire', NULL, 1),
(7, 'jazzy', 'BLABLABLA', '1988-05-26', 'France', '1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `humain`
--

DROP TABLE IF EXISTS `humain`;
CREATE TABLE IF NOT EXISTS `humain` (
  `id_humain` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `photo` varchar(1000) DEFAULT NULL,
  `date_deces` date DEFAULT NULL,
  `adresse` varchar(45) DEFAULT NULL,
  `grade` varchar(45) DEFAULT NULL,
  `competences` varchar(45) DEFAULT NULL,
  `date_prise_service` date DEFAULT NULL,
  `actif` varchar(24) DEFAULT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  `taille` float DEFAULT NULL,
  `poids` int(11) DEFAULT NULL,
  `signe_distinctif` varchar(45) DEFAULT NULL,
  `empreinte` varchar(1000) DEFAULT NULL,
  `casier` tinyint(4) DEFAULT NULL,
  `nombre_condamnation` int(11) DEFAULT NULL,
  `type_condamnation` varchar(45) DEFAULT NULL,
  `nationalite` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_humain`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `humain`
--

INSERT INTO `humain` (`id_humain`, `nom`, `prenom`, `date_naissance`, `genre`, `photo`, `date_deces`, `adresse`, `grade`, `competences`, `date_prise_service`, `actif`, `telephone`, `taille`, `poids`, `signe_distinctif`, `empreinte`, `casier`, `nombre_condamnation`, `type_condamnation`, `nationalite`) VALUES
(1, 'FUCKING DOE', 'John', '1980-02-08', 'M', 'https://dummyimage.com/medrect/000/fff&text=suspect+1', NULL, '1 rue du cile 94300 Montreuil', NULL, NULL, NULL, NULL, NULL, 1.65, 60, 'idiot,\ncicatrice sur le cul et la bite', NULL, 1, 1, 'Harcelement', 'Français'),
(2, 'Myers ', 'Michaelis', '1978-11-07', 'M', 'https://dummyimage.com/medrect/000/fff&text=suspect+2', NULL, '33 austin power street', NULL, NULL, NULL, NULL, NULL, 1.95, 100, 'masque flippant', NULL, 1, 0, 'voies de fait graves', 'USA'),
(3, 'Noury', 'jean-luc', '1980-02-03', 'M', NULL, NULL, '1 rue du postier', NULL, NULL, NULL, NULL, NULL, 1.75, 80, 'aucun', NULL, 0, 0, 'Fraude à la salle de sport', 'France'),
(4, 'Noury', 'jean-luc', '1980-02-03', 'M', NULL, NULL, '1 rue du postier', NULL, NULL, NULL, NULL, NULL, 1.75, 80, 'aucun', NULL, 0, 0, 'Fraude à la salle de sport', 'France'),
(5, 'Yolo', 'Panda', '1988-02-03', 'M', NULL, NULL, '3 rue du postier', NULL, NULL, NULL, NULL, NULL, 1.75, 80, 'aucun', NULL, 0, 0, 'Fraude à la salle de sport', 'Chine'),
(6, 'Yulu', 'Pondo', '1988-02-03', 'M', NULL, NULL, '3 rue du postier', NULL, NULL, NULL, NULL, NULL, 1.75, 80, 'aucun', NULL, 0, 0, 'Insulte à agent', 'Chine'),
(7, 'Yulu', 'Pondo', '1988-02-03', 'M', NULL, NULL, '3 rue du postier', NULL, NULL, NULL, NULL, NULL, 1.75, 80, 'aucun', NULL, 0, 0, 'Insulte à agent', 'Chine'),
(8, 'Yulu', 'Pondo', '1988-02-03', 'M', NULL, NULL, '3 rue du postier', NULL, NULL, NULL, NULL, NULL, 0, 0, 'aucun', NULL, 0, 0, 'Insulte à agent', 'Chine'),
(9, 'TOTOTOTOTOT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(10, 'TOTOTOTOTOT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(11, 'Zombi', 'Rob2', '2018-03-08', 'M', 'https://dummyimage.com/medrect/0748ed/f71313&text=suspect+3', NULL, '12 rue de paris', NULL, NULL, NULL, NULL, NULL, 1.2, 20, 'Tache', 'h', 0, 3, 'Suicide forcé', NULL),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(13, 'grominet', 'lechat', '1951-03-23', 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1.05, 0, 'cheveux sur la langue', NULL, 1, 12, 'Attaque de canari troop mignon', NULL),
(14, 'grominet', 'lechat', '1951-03-23', 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1.05, 0, 'cheveux sur la langue', NULL, 1, 12, 'Attaque de canari troop mignon', NULL),
(15, 'testo', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(16, NULL, NULL, NULL, NULL, NULL, NULL, 'testi adresse', NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(17, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(18, 'SimplonMan', 'ygor', NULL, 'M', NULL, NULL, 'Montreuil', NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(19, 'Dethier', 'Yannick', '1952-03-21', 'M', NULL, NULL, 'Monpellier je crois', NULL, NULL, NULL, NULL, NULL, 1.79, 0, 'Barbe et Coffre', NULL, 0, 0, 'Explosion intempestive volumineuse', 'France'),
(20, 'Admin', 'Gilles', '2018-03-20', 'M', NULL, NULL, 'Tru Avenue', 'Policier', 'Historien pornographique', NULL, NULL, '147785525', 50, 2000, 'Vegetable', NULL, 1, 0, 'Possession de drogue', 'Francais'),
(21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(23, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(27, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(28, 'fautkcamacrche', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(29, 'fautkcamacrche', 'coco', '2018-03-07', 'M', NULL, NULL, 'YUGIGIUY', NULL, NULL, NULL, NULL, NULL, 1, 56, 'YTDYFY', NULL, 1, 1, 'Fraude', 'fra'),
(30, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(31, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(32, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(33, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(34, 'Dupont', 'Didier', '2003-02-03', 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, 'Prostitution', 'moldave'),
(35, 'ftvgyhbjnkm', 'dasdasdasdad', '1988-05-22', 'F', 'vdsvas', NULL, 'dsadsa', NULL, NULL, NULL, NULL, NULL, 5, 22, 'dsadagfdsvfdgvb', 'vsdavsa', 1, 1, 'Tentative de meurtre', 'vgvfdsvdsvfsdv'),
(36, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(37, 'JIDS', 'DSA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 'DSA', NULL, 0, 0, NULL, NULL),
(38, 'FDSASAD', 'DSADASD', NULL, 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, 'Vol qualifié', NULL),
(39, 'dsad', 'Jdsadadsadasdasdasdaohn', '1980-02-08', 'M', 'https://dummyimage.com/medrect/000/fff&text=suspect+1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1.65, 60, 'idiot,\ncicatrice sur le cul', NULL, 1, 1, 'Harcelement', 'Français'),
(40, 'FUCKING DOE', 'John', '1980-02-08', 'M', 'https://dummyimage.com/medrect/000/fff&text=suspect+1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1.65, 60, 'idiot,\ncicatrice sur le cul', NULL, 1, 1, 'Harcelement', 'Français'),
(41, 'dscsdadcasjhmjh', 'Jdsadadsadasdasdasdaohn', '1980-02-08', 'M', 'https://dummyimage.com/medrect/000/fff&text=suspect+1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1.65, 60, 'idiot,\ncicatrice sur le cul', NULL, 1, 1, 'Harcelement', 'Français'),
(42, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(43, 'gt5hgtrvert', 'vevevevefvcefvef', NULL, 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(44, 'gt5hgtrvertnnht bnthg btn', 'vevevevefvcefvefikuoujmynhbggbtrv f', NULL, 'M', NULL, NULL, 'nbythbgrbv ', NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(45, 'testBLABLABLABLA', 'testBLABLABLABLA', NULL, 'M', 'testBLABLABLABLA', NULL, 'testBLABLABLABLA', NULL, NULL, NULL, NULL, NULL, 3, 2, NULL, 'testBLABLABLABLA', 1, 0, 'Menaces', 'testBLABLABLABLA'),
(46, 'testBLABLABLABLAtestBLABLABLABLA', 'testBLABLABLABLAtestBLABLABLABLA', NULL, 'F', NULL, NULL, 'testBLABLABLABLAtestBLABLABLABLA', NULL, NULL, NULL, NULL, NULL, -1, 7, 'testBLABLABLABLAtestBLABLABLABLA', 'testBLABLABLABLAtestBLABLABLABLA', 1, 564567789, 'Harcelement', 'testBLABLABLABLAtestBLABLABLABLA'),
(47, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(48, 'dasasd', 'fchjjikuyjhbgdvfnyjtf', NULL, 'M', 'gvfvfddfv', NULL, 'vfdfv', NULL, NULL, NULL, NULL, NULL, 0, 9, 'vfdfvdvdf', NULL, 1, 5, 'Tentative de meurtre', 'ukjhmgnbfvd'),
(49, 'ABIGAILE', 'JOHNSON', NULL, 'F', NULL, NULL, 'UN DILDO DANS LE CUL', NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 69, 'Prostitution', 'On sen fou'),
(50, 'Myers ', 'Michaelis', '1978-11-07', 'M', 'https://dummyimage.com/medrect/000/fff&text=suspect+2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1.95, 100, 'masque flippant', NULL, 0, 0, 'Homicide', 'USA'),
(51, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(52, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(53, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(54, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(55, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(56, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(57, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, NULL, 0, 0, NULL, NULL),
(58, 'rgdassdadsa', 'dsadasfasdsad', NULL, NULL, 'dsada', NULL, 'dsadasdgfdfdas', NULL, NULL, NULL, NULL, NULL, 0, 0, 'adsds', NULL, 1, 5, 'Homicide', 'dasdasdasd'),
(59, 'TESTO', 'DNDJKLKASLJNDASL', NULL, 'M', '', NULL, 'GFHJ', NULL, NULL, NULL, NULL, NULL, 0, 65, 'aFFECTIF', NULL, 0, 0, 'Tentative de meurtre', 'Czech'),
(60, 'GNANGANGANGNAGNANGA', 'OUNGOUNGOUNGOUNGOUGNOGUN', NULL, 'M', NULL, NULL, 'DASDASD', NULL, NULL, NULL, NULL, NULL, 0, 0, 'DSADASD', NULL, 0, 0, NULL, 'DASDAS'),
(61, 'BAHABHABHHABHA', 'DSADSADASAD', NULL, 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'BAHABHA', 'DSADSADASAD', NULL, 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(64, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(65, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(66, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(68, 'Specific', 'User', '1988-02-06', 'F', NULL, NULL, NULL, 'Policier', 'Ultra good', '1988-09-26', 'actif', '1456412184', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(69, 'dqsdsqdqsd', 'Johny', '1988-05-26', 'M', NULL, NULL, NULL, 'Policier', 'dshquikujndsq', NULL, NULL, '456916', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 'dasdas', 'dasdasdasd', NULL, 'M', NULL, NULL, NULL, 'Flick', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(71, 'Mister', 'Bean', '1999-09-22', 'M', NULL, NULL, NULL, 'Policier', 'Comique', '2000-05-05', 'actif', '1555456142', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(72, 'Clark', 'Kent', '1555-07-08', 'M', NULL, NULL, NULL, 'Policier', 'Hero', '0512-06-02', 'inactif', '545641256', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `personne_impliquee`
--

DROP TABLE IF EXISTS `personne_impliquee`;
CREATE TABLE IF NOT EXISTS `personne_impliquee` (
  `id_personne_implique` int(11) NOT NULL AUTO_INCREMENT,
  `humain_id` int(11) NOT NULL,
  `enquete_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  PRIMARY KEY (`id_personne_implique`),
  KEY `fk_personne_impliquee_enquete1_idx` (`enquete_id`),
  KEY `fk_personne_impliquee_status1_idx` (`status_id`),
  KEY `fk_personne_impliquee_Humain1` (`humain_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `personne_impliquee`
--

INSERT INTO `personne_impliquee` (`id_personne_implique`, `humain_id`, `enquete_id`, `status_id`) VALUES
(1, 1, 2, 2),
(2, 2, 1, 2),
(3, 11, 1, 2),
(7, 48, 1, 2),
(8, 49, 1, 2),
(9, 49, 1, 2),
(10, 49, 1, 2),
(11, 49, 1, 2),
(12, 49, 1, 2),
(13, 49, 1, 2),
(14, 49, 1, 2),
(15, 49, 1, 2),
(16, 58, 1, 2),
(17, 59, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`) VALUES
(1, 'agent'),
(2, 'suspect'),
(3, 'vctime'),
(4, 'temoin');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `personne_impliquee`
--
ALTER TABLE `personne_impliquee`
  ADD CONSTRAINT `fk_personne_impliquee_Humain1` FOREIGN KEY (`humain_id`) REFERENCES `humain` (`id_humain`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personne_impliquee_enquete1` FOREIGN KEY (`enquete_id`) REFERENCES `enquete` (`id_enquete`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personne_impliquee_status1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
