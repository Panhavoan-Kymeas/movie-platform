"use client";

import React, { useState } from 'react';

interface DateInfo {
  dayName: string;
  day: string;
  monthName: string;
}

export default function Showtime() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Type the state

  const today = new Date();

  const formatWithLeadingZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const getDateInfo = (date: Date): DateInfo => {
    const dayName = date.toLocaleString('default', { weekday: 'long' }).toUpperCase();
    const day = formatWithLeadingZero(date.getDate());
    const monthName = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    return { dayName, day, monthName };
  };

  const dates: DateInfo[] = []; // Type the dates array
  for (let index = 0; index < 8; index++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + index);
    dates.push(getDateInfo(nextDate));
  }

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <style jsx>{`
        .scrollbar-hide-y::-webkit-scrollbar {
          display: none; /* Hides the scrollbar in Webkit browsers */
        }

        .scrollbar-hide-y {
          -ms-overflow-style: none; /* Hides scrollbar in IE */
          scrollbar-width: none; /* Hides scrollbar in Firefox */
        }
      `}</style>

      <div className="flex space-x-4 mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12 overflow-x-auto scrollbar-hide-y">
        {dates.map((dateInfo, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`xl:w-[10.25rem] lg:w-[10.25rem] md:w-[8rem] sm:w-[4.5rem] xs:w-[3.5rem] xs:py-1 flex flex-col flex-shrink-0 items-center justify-center 
                        rounded-lg shadow-md cursor-pointer border-2
                        ${index === selectedIndex ? 'border-red-500' : 'border-white'}`}
          >
            <span className="text-white xs:text-[11px] sm:text-[11px] md:text-[13px]">
              {dateInfo.dayName.slice(0, 3)}
            </span>
            <span className="text-white xs:text-[15px] sm:text-[20px] font-bold">
              {dateInfo.day}
            </span>
            <span className="text-white xs:text-[11px] sm:text-[11px] md:text-[13px]">
              {dateInfo.monthName.slice(0, 3)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
