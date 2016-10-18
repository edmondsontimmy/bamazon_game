CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
	ItemID INTEGER(11) AUTO_INCREMENT NOT NULL,
	ProductName VARCHAR(30),
    DepartmentName VARCHAR(30),
	Price INTEGER(11) NOT NULL,
    Stock INTEGER(11),
	PRIMARY KEY(ItemID)
);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("IPhone 7", "Electronics", 599, 20);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Plates", "Home Decor", 20, 100);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Cups", "Home Decor", 7, 150);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Yard Nome", "Yard Decor", 15, 30);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Garden Hose", "Yard Assc.", 25, 40);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Wheel Barrow", "Yard Assc.", 80, 10);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Books", "Books/Cards", 23, 300);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Couch", "Home Assc.", 199, 6);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Laptop", "Electronics", 399, 15);

INSERT INTO Products (ProductName, DepartmentName, Price, Stock)
VALUES("Fishing Rod", "Outdoors", 35, 40);

SELECT * FROM Products;