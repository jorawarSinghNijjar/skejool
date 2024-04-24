package com.ebnite.skejool.model;

import com.ebnite.skejool.dto.Position;
import com.ebnite.skejool.dto.ShiftDTO;
import com.ebnite.skejool.entity.Shift;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@JsonSerialize
@Setter @Getter @NoArgsConstructor @ToString
public class EmployeeWeeklySchedule {
    private Integer empId;
    private String empName;
    private String empEmail;
    private Position empPosition;

    private LocalDate weekStartDate;

    private List<List<ShiftDTO>> weeklySchedule;

    public EmployeeWeeklySchedule(Integer empId, LocalDate weekStartDate) {
        this.empId = empId;
        this.weekStartDate = weekStartDate;

        // Generate empty weekly schedule using weekStartDate
        this.weeklySchedule =  IntStream.range(0,7).mapToObj(i -> weekStartDate.plusDays(i))
                .map(date -> new ShiftDTO(date))
                .map(shift -> new ArrayList<>(Arrays.asList(shift)))
                .collect(Collectors.toList());

//        this.weeklySchedule.forEach(System.out::println);
    }
}
