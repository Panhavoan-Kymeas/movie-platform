"use client";

import React, { useState } from 'react';

export default function Showtime() {
    const [selectedIndex, setSelectedIndex] = useState(0); // State to track the selected index

    // Create a new date object
    const today = new Date();

    // Function to format numbers with leading zeros
    const formatWithLeadingZero = (num: number) => {
        return num < 10 ? `0${num}` : `${num}`;
    };

    // Function to get the day name and formatted day and month
    const getDateInfo = (date: Date) => {
        const dayName = date.toLocaleString('default', { weekday: 'long' }).toUpperCase();
        const day = formatWithLeadingZero(date.getDate());
        const monthName = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        return { dayName, day, monthName };
    };

    // Create an array to hold the date information for today and the next 4 days
    const dates = [];
    for (let index = 0; index < 4; index++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + index); // Increment the day by index
        dates.push(getDateInfo(nextDate)); // Add the formatted date info to the array
    }


    const handleClick = (index: number) => {
        setSelectedIndex(index); // Update the selected index on click
    };

    return (
        <div className="flex flex-wrap gap-4 mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12">
            {dates.map((dateInfo, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`xl:w-[10.25rem] lg:w-[10.25rem] sm:w-[10.25rem] xs:w-[4.5rem] xs:py-1 flex flex-col items-center justify-center 
                                rounded-lg shadow-md cursor-pointer border-2
                                ${index === selectedIndex ? 'border-red-500' : 'border-white'}`}
                >
                    <span className="text-white xs:text-[12px]">{dateInfo.dayName.slice(0, 3)}</span>
                    <span className="text-white xs:text-[20px] xs:text-bold">{dateInfo.day}</span>
                    <span className="text-white xs:text-[12px]">{dateInfo.monthName.slice(0, 3)}</span>
                </div>
            ))}
        </div>
    );
}
