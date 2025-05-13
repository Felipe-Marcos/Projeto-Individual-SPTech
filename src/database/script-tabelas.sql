-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projeto_individual;
use projeto_individual;

create table usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(250),
email VARCHAR (100),
senha VARCHAR (100)
);

create table tarefa(
idTarefa INT PRIMARY KEY auto_increment,
fkUsuario INT,
constraint fkTarefaUsuario foreign key (fkUsuario) references usuario(idUsuario)
);

create table estado (
idEstado INT PRIMARY KEY AUTO_INCREMENT,
tipoEstado VARCHAR (25),
constraint fkTipoEstado check(tipoEstado in ("Quero Aprender", "Aprendendo", "Aprendi"))
);

create table infoTabela (
fkTarefa INT, 
fkEstado INT,
fkUsuario INT,
nomeMusica VARCHAR (100),
dtTabela DATE
);

