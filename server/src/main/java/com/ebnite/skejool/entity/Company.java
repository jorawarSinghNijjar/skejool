package com.ebnite.skejool.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "companies")
@Getter @Setter @NoArgsConstructor @ToString
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private int id;
    private String name;
    private String email;

    public Company(String name, String email) {
        this.name = name;
        this.email = email;
    }
}
