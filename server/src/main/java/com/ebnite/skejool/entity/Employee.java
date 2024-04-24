package com.ebnite.skejool.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;

import java.util.List;

@Entity
@Table(name = "employees")
@Getter @Setter @NoArgsConstructor @ToString
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String position;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "employees_shifts",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "shift_id")
    )
    private List<Shift> schedule;

    public Employee(String name, String email, String position, List<Shift> schedule) {
        this.name = name;
        this.email = email;
        this.position = position;
        this.schedule = schedule;
    }

    public Employee(String harman, String s, String mechanic) {
        this.name = harman;
        this.email = s;
        this.position = mechanic;
    }
}
