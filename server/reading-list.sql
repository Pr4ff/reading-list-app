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
    title VARCHAR(100) NOT NULL    
);

CREATE TABLE category_author (    
    category_id BIGSERIAL,
    author_id BIGSERIAL,    
    PRIMARY KEY (category_id, author_id),
    CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id),
    CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES author(id)
);

CREATE TABLE author_book (    
    author_id BIGSERIAL,
    book_id BIGSERIAL,    
    PRIMARY KEY (author_id, book_id),    
    CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES author(id), 
    CONSTRAINT fk_book FOREIGN KEY(book_id) REFERENCES book(id)
);

INSERT INTO category (description) VALUES ('Philosophy');

INSERT INTO author (name) VALUES ('Yukio Mishima');

INSERT INTO book (title) VALUES ('Sun and Steel');

INSERT INTO category_author (category_id, author_id) VALUES (2, 1);

INSERT INTO author_book (author_id, book_id) VALUES (1, 2);