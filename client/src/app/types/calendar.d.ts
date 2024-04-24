import 'calendar-js';

declare module 'calendar-js' {
  interface CalendarJsType {
    (config?: ConfigType): CalendarJsType;

    of(
      year: number,
      month: number,
      transformer?: (item: CalendarItem, callback: any) => CalendarItem
    ): CalendarType;

    detailed(
      year: number,
      month: number,
      dayTransformer?: (item: CalendarItem, callback: any) => CalendarItem
    ): CalendarType;
  }

  interface CalendarType {
    year: string;
    yearAbbr: string;
    month: string;
    monthAbbr: string;
    weekdays: string;
    weekdaysAbbr: string;
    days: number;
    firstWeekday: number;
    lastWeekday: number;
    calendar: CalendarItem[][];
  }
}

export interface CalendarType {
  year: string;
  yearAbbr: string;
  month: string;
  monthAbbr: string;
  weekdays: string;
  weekdaysAbbr: string;
  days: number;
  firstWeekday: number;
  lastWeekday: number;
  calendar: CalendarItem[][];
}





