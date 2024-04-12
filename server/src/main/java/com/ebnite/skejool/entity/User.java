package com.ebnite.skejool.entity;

import jakarta.persistence.*;
import lombok.*;

//@Entity
@Getter @Setter @NoArgsConstructor @ToString @AllArgsConstructor
public class User {
    @Id
    private int id;
    private String email;
    private String password;
}