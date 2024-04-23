package com.ebnite.skejool.dto;
//assigned: boolean;
//        startTime?: string;
//        endTime?: string;
//        duration: number;
//        position?: string;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import java.time.LocalTime;


@JsonSerialize
@ToString
@NoArgsConstructor
@Getter
@Setter
public class ShiftSlotDTO {
    private LocalTime startTime;
    private LocalTime endTime;
    private boolean assigned;
    private Integer duration;
    private String position;

    public ShiftSlotDTO(LocalTime startTime, LocalTime endTime, boolean assigned, Integer duration, String position) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.assigned = assigned;
        this.duration = duration;
        this.position = position;
    }

    public ShiftSlotDTO(boolean assigned, Integer duration) {
        this.assigned = assigned;
        this.duration = duration;
    }
}
