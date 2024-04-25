package com.ebnite.skejool.services;

import com.ebnite.skejool.dto.EmployeeDTO;
import com.ebnite.skejool.dto.MonthlyDayDTO;
import com.ebnite.skejool.dto.MonthlyDayShiftDTO;
import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.entity.Shift;
import com.ebnite.skejool.model.CompanyMonthlySchedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MonthlyScheduleService {
    @Autowired
    private EmployeeService employeeService;

    public CompanyMonthlySchedule getCompanyMonthlySchedule(Integer month, Integer year) {
        CompanyMonthlySchedule companyMonthlySchedule = new CompanyMonthlySchedule(month, year);
        List<Employee> employees = employeeService.getAllEmployees();

        List<MonthlyDayDTO> days = companyMonthlySchedule.getDays();

        // Looking into each employees schedule
        employees.stream().forEach(emp -> {
            // TODO: Implement employee having multiple shifts

            Shift shift = emp.getSchedule().get(0);
            if (shift.isRecurring()) {
                LocalDate recurrenceStartDate = shift.getRecurrenceStartDate();
                LocalDate recurrenceEndDate = shift.getRecurrenceEndDate();

                int recurrenceStartMonth = recurrenceStartDate.getMonthValue();
                int recurrenceStartYear = recurrenceStartDate.getYear();
                int recurrenceEndMonth = recurrenceEndDate.getMonthValue();
                int recurrenceEndYear = recurrenceEndDate.getYear();

                if (
                        year >= recurrenceStartYear && year <= recurrenceEndYear
                ) {
                    // Within recurrence year

                    if (
                            month > recurrenceStartMonth && month < recurrenceEndMonth
                    ) {
                        // complete month is within range
                        int weeklyStartDay = shift.getStartDayOfShift();
                        int weeklyEndDay = shift.getEndDayOfShift();

                        days.stream().forEach(day -> {
                            if (
                                    day.getDayOfWeek() >= weeklyStartDay && day.getDayOfWeek() <= weeklyEndDay
                            ) {

                                day.getShifts().add(
                                        new MonthlyDayShiftDTO(
                                                day.getDate(),
                                                shift.getStartTime(),
                                                shift.getEndTime(),
                                                new EmployeeDTO(emp.getId(), emp.getName(), emp.getPosition())
                                        )
                                );
                            }
                        });

                    } else if(month == recurrenceEndMonth){

                        // partial month is within recurrenceStartMonth
                        days.stream().forEach(day -> {
                            if(
                                    day.getDate().isAfter(recurrenceStartDate)
                                    || day.getDate().equals(recurrenceStartDate)
                            ){
                                day.getShifts().add(
                                        new MonthlyDayShiftDTO(
                                                day.getDate(),
                                                shift.getStartTime(),
                                                shift.getEndTime(),
                                                new EmployeeDTO(emp.getId(), emp.getName(), emp.getPosition())
                                        )
                                );
                            }
                        });
                    }
                    else if(month == recurrenceEndMonth){
                        // partial month is within recurrenceEndMonth
                        days.stream().forEach(day -> {
                            if(
                                    day.getDate().isBefore(recurrenceEndDate)
                                            || day.getDate().equals(recurrenceEndDate)
                            ){
                                day.getShifts().add(
                                        new MonthlyDayShiftDTO(
                                                day.getDate(),
                                                shift.getStartTime(),
                                                shift.getEndTime(),
                                                new EmployeeDTO(emp.getId(), emp.getName(), emp.getPosition())
                                        )
                                );
                            }
                        });
                    }
                    else {
                        // month is not within recurrence year
                    }
                } else {
                    // Outside recurrence year
                }
            }

            else {
                LocalDate shiftStartDate = shift.getShiftWeekStartDate().plusDays(shift.getStartDayOfShift());
                LocalDate shiftEndDate = shiftStartDate.plusDays(shift.getEndDayOfShift() - shift.getStartDayOfShift());

                days.stream().forEach(day -> {
                    if(
                            (day.getDate().isAfter(shiftStartDate)
                            && day.getDate().isBefore(shiftEndDate))
                            || day.getDate().equals(shiftStartDate)
                            || day.getDate().equals(shiftEndDate)
                    ){
                        day.getShifts().add(
                                new MonthlyDayShiftDTO(
                                        day.getDate(),
                                        shift.getStartTime(),
                                        shift.getEndTime(),
                                        new EmployeeDTO(emp.getId(), emp.getName(), emp.getPosition())
                                )
                        );
                    }
                });
            }
        });

        companyMonthlySchedule.setDays(days);
        return companyMonthlySchedule;
    }
}
