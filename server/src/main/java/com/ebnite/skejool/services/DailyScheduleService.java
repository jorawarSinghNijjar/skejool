package com.ebnite.skejool.services;

import com.ebnite.skejool.dto.ShiftDTO;
import com.ebnite.skejool.dto.ShiftSlotDTO;
import com.ebnite.skejool.entity.Employee;
import com.ebnite.skejool.entity.Shift;
import com.ebnite.skejool.model.EmployeeDaySchedule;
import com.ebnite.skejool.util.MyDateUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class DailyScheduleService {

    private static final Logger logger = LoggerFactory.getLogger(ScheduleService.class);

    @Autowired
    private EmployeeService employeeService;

    // Get single employee schedule from database
    public EmployeeDaySchedule getEmployeeDaySchedule(Integer empId, LocalDate date) {
        Employee emp = employeeService.getEmployee(empId);

        EmployeeDaySchedule employeeDaySchedule = new EmployeeDaySchedule(emp.getId(), date);
        employeeDaySchedule.setEmpName(emp.getName());
        employeeDaySchedule.setEmpEmail(emp.getEmail());
        employeeDaySchedule.setEmpPosition(emp.getPosition());

        // fetch all shifts for employee in relation to the date

        Shift shift = emp.getSchedule().get(0);

        // TODO: Implement logic if employee has been assigned multiple shifts

        if (!shift.isRecurring()) {
            // Calculate shift start and end date from database
            if (shift.getShiftWeekStartDate() == null) {
                throw new NullPointerException("Shift week start date is null in the database");
            }
            LocalDate shiftStartDate = shift.getShiftWeekStartDate().plusDays(shift.getStartDayOfShift());
            LocalDate shiftEndDate = shiftStartDate.plusDays(shift.getEndDayOfShift() - shift.getStartDayOfShift());


            logger.info("Shift start date: {}", shiftStartDate);
            logger.info("Shift end date: {}", shiftEndDate);
            logger.info("Requested Date: {}", date);

            logger.info("shift start date is before requested display date: {}", shiftStartDate.isBefore(date));
            logger.info("shift end date is after requested display date : {}", shiftEndDate.isAfter(date));

            if (
                    (date.isAfter(shiftStartDate) && date.isBefore(shiftEndDate))
                            || date.isEqual(shiftStartDate)
                            || date.isEqual(shiftEndDate)
            ) {

                logger.info("Found shift for date: {}", date);

//                List<LocalTime> hoursList = IntStream.range(0, 24).mapToObj(hour -> LocalTime.of(hour, 0))
//                        .collect(Collectors.toList());
                List<ShiftSlotDTO> populatedSlots = generateShiftSlots(shift,emp);

                employeeDaySchedule.setSlots(populatedSlots);

            } else {
                logger.info("No shift on requested date for employee");
                employeeDaySchedule.setSlots(null);
            }
        }
        else{
            if(
                    (date.isAfter(shift.getRecurrenceStartDate())
                            && date.isBefore(shift.getRecurrenceEndDate()))
                    || date.isEqual(shift.getRecurrenceStartDate())
                    || date.isEqual(shift.getRecurrenceEndDate())
            ){
                LocalDate weekStartDate = MyDateUtil.getWeekStartDate(date);
                LocalDate shiftStartDate = weekStartDate.plusDays(shift.getStartDayOfShift());
                LocalDate shiftEndDate = shiftStartDate.plusDays(shift.getEndDayOfShift() - shift.getStartDayOfShift());

                if(
                        (date.isAfter(shiftStartDate) && date.isBefore(shiftEndDate))
                                || date.isEqual(shiftStartDate)
                                || date.isEqual(shiftEndDate)
                )
                {
                    List<ShiftSlotDTO> populatedSlots = generateShiftSlots(shift,emp);
                    employeeDaySchedule.setSlots(populatedSlots);
                }
                else{
                    logger.info("No shift on requested date: {} for employee", date);
                }

            }
            else{
                logger.info("No shift on requested date:{} for employee", date);
            }
        }


        return employeeDaySchedule;
    }

    public List<ShiftSlotDTO> generateShiftSlots(Shift shift, Employee emp){
        List<ShiftSlotDTO> slotDTOList = new ArrayList<>();

        ShiftSlotDTO slot1 = new ShiftSlotDTO(
                false,
                Duration.between(LocalTime.of(0,0),shift.getStartTime()).toHoursPart()
        );

        ShiftSlotDTO slot2 = new ShiftSlotDTO(
                shift.getStartTime(),
                shift.getEndTime(),
                true,
                Duration.between(shift.getStartTime(), shift.getEndTime()).toHoursPart(),
                emp.getPosition()
        );

        ShiftSlotDTO slot3 = new ShiftSlotDTO(
                false,
                Duration.between(shift.getEndTime(), LocalTime.of(23,0)).toHoursPart()
        );

        slotDTOList.add(slot1);
        slotDTOList.add(slot2);
        slotDTOList.add(slot3);

        return slotDTOList;
    }

}
