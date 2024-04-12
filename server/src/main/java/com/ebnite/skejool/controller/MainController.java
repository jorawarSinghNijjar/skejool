package com.ebnite.skejool.controller;


import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.entity.Hello;
import com.ebnite.skejool.entity.Shift;
import com.ebnite.skejool.services.EmployeeService;
import com.ebnite.skejool.services.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;

@RestController
@RequestMapping("/index")
public class MainController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private ShiftService shiftService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    public ResponseEntity<Hello> index() {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(new Hello());
    }
//
//    @GetMapping("/run")
//    public ResponseEntity run() throws Exception {
//        Employee emp1 = new Employee("Harman", "test@test.com", "mechanic");
//        Employee savedEmployee = employeeService.addEmployee(emp1);
//
//        LocalDate shiftWeekStartDate = LocalDate.parse("2015-01-01");
//        LocalTime startTime = LocalTime.of(9, 0);
//        LocalTime endTime = LocalTime.of(17, 0);
//        Shift shift = new Shift(shiftWeekStartDate, DayOfWeek.MONDAY, DayOfWeek.THURSDAY, startTime, endTime, false);
//
//        DailySchedule schedule = scheduleService.assignShift(emp1.getId(), shift);
//        savedEmployee.setSchedule(schedule);
//
//        savedEmployee = employeeService.updateEmployee(savedEmployee.getId(), savedEmployee);
//
//        return ResponseEntity.status(HttpStatus.OK).body(savedEmployee);
//    }
}
