-- This Script creates a fresh copy of Stark Industries
-- ProductCategories Table
USE [Stark Industries];
GO

TRUNCATE TABLE ProductCategories;

DROP TABLE IF EXISTS ProductCategories;

CREATE TABLE ProductCategories (
	CategoryID int IDENTITY(1,1) NOT NULL,
	CategoryName varchar(25) NOT NULL,
	CategoryAbbreviation char(2) NOT NULL
);

INSERT INTO ProductCategories (CategoryName, CategoryAbbreviation)
	VALUES ('Blueprints', 'BP'),
		('Drone Kits', 'DK'),
		('Drones', 'DS'),
		('eBooks', 'EB'),
		('Robot Kits', 'RK'),
		('Robots', 'RS'),
		('Training Videos', 'TV')
;

SELECT * FROM ProductCategories;