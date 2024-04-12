package com.ebnite.skejool.services;

import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    public EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployee(int empId){
        Employee emp = employeeRepository.findById(empId).get();
        return emp;
    }

    public Employee updateEmployee(int empId, Employee emp) {
        Employee retrievedEmployee = employeeRepository.findById(empId).get();
        if(retrievedEmployee == null){
           throw new NullPointerException("Employee not found");
        }
        emp.setId(empId);
        return employeeRepository.save(emp);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public void deleteEmployee(int empId) {
        employeeRepository.deleteById(empId);
    }
}
