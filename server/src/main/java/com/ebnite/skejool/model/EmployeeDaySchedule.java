package com.ebnite.skejool.model;

import com.ebnite.skejool.dto.Position;
import com.ebnite.skejool.dto.ShiftSlotDTO;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@JsonSerialize
@Setter
@Getter
@NoArgsConstructor
@ToString
public class EmployeeDaySchedule {
    private Integer empId;
    private String empName;
    private String empEmail;
    private String empPosition;
    private LocalDate date;
    private List<ShiftSlotDTO> slots;

    public EmployeeDaySchedule(Integer empId, LocalDate date) {
        this.empId = empId;
        this.date = date;
    }
}
