import clsx from "clsx";
import styles from "./calendar.module.css";
import Header from "./header/Header";
import Days from "./days/Days";
import Cell from "./cell/Cell";
import { BIG_MODE, MINI_MODE } from "./conditionalType/conditionalType";
import { CalendarType } from "../../index.d";
const Calendar = ({ mode, children, page }: CalendarType) => {
  const calendarClasses = clsx({
    [styles["mini-calendar"]]: mode === MINI_MODE,
    [styles["big-calendar"]]: mode === BIG_MODE,
  });

  const headerWrapperClasses = clsx({
    [styles["mini-calendar-header-wrapper"]]: mode === MINI_MODE,
  });

  const bodyWrapperClasses = clsx({
    [styles["big-body-wrapper"]]: mode === BIG_MODE,
  });

  return (
    <div className={calendarClasses}>
      <div className={headerWrapperClasses}>
        <Header mode={mode} />

        {/* children 위치는 임의로 정했습니다.  */}
        {children}
      </div>

      <div className={bodyWrapperClasses}>
        <Days mode={mode} />
        <Cell mode={mode} />
      </div>
    </div>
  );
};

export default Calendar;
