package com.ebnite.skejool.model;

import com.ebnite.skejool.dto.Position;
import com.ebnite.skejool.dto.ShiftDTO;
import com.ebnite.skejool.entity.Shift;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Setter @Getter @NoArgsConstructor
public class EmployeeWeeklySchedule {
    private Integer empId;
    private String empName;
    private String empEmail;
    private Position empPosition;

    private LocalDate weekStartDate;

    private ShiftDTO[][] weeklySchedule = new ShiftDTO[7][];
}
