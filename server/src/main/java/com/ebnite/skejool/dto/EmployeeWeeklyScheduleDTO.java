package com.ebnite.skejool.dto;

import java.util.List;

public record EmployeeWeeklyScheduleDTO(
        Integer empId,
        String empName,
        String empEmail,
        Position empPosition,
        List<DayScheduleDTO> weeklySchedule
) {
}
