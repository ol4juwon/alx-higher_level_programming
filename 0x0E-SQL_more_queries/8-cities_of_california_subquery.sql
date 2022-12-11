-- select lsub query
SELECT id, name from cities WHERE 
state_id=(SELECT id FROM states WHERE name="California");