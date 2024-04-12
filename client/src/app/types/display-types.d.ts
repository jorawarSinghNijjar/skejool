// export interface Display_Date {
//     year: number;
//     month: string;
//     day: number;
// }

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
