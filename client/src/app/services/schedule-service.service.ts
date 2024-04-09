import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import moment from 'moment';

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
      if(i < 5){
        schedule.shifts.push(daySchedule);
      }
      else {
        schedule.shifts.push(null);
      }
      
    }

    return schedule;
  }

  getAllEmployeesWeeklySchedule(weekStartDate: Date): Observable<Weekly_Schedule[]> {
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
}
