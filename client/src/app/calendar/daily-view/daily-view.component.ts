import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { generate24HourArray } from '../../util/calendar.util';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-daily-view',
  standalone: true,
  imports: [TableModule, NgFor, NgIf],
  templateUrl: './daily-view.component.html',
  styleUrl: './daily-view.component.css',
})
export class DailyViewComponent implements OnInit {
  displayHours!: string[];

  empSchedule = [
    {
      empId: 1,
      empName: 'Test',
      slots: [
        {
          assigned: false,
          duration: 7,
        },
        {
          assigned: true,
          startTime: '8:00',
          endTime: '16:00',
          duration: 8,
          position: 'fabricator',
        },
        {
          assigned: false,
          duration: 9,
        },
      ],
    },
    {
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
    },
  ];
  ngOnInit(): void {
    this.displayHours = generate24HourArray();
  }
}
