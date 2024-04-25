package com.ebnite.skejool.controller;

import com.ebnite.skejool.model.CompanyMonthlySchedule;
import com.ebnite.skejool.services.MonthlyScheduleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/schedule/monthly")
public class MonthlyScheduleController {

    private static final Logger logger = LoggerFactory.getLogger(MonthlyScheduleController.class);
    @Autowired
    private MonthlyScheduleService monthlyScheduleService;

    @GetMapping("")
    public ResponseEntity<CompanyMonthlySchedule> getMonthlySchedule(@Param("month") Integer month, @Param("year") Integer year) {
        return new ResponseEntity<>(monthlyScheduleService.getCompanyMonthlySchedule(month, year), HttpStatus.OK);
    }


}
