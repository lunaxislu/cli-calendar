import Calendar from "./module/calendar-css-module/Calendar";
import { CALENDAR_SIZE } from "./module/calendar-css-module/const/const";

function App() {
  return (
    <>
      <Calendar />
      <Calendar size={CALENDAR_SIZE.LARGE} />

      <button>asdf</button>
    </>
  );
}

export default App;
