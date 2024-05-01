package com.ebnite.skejool.payload.response;

import lombok.Data;

@Data
public class JwtResponse {
    private String accessToken;
    private String type = "Bearer";
    private Integer id;
    private String email;
//    private List<String> roles;
}
