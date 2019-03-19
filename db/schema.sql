### Schema
DROP DATABASE IF EXISTS orderup_db;
CREATE DATABASE orderup_db;
USE orderup_db;

CREATE TABLE orders
(
	id int NOT NULL AUTO_INCREMENT,
	fullorder varchar(255) NOT NULL,
	complete BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
