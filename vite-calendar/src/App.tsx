import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calendar from "./module/calendar/Calendar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calendar />
      <Calendar mode="BIG_MODE" />
    </>
  );
}

export default App;
