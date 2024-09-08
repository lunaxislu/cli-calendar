import { Dayjs } from "dayjs";
import { setSelectedDate } from "../store/dayStore";
import { setCalendarCurrentDate } from "../store/calendarStore";

const useSelectDay = () => {
  const selectDayHandler = (day: Dayjs) => () => {
    setSelectedDate(day);
    setCalendarCurrentDate(day);
  };

  return { selectDayHandler };
};

export default useSelectDay;
