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


INSERT INTO usuario (nome,email,senha) VALUES 
('Kauã', 'kaua@pedroso','senhaTop@123');

INSERT INTO compositor (nome,periodo) VALUES 
('Franz Liszt', 'Romântico'),
('Chopin','Romântico');

INSERT INTO estudo (tecnica, tempo_minutos, fkUsuario, fkCompositor) VALUES
('Escalas e Arpejos', 30, 1, 1),
('Oitavas', 45, 1, 2);