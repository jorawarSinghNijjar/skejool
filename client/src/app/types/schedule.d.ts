import { Monthly_Day_Shift } from "./shift";

interface Weekly_Schedule {
  empName: string;
  shifts: (Weekly_Shift | null)[];
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
  shifts?: Monthly_Day_Shift[]
};

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
