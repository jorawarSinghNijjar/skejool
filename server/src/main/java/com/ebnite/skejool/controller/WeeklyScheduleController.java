package com.ebnite.skejool.controller;

import com.ebnite.skejool.model.EmployeeWeeklySchedule;
import com.ebnite.skejool.services.EmployeeService;
import com.ebnite.skejool.services.WeeklyScheduleService;
import com.ebnite.skejool.services.ShiftService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/schedule/weekly")
public class WeeklyScheduleController {

    private static final Logger logger = LoggerFactory.getLogger(DailyScheduleController.class);

    @Autowired
    private WeeklyScheduleService weeklyScheduleService;
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private ShiftService shiftService;

    // Weekly Schedule Mappings

    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeWeeklySchedule>> getEmployeeSchedule(@Param("weekStartDate") LocalDate weekStartDate) {
        return new ResponseEntity<>(weeklyScheduleService.getAllEmployeesWeeklySchedule(weekStartDate), HttpStatus.OK);
    }

    @GetMapping("/employees/{empId}")
    public ResponseEntity<EmployeeWeeklySchedule> getEmployeeSchedule(@PathVariable int empId, @Param("weekStartDate") LocalDate weekStartDate) {
        return new ResponseEntity<>(weeklyScheduleService.getEmployeeWeeklySchedule(empId, weekStartDate, null), HttpStatus.OK);
    }
}
