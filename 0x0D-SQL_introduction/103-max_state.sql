-- avg temp
SELECT city, MAX(value) AS avg_temp
FROM temperatures
ORDER BY avg_temp DESC;