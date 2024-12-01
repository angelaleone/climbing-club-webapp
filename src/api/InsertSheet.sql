INSERT INTO "AttendanceSheet" ("adminID", "attendees", "date") 
VALUES ($1, ARRAY[$2], $3),
RETURNING *;
