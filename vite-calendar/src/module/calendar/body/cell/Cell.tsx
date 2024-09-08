import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { CALENDAR_MODE, FORMAT_CELL_DATE } from "../../const/const";
import { bigMode, miniMode } from "../cell-style-helper";

interface CellProps {
  day: Dayjs;
  mode: CalendarModeType;
  page?: CalendarPageType;
}
const Cell = ({ day, mode, page }: CellProps) => {
  const currentDate = dayjs(); // Temporary value, Please manage this globally

  const formatDate = day.format(FORMAT_CELL_DATE).substring(6);
  console.log(mode);
  /** conditional*/
  if (mode === CALENDAR_MODE.BIG_MODE)
    return (
      <div
        className={bigMode.bigCalendarDateStyle({
          monthMembership: bigMode.getBigModeMonthMembershipStatus(
            day,
            currentDate
          ),
          dateRelativeToToday: bigMode.getBigModeDateRelativeToToday(day),
        })}
      >
        <p>{formatDate}</p>
      </div>
    );

  /**default Mini Mode */
  return (
    <div
      className={miniMode.miniCalendarDateStyle({
        calendarDisplayState: miniMode.getMiniModeCalendarDisplayState(
          day,
          currentDate
        ),
        monthMembership: miniMode.getMiniModeMonthMembershipStatus(
          day,
          currentDate
        ),
        dateRelativeToToday: miniMode.getMiniModeDateRelativeToToday(day),
      })}
    >
      <span
        className={miniMode.dayStyleVariant({
          dayType: miniMode.getMiniModeDayType(day),
        })}
      >
        {formatDate}
      </span>
    </div>
  );
};

export default React.memo(Cell);
