import { cva } from "class-variance-authority";
import styles from "./big-mode-style.module.css";
// big Mode Variant
const bigCalendarDateStyle = cva(styles["big-calendar-base-grid"], {
  variants: {
    // monthMembership: Indicates whether the date belongs to the current month.
    // IN_CURRENT_MONTH: Date within the current month
    // OUTSIDE_CURRENT_MONTH: Date in the previous or next month
    monthMembership: {
      IN_CURRENT_MONTH: styles["big-calendar-current-month"], // Date within the current month
      OUTSIDE_CURRENT_MONTH: styles["big-calendar-not-current-month"], // Date in the previous/next month
    },
    // dateRelativeToToday: Styles based on the relationship of the date to today.
    // BEFORE_TODAY: Date before today
    // TODAY: Today's date
    // AFTER_TODAY: Date after today
    dateRelativeToToday: {
      BEFORE_TODAY: styles["big-calendar-prev-date"], // Date before today
      TODAY: styles["big-calendar-current-date"], // Today's date
      AFTER_TODAY: styles["big-calendar-after-date"], // Date after today
    },
  },
});

export { bigCalendarDateStyle };
