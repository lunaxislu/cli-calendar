import clsx from "clsx";
import styles from "./calendar.module.css";
import { CALENDAR_MODE } from "./const/const";
import { ComponentPropsWithoutRef, useMemo } from "react";
import HeaderGrid from "./headerController/HeaderGrid";
import CalendarDays from "./days/CalendarDays";
import CalendarBody from "./body/CalendarBody";

interface CalendarProps extends ComponentPropsWithoutRef<"div"> {
  mode?: CalendarModeType;
  page?: CalendarPageType; // If you want to put a condition on each page
}
const Calendar = ({ mode = "MINI_MODE", page, ...props }: CalendarProps) => {
  const calendarGrid = useMemo(
    () =>
      clsx({
        [styles["mini-calendar-grid"]]: mode === CALENDAR_MODE.MINI_MODE,
        [styles["big-calendar-grid"]]: mode === CALENDAR_MODE.BIG_MODE,
      }),
    []
  );

  const calendarInnerGrid = useMemo(
    () =>
      clsx({
        [styles["mini-mode-header-grid"]]: mode === CALENDAR_MODE.MINI_MODE,
        [styles["big-mode-grid"]]: mode === CALENDAR_MODE.BIG_MODE,
      }),
    []
  );

  return (
    <div className={calendarGrid}>
      <div className={calendarInnerGrid}>
        <HeaderGrid mode={mode} />
        <CalendarDays mode={mode} />
        <CalendarBody mode={mode} />
        {/* {props.children}  lf you want.*/}
      </div>
    </div>
  );
};

export default Calendar;
