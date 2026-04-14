# prova_nest

**Codigos do banco:**

CREATE DATABASE locadora_db;

USE locadora_db;

`INSERINDO ESTILOS`

INSERT INTO estilos (nome, createdAt, updatedAt) VALUES<br>
('Ação', NOW(), NOW()),<br>
('Comédia', NOW(), NOW()),<br>
('Terror', NOW(), NOW()),<br>
('Drama', NOW(), NOW()),<br>
('Ficção Científica', NOW(), NOW());<br>


`iNSERINDO FILMES`

INSERT INTO filmes (estilo, nome, ano, duracao, foto, sinopse, video, createdAt, updatedAt) VALUES<br>
(1, 'Velozes e Furiosos', '2020', '120', 'url1', 'Corridas e ação', 'video1', NOW(), NOW()),<br>
(2, 'As Branquelas', '2004', '110', 'url2', 'Comédia policial', 'video2', NOW(), NOW()),<br>
(3, 'Invocação do Mal', '2013', '112', 'url3', 'História de terror', 'video3', NOW(), NOW()),<br>
(4, 'À Espera de um Milagre', '1999', '189', 'url4', 'Drama emocionante', 'video4', NOW(), NOW()),<br>
(5, 'Interestelar', '2014', '169', 'url5', 'Viagem no espaço', 'video5', NOW(), NOW());<br>
