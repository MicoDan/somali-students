import dayjs from "dayjs";
import { DateString, toDateString } from "./dateString";


type ActiveDays = Set<DateString>;

export const addActiveDay = (activeDays: ActiveDays, day: dayjs.Dayjs): ActiveDays => {
  return new Set([...activeDays, toDateString(day)]);
};

const isActiveDay = (activeDays: ActiveDays, day: dayjs.Dayjs): boolean => {
  return activeDays.has(toDateString(day));
};

//loops back on the days to each day -1 , if it meets with skipped date or end it stops.

export const getCurrentStreak = (activeDays: ActiveDays): number => {
  let daysBack = 0;
  let day = dayjs();
  while (isActiveDay(activeDays, day)) {
    day = day.add(-1, "day"); //day.add(amount, unit of time)
    daysBack += 1;
  }
  return daysBack;
};

export type StreakSlice = {
  activeDays: ActiveDays;
  streak: number;
  isActiveDay: (day: dayjs.Dayjs) => boolean;
  addToday: () => void;
};