import { useState } from "react";
import "../calendar/calendar.scss";
import "../../App.scss";

const Calendar = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const previous = () => {
    setMonth((prevMonth) => (month === 0 ? 11 : prevMonth - 1));
    setYear((prevYear) => (month === 0 ? prevYear - 1 : prevYear));
  };

  const next = () => {
    setMonth((prevMonth) => (month === 11 ? 0 : prevMonth + 1));
    setYear((prevYear) => (month === 11 ? prevYear + 1 : prevYear));
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    const numDaysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDay = new Date(year, month).getDay() - 1;
    if (firstDay === -1) {
      firstDay = 6; 
    }
   
    const days = [];
    let day = 1;

    for (let i = 0; Math.ceil(numDaysInMonth / 7); i++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          cells.push(null);
        } else if (day <= numDaysInMonth) {
          const currentDate = new Date(year, month, day);
          const isToday = currentDate.toDateString() === today.toDateString();
          const formattedDate = currentDate.toLocaleDateString("ua", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          cells.push(
            <td
              key={day}
              className={isToday ? "today" : ""}
              title={formattedDate}
            >
              {day}
            </td>
          );
          day++;
        }
      }
      days.push(cells);
      if (day > numDaysInMonth) break;
    }
    return days.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="wrapper">
      <header>
        <button className="calendar_button" onClick={previous}>
          Previous
        </button>
        <span>
          {months[month]} {year}
        </span>
        <button className="calendar_button" onClick={next}>
          Next
        </button>
      </header>
      <main>
        <table className="calendar__table">
          <thead>
            <tr>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>Su</th>
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </table>
      </main>
    </div>
  );
};

export default Calendar;
