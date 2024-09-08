import clsx from "clsx";
import { BIG_MODE, MINI_MODE } from "../conditionalType/conditionalType";
import styles from "./cellItem.module.css";

import useCalendarState from "../../store/calendarStore";
import { cva } from "class-variance-authority";
import useDayState from "../../store/dayStore";
import {
  getBigCalendarDateType,
  getBigCalendarMonthType,
  getMiniCalendarType,
  getMiniCalendarDateType,
  getMiniCalendarDayType,
  getMiniCalendarMonthType,
} from "../utility/getDay.utility";
import { CellItemProps } from "../../../index.d";

type Cell = (param: CellItemProps) => JSX.Element;

const CellItem: Cell = ({ day, selectDayHandler, mode, page }) => {
  const SELECTED_DAY = "SELECTEDTYPE";
  const currentDate = useCalendarState((staet) => staet.currentDate);
  const { selectedDate, today } = useDayState();

  const statusVariant = cva([styles["mini-calendar-base"]], {
    variants: {
      calendarType: {
        CURRENT: styles["current-calendar"],
        NOT_CURRENT: styles["not-current-calendar"],
      },
      monthType: {
        CURRENT: styles["mini-current-month"],
        NOT_CURRENT: styles["status-not-current"],
      },
      dateType: {
        PREV: styles["mini-prev-date"],
        CURRENT: styles["mini-current-date"],
        AFTER: styles["mini-after-date"],
      },
    },
  });
  const statusDayVariant = cva([styles["mini-day-base"]], {
    variants: {
      dayType: {
        SATURADAY: styles["mini-calendar-saturaday"],
        SUNDAY: styles["mini-calendar-sunday"],
        DAY: styles["mini-calendar-day"],
      },
      seletedDayType: {
        SELECTEDTYPE: styles["mini-calendar-selected-date"],
      },
    },
  });

  const calendarVariant = cva([styles["big-calendar-base"]], {
    variants: {
      calendarType: {
        CURRENT: styles["big-calendar-current"],
      },
      monthType: {
        CURRENT: styles["big-calendar-current-month"],
        NOT_CURRENT: styles["big-calendar-not-current-month"],
      },
      dateType: {
        PREV: styles["mini-prev-date"],
        CURRENT: styles["big-calendar-current-date"],
        AFTER: styles["mini-after-date"],
      },
    },
  });

  const formatDate = day.format("YY MM D").substring(6);
  return (
    <>
      {/* mini mode일 때 보여줄 날 css */}
      {mode === MINI_MODE && (
        <div
          className={statusVariant({
            calendarType: getMiniCalendarType(day, currentDate),
            monthType: getMiniCalendarMonthType(currentDate, day),
            dateType: getMiniCalendarDateType(day),
          })}
          /** 페이지가 주문내역 확인이면 아래와 같이 하면 됩니다.
           * @example
           *{...((page===My_page && {onClick: clickHandler}))}
           */
          {...(((mode === MINI_MODE && day.isSame(today, "D")) ||
            day.isBefore(today, "D")) && {
            onClick: selectDayHandler?.(day),
          })}
        >
          <span
            className={statusDayVariant({
              dayType: getMiniCalendarDayType(day),
              seletedDayType: day.isSame(selectedDate, "day")
                ? SELECTED_DAY
                : null,
            })}
          >
            {formatDate}
          </span>
        </div>
      )}

      {mode === BIG_MODE && (
        <div
          className={clsx(
            calendarVariant({
              monthType: getBigCalendarMonthType(day, currentDate),
              dateType: getBigCalendarDateType(day),
            })
          )}
        >
          <p> {formatDate}</p>
        </div>
      )}
    </>
  );
};

export default CellItem;
