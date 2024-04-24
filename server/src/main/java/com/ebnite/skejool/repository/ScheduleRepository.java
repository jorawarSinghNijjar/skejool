package com.ebnite.skejool.repository;

import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.model.EmployeeWeeklySchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ScheduleRepository extends JpaRepository<Employee, Integer> {
//    @Query(value = "SELECT * FROM USERS WHERE EMAIL_ADDRESS = ?1", nativeQuery = true)
//    User findByEmailAddress(String emailAddress);

//    @Query(value = "SELECT shifts.shift_week_start_date," +
//            "employees.name, shifts.start_time," +
//            "shifts.end_time," +
//            "shifts.start_day_of_shift," +
//            "shifts.end_day_of_shift" +
//            "FROM employees" +
//            "LEFT JOIN employees_shifts" +
//            "ON employees.id = employees_shifts.employee_id" +
//            "RIGHT JOIN shifts" +
//            "ON employees_shifts.shift_id = shifts.id" +
//            "WHERE employees.id = ?1;",
//            nativeQuery = true)
//    EmployeeWeeklySchedule findEmployeeSchedule(Integer empId);
}
