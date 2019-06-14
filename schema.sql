CREATE DATABASE shopping;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS dresses CASCADE;
DROP TABLE IF EXISTS cart_items CASCADE;

CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 email VARCHAR(500),
 password_digest VARCHAR(500)

);

CREATE TABLE dresses(
  id SERIAL PRIMARY KEY,
  title TEXT,
  imgUrl TEXT,       
  originalPrice REAL,
  discountedPrice REAL,
  size TEXT,
  stockLevel INTEGER

);

 