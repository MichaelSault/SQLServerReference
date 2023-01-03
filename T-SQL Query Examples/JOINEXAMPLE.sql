SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM Products;

SELECT Customers.[First Name],
		Customers.[Last Name],
		Orders.OrderDate,
		Orders.Quantity,
		Products.Name,
		Products.RetailPrice
FROM Customers INNER JOIN Orders 
	ON Customers.CustomerID = Orders.CustomerID
	INNER JOIN Products 
	ON Orders.ProductID = Products.ProductID
;