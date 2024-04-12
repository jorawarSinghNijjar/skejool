package com.ebnite.skejool.controller;

import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.entity.Shift;
import com.ebnite.skejool.services.EmployeeService;
import com.ebnite.skejool.services.ShiftService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/schedule/daily")
public class DailyScheduleController {
    private static final Logger logger = LoggerFactory.getLogger(DailyScheduleController.class);
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private ShiftService shiftService;

    // Daily Schedule Mappings
    @GetMapping("/employees/{empId}")
    public ResponseEntity<Employee> getEmployeeSchedule(@PathVariable int empId) {
        return new ResponseEntity<>(employeeService.getEmployee(empId), HttpStatus.OK);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployeesWithSchedule() {
        return new ResponseEntity<>(employeeService.getAllEmployees(), HttpStatus.OK);
    }

    @PostMapping("/employees/{empId}")
    public ResponseEntity<Employee> addShiftToEmployeeSchedule(@PathVariable("empId") int empId, @RequestBody Shift shift) {

        Employee emp = employeeService.getEmployee(empId);

        if (emp == null) throw new NoSuchElementException("Employee not found");

        /*
        Todo: Check if the same shift exists or not in shifts table
            if exists then fetch the shift
            otherwise create new Shift
        */

        List<Shift> shifts = new ArrayList<>();
        shifts.add(shift);
        emp.getSchedule().add(shift);

            /*
        Todo: Check if the same shift exists or not in employee's schedule
            if exists then throw exception
            otherwise create new Shift in schedule
        */

        emp = employeeService.updateEmployee(empId, emp);

        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @DeleteMapping("/employees/{empId}")
    public ResponseEntity<Employee> deleteAllSchedulesFromEmployee(@PathVariable("empId") int empId) {
        Employee emp = employeeService.getEmployee(empId);
        emp.setSchedule(null);
        return new ResponseEntity<>(employeeService.updateEmployee(empId, emp), HttpStatus.OK);
    }
}
