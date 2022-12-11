-- avg temp
SELECT city, MAX(value) AS max_temp
FROM temperatures
GROUP BY state
ORDER BY avg_temp DESC;