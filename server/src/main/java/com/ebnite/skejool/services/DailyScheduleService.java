package com.ebnite.skejool.services;

import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.model.EmployeeDaySchedule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class DailyScheduleService {

    private static final Logger logger = LoggerFactory.getLogger(ScheduleService.class);

    @Autowired
    private EmployeeService employeeService;

    // Get single employee schedule from database
    public EmployeeDaySchedule getEmployeeDaySchedule(Integer empId, LocalDate date){
        Employee emp = employeeService.getEmployee(empId);

        EmployeeDaySchedule employeeDaySchedule = new EmployeeDaySchedule(emp.getId(), date);
        employeeDaySchedule.setEmpName(emp.getName());
        employeeDaySchedule.setEmpEmail(emp.getEmail());
        employeeDaySchedule.setEmpPosition(emp.getPosition());

        // fetch all shifts for employee in relation to the date


        return employeeDaySchedule;
    }

}
