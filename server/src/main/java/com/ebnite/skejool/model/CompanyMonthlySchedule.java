package com.ebnite.skejool.model;

import com.ebnite.skejool.dto.MonthlyDayDTO;
import com.ebnite.skejool.dto.MonthlyDayShiftDTO;
import com.ebnite.skejool.util.MyDateUtil;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@JsonSerialize
@Setter
@Getter
@NoArgsConstructor
@ToString
public class CompanyMonthlySchedule {
    private Integer month;
    private Integer year;
    private String monthName;

    private List<MonthlyDayDTO> days;

    public CompanyMonthlySchedule(Integer month, Integer year) {
        this.month = month;
        this.year = year;

        int daysInMonth = YearMonth.of(year, month).lengthOfMonth();
        this.days = IntStream.rangeClosed(1, daysInMonth).mapToObj(day -> LocalDate.of(year,month,day))
                .map(date -> new MonthlyDayDTO(date, MyDateUtil.getDayOfWeek(date), new ArrayList<>()))
                .collect(Collectors.toList());

        this.days.stream().forEach(System.out::println);
    }
}
