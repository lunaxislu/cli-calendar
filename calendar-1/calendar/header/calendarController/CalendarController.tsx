import clsx from "clsx";
import React from "react";
import { BIG_MODE, MINI_MODE } from "../../conditionalType/conditionalType";
import styles from "./calendarController.module.css";
import { useCalendar } from "../../../hook/useCalendar";
import { CalendarModeType } from "../../../../index.d";
import CalendarArrowLeft from "../../icons/CalendarArrowLeft";
import CalendarArrowRight from "../../icons/CalendarArrowRight";

const HeaderController = ({ mode }: { mode: CalendarModeType }) => {
  const { clickPreMonthHandler, clickNextMonthHandler } = useCalendar();
  return (
    <div className={clsx(mode === BIG_MODE && styles["big-calendar-group"])}>
      <button
        type="button"
        className={clsx(styles["calendar-base-btn"], {
          [styles["mini-btn-left"]]: mode === MINI_MODE,
          [styles["big-calendar-btn"]]: mode === BIG_MODE,
        })}
        onClick={clickPreMonthHandler}
      >
        <CalendarArrowLeft />
      </button>

      <button
        type="button"
        className={clsx(styles["calendar-base-btn"], {
          [styles["mini-btn-right"]]: mode === MINI_MODE,
          [styles["big-calendar-btn"]]: mode === BIG_MODE,
        })}
        onClick={clickNextMonthHandler}
      >
        <CalendarArrowRight />
      </button>
    </div>
  );
};

export default React.memo(HeaderController);
