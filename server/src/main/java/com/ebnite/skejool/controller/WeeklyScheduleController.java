package com.ebnite.skejool.controller;

import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.services.EmployeeService;
import com.ebnite.skejool.services.ShiftService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/schedule/weekly")
public class WeeklyScheduleController {

    private static final Logger logger = LoggerFactory.getLogger(DailyScheduleController.class);
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private ShiftService shiftService;

    // Weekly Schedule Mappings
    @GetMapping("/employees/{empId}")
    public ResponseEntity<Employee> getEmployeeSchedule(@PathVariable int empId) {
        return new ResponseEntity<>(employeeService.getEmployee(empId), HttpStatus.OK);
    }
}
