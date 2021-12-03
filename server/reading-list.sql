CREATE DATABASE readlist;

CREATE TABLE category (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

CREATE TABLE author (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL    
);

CREATE TABLE book (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    author_id BIGINT NOT NULL REFERENCES author(id),
    title VARCHAR(100) NOT NULL    
);

--> TABLE DROPPED, need to re-create
CREATE TABLE category_author (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    category_id BIGSERIAL,
    author_id BIGSERIAL,    
    PRIMARY KEY (category_id, author_id),
    CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id),
    CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES author(id)
);

INSERT INTO author (name) VALUES ('Mircea Eliade');

INSERT INTO book (author_id, title) VALUES (1 ,'Istoria Religiilor');