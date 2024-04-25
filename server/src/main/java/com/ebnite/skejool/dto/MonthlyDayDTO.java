package com.ebnite.skejool.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@JsonSerialize
@ToString
@AllArgsConstructor
@Getter
@Setter
public class MonthlyDayDTO {
    private LocalDate date;
    private Integer dayOfWeek;
    private List<MonthlyDayShiftDTO> shifts;

}
