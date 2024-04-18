import { CalendarType } from "../types/calendar";

export interface Calendar_State {
  monthCalendar: CalendarType;
  currentMonth: number;
  currentYear: number;
  weekCalendar: Weekly_Day[];
  currentWeekIndex: number;
}
