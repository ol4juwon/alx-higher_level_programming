-- create force table
CREATE TABLE IF NOT EXISTS unique_id (
id INT DEFAULT 1 NOT NULL UNIQUE,
name VARCHAR(256) NOT NULL
);