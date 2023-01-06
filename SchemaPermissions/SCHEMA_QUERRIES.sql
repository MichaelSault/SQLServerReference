CREATE SCHEMA sales;

ALTER SCHEMA sales TRANSFER dbo.Customers;

GRANT INSERT ON SCHEMA :: sales TO Octavia; --can also grant UPDATE or DELETE permissions