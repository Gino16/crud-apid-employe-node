CREATE DATABASE company;
USER company;

CREATE TABLE employes (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(45) DEFAULT NULL,
	salary INT(11) DEFAULT NULL,
	PRIMARY KEY (id)
);

DESCRIBE employes;

INSERT INTO employes(id, name, salary) VALUES (1, 'Gino', 2500), (2, 'David', 1000), (3, 'Milagritos', 1800);

SELECT * FROM employes e ;