package com.ebnite.skejool.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;

@JsonSerialize
@ToString
@AllArgsConstructor
@Getter
@Setter
public class MonthlyDayShiftDTO {
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private EmployeeDTO emp;
}