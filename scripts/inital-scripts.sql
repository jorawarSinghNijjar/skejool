

-- DELETE FROM employees WHERE employees.id = 2;

-- DELETE FROM employees_shifts WHERE employee_id = 1;


-- INSERT INTO shifts(
-- 	start_time, 
-- 	end_time, 
-- 	start_day_of_shift, 
-- 	end_day_of_shift,
-- 	shift_week_start_date, 
-- 	recurring, 
-- 	recurrence_start_date, 
-- 	recurrence_end_date 
-- )
-- VALUES (
-- 	'4:00:00',
-- 	'16:00:00',
-- 	5,
-- 	6,
-- 	'2024-01-01',
-- 	false,
-- 	null,
-- 	null
-- );

-- INSERT INTO employees (
-- 	email,
-- 	name,
-- 	position
-- )
-- VALUES (
-- 	'murman@gmail.com',
-- 	'murman',
-- 	'worker'
-- );

-- INSERT INTO employees_shifts ( employee_id, shift_id )
-- 						VALUES( 5,1 ),
-- 						      ( 6,1 ),
-- 							  ( 1,3 ),
-- 						      ( 7,3 ),
-- 							  ( 8,3 ),
-- 							  ( 9,2 );

-- INSERT INTO employees_shifts ( employee_id, shift_id )
-- 						VALUES( 5,2) ;
						
SELECT * FROM shifts;

SELECT * FROM employees;

SELECT * FROM employees_shifts;

-- View all employees and their respective shifts
-- SELECT shifts.shift_week_start_date, 
-- 		employees.name, shifts.start_time, 
-- 		shifts.end_time, 
-- 		shifts.start_day_of_shift, 
-- 		shifts.end_day_of_shift
-- FROM employees 
-- LEFT JOIN employees_shifts 
-- ON employees.id = employees_shifts.employee_id
-- RIGHT JOIN shifts
-- ON employees_shifts.shift_id = shifts.id;

-- View employee by id and shift start date

-- SELECT shifts.shift_week_start_date, 
-- 		employees.name, shifts.start_time, 
-- 		shifts.end_time, 
-- 		shifts.start_day_of_shift, 
-- 		shifts.end_day_of_shift
-- FROM employees 
-- LEFT JOIN employees_shifts 
-- ON employees.id = employees_shifts.employee_id
-- RIGHT JOIN shifts
-- ON employees_shifts.shift_id = shifts.id
-- WHERE employees.id = 5;

SELECT *
FROM employees 
LEFT JOIN employees_shifts 
ON employees.id = employees_shifts.employee_id
RIGHT JOIN shifts
ON employees_shifts.shift_id = shifts.id
WHERE employees.id = 5;
