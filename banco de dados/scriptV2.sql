CREATE DATABASE projeto_individual;
USE projeto_individual;

-- Tabela de usuários
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(250),
    email VARCHAR(100),
    senha VARCHAR(100)
);

-- Tabela de tarefas
CREATE TABLE tarefa (
    idTarefa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT fkTarefaUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

-- Estados do Kanban
CREATE TABLE estado (
    idEstado INT PRIMARY KEY AUTO_INCREMENT,
    tipoEstado VARCHAR(25),
    CONSTRAINT chkTipoEstado CHECK (tipoEstado IN ('Quero Aprender', 'Aprendendo', 'Aprendi'))
);

-- Histórico da tarefa (um registro por mudança de estado)
CREATE TABLE infoTabela (
    fkTarefa INT,
    fkEstado INT,
    fkUsuario INT,
    nomeMusica VARCHAR(100),
    dtTabela DATE DEFAULT (CURDATE()),
    FOREIGN KEY (fkTarefa) REFERENCES tarefa(idTarefa),
    FOREIGN KEY (fkEstado) REFERENCES estado(idEstado),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

-- Inserindo estados
INSERT INTO estado (tipoEstado) VALUES
('Quero Aprender'),
('Aprendendo'),
('Aprendi');

-- Inserindo uma tarefa nova
INSERT INTO tarefa VALUES (DEFAULT, 1);

-- Simulando que o usuário jogou uma música no quadro "Quero Aprender"
INSERT INTO infoTabela VALUES (1, 1, 1, 'Ousado Amor', 2025-05-3);

-- Depois, ele arrastou a música para "Aprendendo"
INSERT INTO infoTabela VALUES (1, 2, 1, 'Ousado Amor', 2025-05-8);

-- Finalmente, ele concluiu a música "Aprendi" 
INSERT INTO infoTabela VALUES (1, 3, 1, 'Ousado Amor', 2025-05-12);

