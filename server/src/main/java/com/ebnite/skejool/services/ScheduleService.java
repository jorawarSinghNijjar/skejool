package com.ebnite.skejool.services;

import com.ebnite.skejool.dto.Position;
import com.ebnite.skejool.dto.ShiftDTO;
import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.entity.Shift;
import com.ebnite.skejool.model.EmployeeWeeklySchedule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScheduleService {

    private static final Logger logger = LoggerFactory.getLogger(ScheduleService.class);

    @Autowired
    private EmployeeService employeeService;

    // Get all employees schedule from database

    public List<EmployeeWeeklySchedule> getAllEmployeesWeeklySchedule(LocalDate weekStartDate) {
        List<Employee> employees = employeeService.getAllEmployees();

        List<EmployeeWeeklySchedule> retrievedEmployees = employees.stream().map(emp -> getEmployeeWeeklySchedule(emp.getId(), weekStartDate, emp)).collect(Collectors.toList());

        return retrievedEmployees;
    }

    // Get single employee schedule from database
    public EmployeeWeeklySchedule getEmployeeWeeklySchedule(Integer empId, LocalDate weekStartDate, Employee emp) {

        if (emp == null) {
            emp = employeeService.getEmployee(empId);
        }

        EmployeeWeeklySchedule weeklySchedule = new EmployeeWeeklySchedule(emp.getId(), weekStartDate);

        weeklySchedule.setEmpName(emp.getName());
        weeklySchedule.setEmpEmail(emp.getEmail());
        weeklySchedule.setEmpPosition(new Position("dev", "Developer"));

        // Fetch all shifts assigned to employee from db

        logger.info("Employee retrieved: {}", emp.getSchedule().get(0).getStartTime());
        Shift shift = emp.getSchedule().get(0);



        if (!shift.isRecurring()) {
            // Calculate shift start and end date from database
            if(shift.getShiftWeekStartDate() == null){
                throw new NullPointerException("Shift week start date is null in the database");
            }
            LocalDate shiftStartDate = shift.getShiftWeekStartDate().plusDays(shift.getStartDayOfShift());
            LocalDate shiftEndDate = shiftStartDate.plusDays(shift.getEndDayOfShift() - shift.getStartDayOfShift());

            // Calculate requested week start and end date
            LocalDate requestStartDate = weekStartDate;
            LocalDate requestEndDate = weekStartDate.plusDays(6);

            logger.info("Shift start date: {}", shiftStartDate);
            logger.info("Shift end date: {}", shiftEndDate);
            logger.info("Request start date: {}", requestStartDate);
            logger.info("Request end date: {}", requestEndDate);

            logger.info("shift start date is before requested display start date: {}", shiftStartDate.isBefore(requestStartDate));
            logger.info("shift end date is after requested display end date : {}", shiftEndDate.isAfter(requestEndDate));

            if (shiftStartDate.isBefore(requestStartDate) || shiftEndDate.isAfter(requestEndDate)) {
                logger.info("No shifts in this week");

            } else {
                logger.info("Shift week start date matches");

                logger.info("Date range: ", shiftStartDate, " - " + shiftEndDate);

                List<List<ShiftDTO>> populatedWeeklySchedule = populateWeeklySchedule(weeklySchedule.getWeeklySchedule(), shiftStartDate, shiftEndDate, shift);
                weeklySchedule.setWeeklySchedule(populatedWeeklySchedule);

            }
        } else {
            // Calculate shift start and end date from database

            LocalDate shiftStartDate = weekStartDate.plusDays(shift.getStartDayOfShift());
            long daysToAdd = shift.getEndDayOfShift() - shift.getStartDayOfShift();
            LocalDate shiftEndDate = shiftStartDate.plusDays(daysToAdd);


            if (shiftStartDate.isBefore(shift.getRecurrenceStartDate()) || shiftEndDate.isAfter(shift.getRecurrenceEndDate())) {
                logger.info("No shifts in this week");
            } else {
                logger.info("Shifts found in range..");

                logger.info("Date range, Shift Start Date: {}", shiftStartDate);
                logger.info("Shift End Date : {}", shiftEndDate);

                List<List<ShiftDTO>> populatedWeeklySchedule = populateWeeklySchedule(weeklySchedule.getWeeklySchedule(), shiftStartDate, shiftEndDate, shift);
                weeklySchedule.setWeeklySchedule(populatedWeeklySchedule);
            }
        }

        return weeklySchedule;
    }


    public List<List<ShiftDTO>> populateWeeklySchedule(List<List<ShiftDTO>> weeklySchedule, LocalDate lowerEdgeCase, LocalDate upperEdgeCase, Shift shift) {
        weeklySchedule.stream().forEach(day -> {

            day.stream().forEach(shiftDTO -> {
                System.out.println(shiftDTO);

                if (shiftDTO.getDate().isBefore(lowerEdgeCase) || shiftDTO.getDate().isAfter(upperEdgeCase)) {
                    logger.info("Searching for date matches");
                } else {
                    if (shift.isRecurring()) {

                    }
                    logger.info("Date in range: {}", shiftDTO.getDate());
                    shiftDTO.setStartTime(shift.getStartTime());
                    shiftDTO.setEndTime(shift.getEndTime());
                }

                logger.info("Shift: {}", shiftDTO);
            });

        });

        return weeklySchedule;
    }
}
