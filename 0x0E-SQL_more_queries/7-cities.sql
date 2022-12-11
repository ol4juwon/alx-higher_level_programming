-- create force table
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.cities (
id INT AUTO_INCREMENT NOT NULL UNIQUE,
state_id INT,
name VARCHAR(256) NOT NULL
FOREIGN_KEY (state_id) REFERENCES state(state_id)
);