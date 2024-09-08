import clsx from "clsx";
import dayjs from "dayjs";
import styles from "./headerGrid.module.css";
import { CALENDAR_MODE, MONTH_FORMAT, YEAR_FORMAT } from "../const/const";
import HeaderController from "./HeaderController";
import React, { useMemo } from "react";
const HeaderGrid = ({ mode }: { mode: CalendarModeType }) => {
  const currentData = dayjs();

  const gridClasses = useMemo(
    () =>
      clsx(styles["base-grid"], {
        [styles["mini-grid"]]: mode === CALENDAR_MODE.MINI_MODE,
        [styles["big-grig"]]: mode === CALENDAR_MODE.BIG_MODE,
      }),
    [mode]
  );

  const txtClasses = useMemo(
    () =>
      clsx({
        [styles["mini-txt"]]: mode === CALENDAR_MODE.MINI_MODE,
        [styles["big-txt"]]: mode === CALENDAR_MODE.BIG_MODE,
      }),
    [mode]
  );
  return (
    <div className={gridClasses}>
      <p className={styles["base-ph"]}>
        <span className={txtClasses}>{currentData.format(YEAR_FORMAT)}</span>
        {currentData.format(MONTH_FORMAT)}
      </p>
      <HeaderController mode={mode} />
    </div>
  );
};

export default React.memo(HeaderGrid);
