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
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('chocolate', 'sweets', 3, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('your water', 'water', 1, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('baguette', 'bakery', 7, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('fish', 'seafood', 16, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('donuts', 'grocery', 2, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('swiss cheese', 'deli', 5, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('ham', 'deli', 4.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('bananas', 'fruits', 1.33, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('strawberries', 'fruits', 4.85, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('eggs', 'eggs', 3.19, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('almond milk', 'dairy', 3.69, 5);
