import { useState } from "react";

import Calendar from "./module/calendar/Calendar";
import { CALENDAR_SIZE } from "./module/calendar/const/const";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calendar />
      <Calendar size={CALENDAR_SIZE.LARGE} />

      <button>asdf</button>
    </>
  );
}

export default App;
