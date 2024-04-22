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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShiftSlotDTO {
    private LocalTime startTime;
    private LocalTime endTime;
    private boolean assigned;
    private Integer duration;
    private String position;
}
