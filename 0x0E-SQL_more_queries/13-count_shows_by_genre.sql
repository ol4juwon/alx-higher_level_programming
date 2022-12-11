-- select and group
SELECT tv_genres.name AS genre, count(tv_show_genres.genre_id) AS number_of_shows
WHERE tv_show_genres IS NOT NULL
GROUP BY tv_genres.name
ORDER BY number_of_shows DESC;
