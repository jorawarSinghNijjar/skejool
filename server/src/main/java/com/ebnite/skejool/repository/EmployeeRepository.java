package com.ebnite.skejool.repository;

import com.ebnite.skejool.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}