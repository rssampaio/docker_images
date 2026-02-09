# docker_images
Imagens Docker

## Desafio FullCycle: GO
https://hub.docker.com/repository/docker/rssampaio1176/desafio_fullcycle/tags/desafio_GO/sha256-0051a609083c771aa1f78c73d2bcb2620bff45818c7ae68efb245dc45c05a2d2

## Desafio FullCycle: Node + mysql
https://hub.docker.com/repository/docker/rssampaio1176/desafio_fullcycle/tags/desafio_node/sha256:9f5900ee3a71ab14c5e0fcfd06c79cf77d9e15c6341dd5910496ebe0c705406b

### Passo a passo:
1. Entrar na pasta docker_node
2. Rodar o comando: docker-compose up -d
3. Aguardar a inicialização do MySql
4. Acessa o MySql: docker exec -it mysql_fullcycle mysql -u root -proot fullcycle
5. Acessar o usuário fullcycle:
  - SHOW DATABASES;
  - USE fullcycle;
  - CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250) NOT NULL );
6. Acessar a url e inserir um nome: "http://localhost:8080/?name=João"
7. O resultado do insert será listado logo abaixo
