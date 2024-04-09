interface WeekType {
  day: number;
  weekday: string;
  date: Date;
  dayOfWeek: number;
}

interface DayOfWeekDisplay {
  notAssigned: boolean;
  startTime?: string;
  endTime?: string;
  position?: string;
}

interface Weekly_Employee_Schedule_Display {
  empName: string;
  shifts: DayOfWeekDisplay[];
}

interface Weekly_All_Employees_Schedule {
  weekStartsOn: Date; // To find out which date week starts on in display
  empSchedules: Employee_Schedule[]; // All employees shifts
}
