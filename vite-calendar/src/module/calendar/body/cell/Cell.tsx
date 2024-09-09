import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { CALENDAR_SIZE, FORMAT_CELL_DATE } from "../../const/const";
import { bigMode, miniMode } from "../cell-style-helper";

interface CellProps {
  day: Dayjs;
  size: CalendarSizeType;
  mode?: CalendarModeType;
  page?: CalendarPageType;
}
const Cell = ({ day, size }: CellProps) => {
  const currentDate = dayjs(); // Temporary value, Please manage this globally

  const formatDate = day.format(FORMAT_CELL_DATE).substring(6);
  console.log(size);
  /** conditional*/
  if (size === CALENDAR_SIZE.LARGE)
    return (
      <div
        className={bigMode.bigCalendarDateStyle({
          monthMembership: bigMode.getBigModeMonthMembershipStatus(
            day,
            currentDate,
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
          currentDate,
        ),
        monthMembership: miniMode.getMiniModeMonthMembershipStatus(
          day,
          currentDate,
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
