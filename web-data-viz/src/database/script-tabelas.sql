-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
-- Projeto Individual de PI - OPUS
CREATE DATABASE opus;
USE opus;

CREATE TABLE usuario (
id INT PRIMARY KEY auto_increment,
nome varchar (45) NOT NULL,
email varchar (45) NOT NULL,
senha varchar (45) NOT NULL
);

CREATE TABLE compositor (
id INT PRIMARY KEY auto_increment,
nome varchar (60),
periodo varchar (45)
);

CREATE TABLE estudo (
id INT PRIMARY KEY auto_increment,
tecnica varchar (45),
horas INT,
data_estudo DATETIME DEFAULT current_timestamp,
fkUsuario INT,
	CONSTRAINT fkEstudoUsuario	
		FOREIGN KEY (fkUsuario) 
			REFERENCES usuario (id),
fkCompositor INT,
	CONSTRAINT fkEstudoCompositor
		FOREIGN KEY (fkCompositor)
			REFERENCES compositor (id)
);

select * from usuario;
select * from estudo;
select * from compositor;

SELECT e.*, c.nome as nome_compositor 
FROM estudo e 
JOIN compositor c ON e.fkCompositor = c.id;

INSERT INTO compositor (nome) VALUES 
('Frédéric Chopin'), 
('Johann Sebastian Bach'), 
('Franz Liszt'), 
('Ludwig Van Beethoven'), 
('Sergei Rachmaninoff');

CREATE USER 'user_opus'@'%' IDENTIFIED BY 'Opus@123';
GRANT ALL PRIVILEGES ON opus.* TO 'user_opus'@'%';
FLUSH PRIVILEGES;