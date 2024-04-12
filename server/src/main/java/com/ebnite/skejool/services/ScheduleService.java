package com.ebnite.skejool.services;

import com.ebnite.skejool.dto.EmployeeWeeklyScheduleDTO;
import com.ebnite.skejool.dto.Position;
import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.model.EmployeeWeeklySchedule;
import com.ebnite.skejool.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ScheduleService {
    @Autowired
    private EmployeeService employeeService;

    public EmployeeWeeklySchedule getEmployeeWeeklySchedule(Integer empId, LocalDate weekStartDate){
        Employee emp = employeeService.getEmployee(empId);
        EmployeeWeeklySchedule weeklySchedule = new EmployeeWeeklySchedule();

        weeklySchedule.setWeekStartDate(weekStartDate);
        weeklySchedule.setEmpId(emp.getId());
        weeklySchedule.setEmpName(emp.getName());
        weeklySchedule.setEmpEmail(emp.getEmail());
        weeklySchedule.setEmpPosition(new Position("dev", "Developer"));

        // Fetch all shifts assigned to employee from db



        return weeklySchedule;
    }
}
