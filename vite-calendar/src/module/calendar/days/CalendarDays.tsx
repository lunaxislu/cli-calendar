import React, { useMemo } from "react";
import styles from "./days.module.css";
import { CALENDAR_SIZE, DAYS } from "../const/const";
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
const CalendarDays = ({ size }: { size: CalendarSizeType }) => {
  const containerGrid = useMemo(
    () => rowClassName[size === CALENDAR_SIZE.SMALL ? "miniRow" : "bigRow"],
    [size],
  );
  const colGrid = useMemo(
    () => colClassName[size === CALENDAR_SIZE.SMALL ? "miniCol" : "bigCol"],
    [size],
  );
  const cellTxt = useMemo(
    () => (size === CALENDAR_SIZE.SMALL ? cellTxtClassName.miniCell : null),
    [size],
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
