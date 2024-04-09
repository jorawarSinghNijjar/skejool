import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { default as calendar } from 'calendar-js';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ScheduleService } from '../../services/schedule-service.service';
import { Monthly_Day, Monthly_Schedule } from '../../types/schedule';

@Component({
  selector: 'app-monthly-view',
  standalone: true,
  imports: [TableModule, ButtonModule, NgFor, NgIf],
  templateUrl: './monthly-view.component.html',
  styleUrl: './monthly-view.component.css',
})
export class MonthlyViewComponent implements OnInit {
  displayWeekHeaders!: string;
  displayMonth!: CalendarItem[][];
  displayMonthName!: string;
  displayMonthYear!: string;
  monthlySchedule!: Monthly_Day[][];

  ngOnInit(): void {
    this.displayCalendar();
  }

  constructor(private scheduleService: ScheduleService) {}

  displayCalendar() {
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // console.log(calendar().of(currentYear, currentMonth));

    const month = calendar().detailed(currentYear, currentMonth);
    // console.log(month);

    this.displayWeekHeaders = month.weekdaysAbbr;
    // console.log(this.displayWeekHeaders);
    this.displayMonth = month.calendar;
    this.displayMonthName = month.month;
    this.displayMonthYear = month.year;

    this.populateSchedule(month);
  }

  populateSchedule(month: Monthly_Schedule) {
    this.scheduleService.getMonthlySchedule(month).subscribe((schedule) => {
      // month.calendar.map((row: CalendarItem[]) => {
      //   console.log(row);
      //   row.map((day) => {
      //     return { ...day, schedule };
      //   });
      // });
      console.log(schedule);
      this.monthlySchedule = schedule;
    });
  }
}
