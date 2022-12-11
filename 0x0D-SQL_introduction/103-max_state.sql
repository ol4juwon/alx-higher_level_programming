-- avg temp
SELECT city, MAX(value) AS avg_temp
FROM temperatures
GROUP BY state
ORDER BY avg_temp DESC;