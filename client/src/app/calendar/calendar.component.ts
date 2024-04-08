import { Component, OnInit } from '@angular/core';
import CalendarJs from 'calendar-js';

interface ConfigType {
  months?: string[];
  monthsAbbr?: string[];
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    const calendar: CalendarJsType = CalendarJs({
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthsAbbr: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    });
    console.log(calendar.weekdays());
    console.log(calendar.of(2024,3))
    console.log(calendar)
  }
}
