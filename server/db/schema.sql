/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS notes;

CREATE DATABASE notes;

USE notes;

CREATE TABLE note (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  content VARCHAR(100)
);

CREATE TABLE tag (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE link (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tag_id INT NOT NULL,
  note_id INT NOT NULL,
  FOREIGN KEY (tag_id) REFERENCES tag(id),
  FOREIGN KEY (note_id) REFERENCES note(id)
);

INSERT INTO note (title, content)
VALUES ('Make the DB work', 'It should read this');

INSERT INTO tag (title)
VALUES ('Sample');

INSERT INTO link (tag_id, note_id)
VALUES (1, 1);

/*
SELECT note.id, note.title, note.content, tag.title FROM note JOIN link ON note.id=link.note_id JOIN tag ON tag.id=link.tag_id;
*/