import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Monthly_Day,
  Monthly_Schedule,
  Weekly_Schedule,
} from '../types/schedule';
import { Monthly_Day_Shift, Weekly_Shift } from '../types/shift';
import { Daily_Schedule, Daily_Slot } from '../types/display-types';

// const emp: Employee = {
//   empId: 1,
//   name: 'test',
//   email: 'test@test.com',
//   position: 'developer',
// };

// const emp2: Employee = {
//   empId: 2,
//   name: 'test 2',
//   email: 'test2@test.com',
//   position: 'marketing agent',
// };

// Assuming employee has shift scheduled for only this week
// const shift1: Shift = {
//   shiftId: 1,
//   shiftWeekStartDate: new Date('4-8-2024'),
//   startDay: 1,
//   endDay: 4,
//   startTime: '08:00',
//   endTime: '17:00',
//   recurring: false,
//   reccurrenceStartDate: new Date('4-8-2024'),
//   reccurrenceEndDate: new Date('4-8-2024'),
// };

// const shift2: Shift = {
//   shiftId: 2,
//   shiftWeekStartDate: new Date('4-8-2024'),
//   startDay: 1,
//   endDay: 6,
//   startTime: '11:00',
//   endTime: '17:00',
//   recurring: false,
//   reccurrenceStartDate: new Date('4-8-2024'),
//   reccurrenceEndDate: new Date('4-8-2024'),
// };

// const employee_sch: Employee_Schedule = {
//   empScheduleId: 1,
//   employee: emp,
//   shifts: [shift1],
// };

