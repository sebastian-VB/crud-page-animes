
CREATE DATABASE `anime_page`;
USE `anime_page`;

# se crea la tabla de usuarios
CREATE TABLE `users`(
	id int primary key auto_increment not null,
    nombre varchar(50),
    rol varchar(8) default 'user',
    usuario varchar(255) unique,
    contrasena text,
    createdAt date,
    updatedAt date
);

select * from `users`;

# se crea la tabla de animes
CREATE TABLE `animes`(
	id int primary key not null,
    titulo text unique,
    descripcion text,
    imagen text,
    createdAt date,
    updatedAt date
);

DROP TABLE `anime_page`.`users`;
DROP TABLE `anime_page`.`animes`;
