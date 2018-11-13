DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(30) NOT NULL,	
	price INTEGER(10) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('chocolate Lala', 'sweets', 3, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('your water', 'water', 1, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('baguette', 'bakery', 7, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('fish', 'seafood', 16, 5);
