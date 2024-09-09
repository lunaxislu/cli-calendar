import { cva } from "class-variance-authority";
import styles from "./mini-mode-style.module.css";
// Mini mode style
const miniCalendarDateStyle = cva(styles["mini-calendar-base-grid"], {
  variants: {
    // calendarDisplayState: Indicates whether the date belongs to the currently rendered calendar
    // ACTIVE: Date in the currently rendered calendar
    // INACTIVE: Date in the previous or another calendar
    calendarDisplayState: {
      ACTIVE: styles["current-calendar"], // Date in the currently rendered calendar
      INACTIVE: styles["not-current-calendar"], // Date in another calendar
    },
    // monthMembership: Indicates whether the date belongs to the current month, or the previous/next month
    // IN_CURRENT_MONTH: Date within the current month
    // OUTSIDE_CURRENT_MONTH: Date in the previous or next month
    monthMembership: {
      IN_CURRENT_MONTH: styles["mini-current-month"], // Date in the current month
      OUTSIDE_CURRENT_MONTH: styles["mini-not-current-month"], // Date in the previous/next month
    },
    // dateRelativeToToday: Indicates the relationship of the date to today (before, today, after)
    // BEFORE_TODAY: Date before today
    // TODAY: Today's date
    // AFTER_TODAY: Date after today
    dateRelativeToToday: {
      BEFORE_TODAY: styles["mini-prev-date"], // Date before today
      TODAY: styles["mini-current-date"], // Today's date
      AFTER_TODAY: styles["mini-after-date"], // Date after today
    },
  },
});

// Day type style follows the same pattern
const dayStyleVariant = cva(styles["mini-day-base"], {
  variants: {
    dayType: {
      SATURDAY: styles["mini-calendar-saturday"], // Saturday style
      SUNDAY: styles["mini-calendar-sunday"], // Sunday style
      WEEKDAY: styles["mini-calendar-day"], // Weekday style
    },
    selectedDay: {
      SELECTED: styles["mini-calendar-selected-date"], // Style for selected date
    },
  },
});

export { miniCalendarDateStyle, dayStyleVariant };
