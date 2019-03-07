DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
 USE bamazon_db;
 
 CREATE TABLE bamazon_products(
 item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(40),
 department_name VARCHAR(25),
 price INTEGER,
 stock_quantity INTEGER,
 PRIMARY KEY (item_id)
 );
 
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES ("hand-made soap", "Health and Wellness", 7, 55);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("charcoal toothpaste", "Health and Wellness", 8, 16);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Pea protein powder", "Nutrition", 20, 28);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Bamboo toothbrushes", "Health and Wellness", 3, 221);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Metal Straws (3-pack)", "Health and Wellness", 5, 132); 
INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Reusable bags", "Household Items", 5, 20);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Essential oil Diffuser","Household Items", 19, 9);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Water Distiller","Household Items", 250, 144);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Salt Lamp", "Household Items", 25, 75);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Bamboo Hair-brush","Clothing and Accessories", 12, 30);
 INSERT INTO bamazon_products (product_name, department_name, price, stock_quantity)
	VALUES("Hemp Socks", "Clothing and Accessories", 7, 83);

 SELECT * FROM bamazon_products;