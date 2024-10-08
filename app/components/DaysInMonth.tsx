"use client";
import React, { useState } from "react";

const DaysInMonth: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth()); // 0-indexed for January

  const getDaysInMonth = (year: number, month: number): string[] => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateArray: string[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      dateArray.push(new Date(year, month, day).toLocaleDateString());
    }

    return dateArray;
  };

  const days = getDaysInMonth(year, month);

  return (
    <div>
      <h1>Days in Month</h1>
      <label>
        Year:
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Month:
        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </label>
      <br />
      <h2>
        Dates in{" "}
        {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
        {year}
      </h2>
      <ul>
        {days.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default DaysInMonth;
