CREATE DATABASE shopping;

CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 email VARCHAR(500),
 password_digest VARCHAR(500),

);

CREATE TABLE dresses(
  id SERIAL PRIMARY KEY,
  title TEXT,
  imgUrl TEXT,       
  originalPrice REAL,
  discountedPrice REAL,
  size TEXT,
  stocklevel NUMBER

);

CREATE TABLE cartItems(
  id SERIAL PRIMARY KEY,
  title TEXT,
  imgUrl TEXT,       
  originalPrice REAL,
  discountedPrice REAL,
  size TEXT,
  quantity NUMBER,
  user_id NUMBER FOREIGN KEY

);