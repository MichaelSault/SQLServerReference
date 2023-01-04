SELECT VehicleTemperatureID,
	Temperature AS Celsius,
	Temperature * 1.8 +32 AS Fahrenheit
FROM Warehouse.VehicleTemperatures;

CREATE FUNCTION Warehouse.ToFahrenheit (@Celsius decimal(10,2))
RETURNS decimal(10,2)
AS
BEGIN
	DECLARE @Fahrenheit decimal(10,2);
	SET @Fahrenheit = (@Celsius * 1.8 + 32);
	RETURN @Fahrenheit
END;

SELECT VehicleTemperatureID,
	Temperature AS Celsius,
	Warehouse.ToFahrenheit(Temperature) AS Fahrenheit
FROM Warehouse.VehicleTemperatures;