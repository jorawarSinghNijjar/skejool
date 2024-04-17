// interface Shift {
//     shiftId: number;
//     shiftWeekStartDate: Date;
//     startDay: number;
//     endDay: number;
//     startTime: string;
//     endTime: string;
//     recurring: boolean;
//     reccurrenceStartDate: Date;
//     reccurrenceEndDate: Date;
// }

import { Weekly_Daily_Slot } from "./schedule";


// interface Weekly_Shift {
//     slots: Weekly_Daily_Slot[];
// }

export interface Monthly_Day_Shift {
    startTime: string;
    endTime: string;
    position: string;
    employeeName: string;
}