package com.ebnite.skejool.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "shifts")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Shift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToMany(mappedBy = "schedule", cascade = CascadeType.ALL)
    private List<Employee> employees;

    private LocalDate shiftWeekStartDate;
    private DayOfWeek startDayOfShift;
    private DayOfWeek endDayOfShift;
    private LocalTime startTime;
    private LocalTime endTime;
    private boolean recurring;
    private LocalDate recurrenceStartDate;
    private LocalDate recurrenceEndDate;

    public Shift(LocalDate shiftWeekStartDate, DayOfWeek startDayOfShift, DayOfWeek endDayOfShift, LocalTime startTime, LocalTime endTime, boolean recurring) {
        this.shiftWeekStartDate = shiftWeekStartDate;
        this.startDayOfShift = startDayOfShift;
        this.endDayOfShift = endDayOfShift;
        this.startTime = startTime;
        this.endTime = endTime;
        this.recurring = recurring;
    }

    public Shift(LocalDate shiftWeekStartDate, DayOfWeek startDayOfShift, DayOfWeek endDayOfShift, LocalTime startTime, LocalTime endTime, boolean recurring, LocalDate recurrenceStartDate, LocalDate recurrenceEndDate) {
        this(shiftWeekStartDate, startDayOfShift, endDayOfShift, startTime, endTime, recurring);
        if (recurring) {
            this.recurrenceStartDate = recurrenceStartDate;
            this.recurrenceEndDate = recurrenceEndDate;
        }
    }
}