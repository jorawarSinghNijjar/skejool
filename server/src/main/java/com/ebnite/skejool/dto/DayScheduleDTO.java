package com.ebnite.skejool.dto;

import java.time.LocalDate;
import java.util.List;

public record DayScheduleDTO(
        List<ShiftDTO> shifts
) {
}
