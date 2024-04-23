

-- DELETE FROM employees WHERE employees.id = 2;

-- DELETE FROM employees_shifts WHERE employee_id = 1;

-- Add Sat - Sun shifts recurring

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
-- 	6,
-- 	0,
-- 	null,
-- 	true,
-- 	CURRENT_DATE,
-- 	'2025-01-01'
-- );

-- Mon - Fri Shift

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
-- 	'9:00:00',
-- 	'17:00:00',
-- 	1,
-- 	5,
-- 	CURRENT_DATE,
-- 	false,
-- 	null,
-- 	null
-- );

-- Add single employee

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

-- Add multiple employees

-- INSERT INTO employees (
-- 	email,
-- 	name,
-- 	position
-- )
-- VALUES ( 'harman@gmail.com', 'harman', 'worker' ),
-- 		( 'german@gmail.com', 'german', 'worker' ),
-- 		( 'karman@gmail.com', 'karman', 'worker' ),
-- 		( 'dharman@gmail.com', 'dharman', 'worker' ),
-- 		( 'parman@gmail.com', 'parman', 'worker' ),
-- 		( 'sarman@gmail.com', 'sarman', 'worker' );

-- INSERT INTO employees_shifts ( employee_id, shift_id )
-- 						VALUES( 1,3 ),
-- 						      ( 2,3 ),
-- 							  ( 3,3 ),
-- 						      ( 4,4 ),
-- 							  ( 5,4 ),
-- 							  ( 6,4 );

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

-- SELECT *
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
ON employees_shifts.shift_id = shifts.id;
