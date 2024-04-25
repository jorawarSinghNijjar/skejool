package com.ebnite.skejool.util;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class MyDateUtil {
    private static Map<DayOfWeek, Integer> customDayOfWeekMap = new HashMap<>(7);

    static {
        customDayOfWeekMap.put(DayOfWeek.SUNDAY, 0);
        customDayOfWeekMap.put(DayOfWeek.MONDAY, 1);
        customDayOfWeekMap.put(DayOfWeek.TUESDAY, 2);
        customDayOfWeekMap.put(DayOfWeek.WEDNESDAY, 3);
        customDayOfWeekMap.put(DayOfWeek.THURSDAY, 4);
        customDayOfWeekMap.put(DayOfWeek.FRIDAY, 5);
        customDayOfWeekMap.put(DayOfWeek.SATURDAY, 6);
    }

    public static LocalDate getWeekStartDate(LocalDate currentDate){
        while(currentDate.getDayOfWeek()!= DayOfWeek.SUNDAY){
            currentDate = currentDate.minusDays(1);
        }
        return currentDate;
    }

    public static Integer getDayOfWeek(LocalDate date){
        return customDayOfWeekMap.get(date.getDayOfWeek());
    }
}
