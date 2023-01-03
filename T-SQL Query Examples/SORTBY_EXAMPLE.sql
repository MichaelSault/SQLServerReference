SELECT * 
FROM [Stark Industries].dbo.Customers
WHERE Province = 'CA' OR Province = 'NY'
ORDER BY [First Name] DESC, [Last Name]
;