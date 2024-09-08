import {
  FORMAT_CELL_DATE_TYPE,
  MINI_MODE,
} from "../conditionalType/conditionalType";
import CellItem from "../cellItem/CellItem";
import styles from "./cell.module.css";

import useCalendarState from "../../store/calendarStore";
import useSelectDay from "../../hook/useSelectDay";
import { CalendarCellType } from "../../../index.d";

const Cell = ({ mode, page }: CalendarCellType) => {
  /**
   * 캘린더에 사용되는 state입니다.
   */
  const currentDate = useCalendarState((state) => state.currentDate);
  // monthStart가 속한 주의 시작 주
  const startDay = currentDate.startOf("month").startOf("week");
  // monthStart가 속한 마지막 주
  const endDay = currentDate.endOf("month").endOf("week");

  /**
   * 캘린더의 날짜를 클릭하면 호출 되는 함수
   */
  const { selectDayHandler } = useSelectDay();

  /**
   * 다른 페이지에서 호출 되는 공간 입니다. 아래에서 hook으로 써주면 아리가또우
   */

  const row = [];
  let days = [];
  let day = startDay;
  while (day <= endDay) {
    for (let i = 0; i < 7; i++) {
      const itemKey = day.format(FORMAT_CELL_DATE_TYPE);

      days.push(
        <CellItem
          key={itemKey}
          page={page}
          mode={mode}
          day={day}
          // ... spreadOperator
          //미니 캘린더 일 때 조건부로 함수를 내려줍니다.
          {...(mode === MINI_MODE && { selectDayHandler: selectDayHandler })}
          //     {...(page === MY_PAGE && {
          //       clickShowDataOfDateHandler: clickShowDataOfDateHandler,
          //     })}
        />
      );
      day = day.add(1, "day");
    }
    row.push(
      <div key={days[0].key} className={styles["calendar-row"]}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className={styles["calendar-body"]}>{row}</div>;
};

export default Cell;
