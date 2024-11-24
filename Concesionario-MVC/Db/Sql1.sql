CREATE DATABASE IF NOT EXISTS bd1 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE bd1;

DROP TABLE IF EXISTS coches;

CREATE TABLE IF NOT EXISTS coches
(
    ide_coc INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mar_coc VARCHAR (20) CHARACTER SET utf8 DEFAULT NULL,
    mod_coc VARCHAR (20) CHARACTER SET utf8 DEFAULT NULL,
    aut_coc INT,
    rut_coc VARCHAR (200) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO coches (mar_coc, mod_coc, aut_coc) VALUES
('tesla', 's', 600),
('tesla', 'model 3', 580),
('nio', 'et7', 1000),
('nio', 'et5', 1000),
('mg', 'mg4', 450);