package com.ebnite.skejool.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@JsonSerialize
@ToString
@AllArgsConstructor
@Getter
@Setter
public class EmployeeDTO {
    private int id;
    private String name;
    private String position;
}
