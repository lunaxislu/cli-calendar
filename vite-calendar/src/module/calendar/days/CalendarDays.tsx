import React, { useMemo } from "react";
import styles from "./days.module.css";
import { CALENDAR_MODE, DAYS } from "../const/const";
import clsx from "clsx";

const rowClassName = {
  miniRow: styles["mini-row-grid"],
  bigRow: styles["big-row-grid"],
};

const colClassName = {
  miniCol: styles["mini-col-grid"],
  bigCol: styles["big-col-grid"],
};

const cellTxtClassName = {
  miniCell: styles["mini-cell-text"],
};
const CalendarDays = ({ mode }: { mode: CalendarModeType }) => {
  const containerGrid = useMemo(
    () => rowClassName[mode === CALENDAR_MODE.MINI_MODE ? "miniRow" : "bigRow"],
    [mode]
  );
  const colGrid = useMemo(
    () => colClassName[mode === CALENDAR_MODE.MINI_MODE ? "miniCol" : "bigCol"],
    [mode]
  );
  const cellTxt = useMemo(
    () => (mode === CALENDAR_MODE.MINI_MODE ? cellTxtClassName.miniCell : null),
    [mode]
  );

  return (
    <div className={containerGrid}>
      {DAYS.map((day, idx) => (
        <span key={day + idx} className={clsx(colGrid, cellTxt)}>
          {day}
        </span>
      ))}
    </div>
  );
};

export default React.memo(CalendarDays);