// const employee_sch2: Employee_Schedule = {
//   empScheduleId: 2,
//   employee: emp2,
//   shifts: [shift2],
// };

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  // getAllEmployeesSchedule(): Observable<Employee_Schedule[]> {
  //   return of([employee_sch]);
  // }

  // isBetweenDates(inputDate: Date, startDate: Date, endDate: Date): boolean {
  //   return moment(inputDate).isBetween(startDate, endDate, undefined, '[]');
  // }

  // getAllEmployeesScheduleByWeek(displayWeek: WeekType[]): Observable<any> {
  // const emp1Schedule: Weekly_Employee_Schedule_Display = {
  //   empName: employee_sch.employee.name,
  //   shifts: [],
  // };

  // const weeklyAllEmployeesSchedule: Weekly_All_Employees_Schedule = {
  //   weekStartsOn: new Date('4-14-2024'),
  //   empSchedules: [employee_sch, employee_sch2],
  // }

  // // Data comes like this from API for display week only:
  // const empSchedules = [employee_sch, employee_sch2];
  // console.log(empSchedules)
  // // console.log(employee_sch)

  // let { shiftWeekStartDate } = employee_sch.shifts[0];
  // let weekStartDate = displayWeek[0].date;
  // let weekEndDate = displayWeek[6].date;

  // if (this.isBetweenDates(shiftWeekStartDate, weekStartDate, weekEndDate)) {
  //   // console.log(displayWeek)
  //   displayWeek.forEach((day) => {
  //     // console.log(day);
  //     let daySchedule;
  //     employee_sch.shifts.forEach((shift) => {
  //       // console.log(shift.startDay);
  //       // console.log(day.dayOfWeek);

  //       if (shift.recurring) {
  //         daySchedule = {
  //           notAssigned: true,
  //         };
  //       } else {
  //         if (
  //           day.dayOfWeek >= shift.startDay &&
  //           day.dayOfWeek <= shift.endDay
  //         ) {
  //           daySchedule = {
  //             notAssigned: false,
  //             startTime: shift.startTime,
  //             endTime: shift.endTime,
  //             position: employee_sch.employee.name,
  //           };
  //         } else {
  //           daySchedule = {
  //             notAssigned: true,
  //           };
  //         }
  //       }
  //       emp1Schedule.shifts.push(daySchedule);
  //     });
  //   });
  // } else {
  //   displayWeek.forEach((day) => {
  //     emp1Schedule.shifts.push({
  //       notAssigned: true,
  //     });
  //   });
  // }

  // return of([emp1Schedule]);
  // }

  getDailyScheduleOfEmployee(
    date: Date,
    employee: Employee
  ): Observable<Daily_Schedule> {
    // Fake data prep
    let slot1: Daily_Slot = {
      assigned: false,
      duration: 7,
    };

    let slot2: Daily_Slot = {
      assigned: true,
      startTime: '8:00',
      endTime: '16:00',
      duration: 8,
      position: 'fabricator',
    };

    let slot3: Daily_Slot = {
      assigned: false,
      duration: 9,
    };

    const emp1DailySchedule: Daily_Schedule = {
      empId: 1,
      empName: 'Test',
      slots: [slot1, slot2, slot3],
    };

    return of(emp1DailySchedule);
  }

  getDailyScheduleOfAllEmployees(date: Date): Observable<Daily_Schedule[]> {
    // Fake data prep
    let slot1: Daily_Slot = {
      assigned: false,
      duration: 7,
    };

    let slot2: Daily_Slot = {
      assigned: true,
      startTime: '8:00',
      endTime: '16:00',
      duration: 8,
      position: 'fabricator',
    };

    let slot3: Daily_Slot = {
      assigned: false,
      duration: 9,
    };

    const emp1DailySchedule: Daily_Schedule = {
      empId: 1,
      empName: 'Test',
      slots: [slot1, slot2, slot3],
    };

    const emp2DailySchedule: Daily_Schedule = {
      empId: 2,
      empName: 'Harman',
      slots: [
        {
          assigned: false,
          duration: 16,
        },
        {
          assigned: true,
          startTime: '16:00',
          endTime: '24:00',
          duration: 8,
          position: 'mechanic',
        },
      ],
    };

    return of([emp1DailySchedule, emp2DailySchedule]);
  }

  getEmployeeWeeklySchedule(
    weekStartDate: Date,
    employee: Employee
  ): Weekly_Schedule {
    // Fake data prep
    const daySchedule: Weekly_Shift = {
      notAssigned: false,
      startTime: '8:00',
      endTime: '17:00',
      position: 'developer',
    };
    // Assuming data comes from backend like this:
    const schedule: Weekly_Schedule = {
      empName: employee.name,
      shifts: [],
    };

    for (let i = 0; i < 7; i++) {
      if (i < 5) {
        schedule.shifts.push(daySchedule);
      } else {
        schedule.shifts.push(null);
      }
    }

    return schedule;
  }

  getAllEmployeesWeeklySchedule(
    weekStartDate: Date
  ): Observable<Weekly_Schedule[]> {
    // Fake data prep
    const emp1: Employee = {
      empId: 1,
      name: 'test',
      email: 'test@test.com',
      position: 'developer',
    };
    const emp2 = { ...emp1, empId: 2, name: 'test2' };
    const emp1Schedule = this.getEmployeeWeeklySchedule(weekStartDate, emp1);
    const emp2Schedule = this.getEmployeeWeeklySchedule(weekStartDate, emp2);

    // Assuming data comes from backend like this:
    const allEmployeeSchedule: Weekly_Schedule[] = [emp1Schedule, emp2Schedule];

    return of(allEmployeeSchedule);
  }

  getMonthlySchedule(month: Monthly_Schedule): Observable<Monthly_Day[][]> {
    // Fake data prep for monthly report
    let emp1Schedule: Monthly_Day_Shift = {
      startTime: '8:00',
      endTime: '17:00',
      position: 'developer',
      employeeName: 'John Doe',
    };

    let emp2Schedule: Monthly_Day_Shift = {
      startTime: '6:00',
      endTime: '18:00',
      position: 'mechanic',
      employeeName: 'Tripathi',
    };

    let schedule = month.calendar.map((week) => {
      return week.map((day) => {
        return {
          ...day,
          shifts: [emp1Schedule, emp2Schedule],
        };
      });
    });
    console.log(schedule);
    return of(schedule);
  }
}
