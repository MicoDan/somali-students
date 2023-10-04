import dayjs from "dayjs";
import type { DateString } from "./dateString.js";
import { toDateString } from "./dateString.js";


export const addXpToday = (xpByDate: XpByDate, xp: number): XpByDate => {
  return addXp(xpByDate, xp, dayjs());
};

const addXp = (xpByDate: XpByDate, xp: number, date: dayjs.Dayjs): XpByDate => {
  return {
    ...xpByDate,
    [toDateString(date)]: xpAt(xpByDate, date) + xp,
  };
};

export const xpAt = (xpByDate: XpByDate, date: dayjs.Dayjs): number => {
  return xpByDate[toDateString(date)] ?? 0;
};

type XpByDate = Record<DateString, number>;

export type XpSlice = {
  xpByDate: XpByDate;
  increaseXp: (by: number) => void;
  xpToday: () => number;
  xpThisWeek: () => number;
};