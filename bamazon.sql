DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
    item_id AUTO_INCREMENT NOT NULL,
    product_name VARCHAR
    (100) NOT NULL,
    department_name VARCHAR
    (100) NOT NULL,
    price INT
    (10,3) NOT NULL,
    stock_quantity INT
    (6) NOT NULL,
    PRIMARY KEY
    (item_id)
);

INSERT INTO bamazon.products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("timer", "misc", 11.75, 65);

SELECT *
FROM bamazon.products;
