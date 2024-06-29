import { Monthly_Day_Shift } from './shift';

//Daily
export interface Daily_Slot {
  assigned: boolean;
  startTime?: string;
  endTime?: string;
  duration: number;
  position?: string;
}

export interface Daily_Schedule {
    empId: number;
    empName: string;
    slots: Daily_Slot[];
}


// Weekly 
interface Weekly_Daily_Slot {
  notAssigned?: boolean;
  startTime: string;
  endTime: string;
  position?: string;
}

interface Weekly_Schedule {
  empId?: number;
  empName: string;
  empEmail?: string;
  empPosition?: string;
  weekStartDate?: Date;

  weeklySchedule: (Weekly_Daily_Slot | null)[][];
}


// Monthly
export interface Monthly_Day_Shift {
  startTime: string;
  endTime: string;
  position: string;
  employeeName: string;
}

export interface Monthly_Day {
  date: Date;
  day: number;
  isInPrimaryMonth: boolean;
  isInLastWeekOfPrimaryMonth: boolean;
  index: {
    day: number;
    week: number;
  };
  shifts?: Monthly_Day_Shift_API_Res[];
}

export interface Monthly_Schedule {
  year: string;
  yearAbbr: string;
  month: string;
  monthAbbr: string;
  weekdays: string;
  weekdaysAbbr: string;
  days: number;
  firstWeekday: number;
  lastWeekday: number;
  calendar: Monthly_Day[][];
}

// Server side types

export interface Monthly_Schedule_API_Res {
  month: number;
  year: number;
  monthName: string | null;
  days: Monthly_Day_API_Res[];
}

export interface Monthly_Day_API_Res {
  date: string;
  dayOfWeek: number;
  shifts: Monthly_Day_Shift_API_Res[];
}

export interface Monthly_Day_Shift_API_Res {
  date: string;
  startTime: string;
  endTime: string;
  emp: {
    id: number;
    name: string;
    position: string;
  };
}

