import clsx from "clsx";
import styles from "./headerController.module.css";
import { CALENDAR_MODE } from "../const/const";
import { ArrowLeft, ArrowRight } from "../svg/CalendarSvgr";
import React, { useMemo } from "react";
const HeaderController = ({ mode }: { mode: CalendarModeType }) => {
  const conditionalModeClasses = useMemo(
    () => clsx(mode === CALENDAR_MODE.BIG_MODE && styles["big-grid"]),
    [mode]
  );

  const conditionalLeftButtonClasses = useMemo(
    () =>
      clsx(styles["calendar-base-btn"], {
        [styles["mini-btn-left"]]: mode === CALENDAR_MODE.MINI_MODE,
        [styles["big-calendar-btn"]]: mode === CALENDAR_MODE.BIG_MODE,
      }),
    [mode]
  );
  const conditionalRightButtonClasses = useMemo(
    () =>
      clsx(styles["calendar-base-btn"], {
        [styles["mini-btn-right"]]: mode === CALENDAR_MODE.MINI_MODE,
        [styles["big-calendar-btn"]]: mode === CALENDAR_MODE.BIG_MODE,
      }),
    [mode]
  );
  return (
    <div className={conditionalModeClasses}>
      <button type="button" className={conditionalLeftButtonClasses}>
        <ArrowLeft />
      </button>

      <button type="button" className={conditionalRightButtonClasses}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default React.memo(HeaderController);
