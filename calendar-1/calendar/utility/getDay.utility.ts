import dayjs, { Dayjs } from "dayjs";

/**
 * Status Calendar의 month type
 */
const MONTH = {
  CURRENT: "CURRENT",
  NOT_CURRENT: "NOT_CURRENT",
} as const;

export function getMiniCalendarMonthType(month: Dayjs, CurrentDate: Dayjs) {
  if (month.isSame(CurrentDate, "M")) return MONTH["CURRENT"];
  return MONTH["NOT_CURRENT"];
}

const CALENDARTYPE = {
  CURRENT: "CURRENT",
  NOT_CURRENT: "NOT_CURRENT",
} as const;
export function getMiniCalendarType(month: Dayjs, currentDate: Dayjs) {
  if (month.isSame(currentDate, "M")) return CALENDARTYPE["CURRENT"];
  if (!month.isSame(currentDate, "M")) return CALENDARTYPE["NOT_CURRENT"];
}

const DATE = {
  CURRENT: "CURRENT",
  PREV: "PREV",
  AFTER: "AFTER",
} as const;

export function getMiniCalendarDateType(day: Dayjs) {
  const today = dayjs();
  if (day.isSame(today, "D")) return DATE["CURRENT"];
  return day.isBefore(today, "D") ? DATE["PREV"] : DATE["AFTER"];
}

/**
 * dayjs().day()
 * 일요일 -  0
 * ...
 * 토요일 - 6
 */
const DAY = {
  SATURADAY: "SATURADAY",
  SUNDAY: "SUNDAY",
  DAY: "DAY", // 일반 날,
} as const;
export function getMiniCalendarDayType(day: Dayjs) {
  if (day.day() === 6) return DAY["SATURADAY"];
  return day.day() === 0 ? DAY["SUNDAY"] : DAY["DAY"];
}

/**
 * big Calendar일 때
 */

export function getBigCalendarMonthType(month: Dayjs, currentDate: Dayjs) {
  if (month.isSame(currentDate, "M")) return MONTH["CURRENT"];
  return MONTH["NOT_CURRENT"];
}

export function getBigCalendarDateType(date: Dayjs) {
  const today = dayjs();
  if (date.isSame(today, "D")) return DATE["CURRENT"];
  return date.isBefore(today, "D") ? DATE["PREV"] : DATE["AFTER"];
}
