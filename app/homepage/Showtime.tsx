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
    for (let index = 0; index < 5; index++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + index); // Increment the day by index
        dates.push(getDateInfo(nextDate)); // Add the formatted date info to the array
    }


    const handleClick = (index: number) => {
        setSelectedIndex(index); // Update the selected index on click
    };

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 150px)',
            gap: '63px',
            paddingLeft: '53px',
            paddingTop: '78px',
            paddingBottom: '70px'
        }}>
            {dates.map((dateInfo, index) => (
                <div key={index} onClick={() => handleClick(index)} style={{
                    width: '154px',
                    height: '113px',
                    border: `2px solid ${index === selectedIndex ? 'red' : 'white'}`, // Change border color based on selection
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                }}>
                    <span style={{ color: 'white', fontSize: '20px' }}>{dateInfo.dayName}</span>
                    <span style={{ color: 'white', fontSize: '30px', fontFamily: 'SF Pro Display, sans-serif' }}>
                        {dateInfo.day}
                    </span>
                    <span style={{ color: 'white', fontSize: '20px' }}>{dateInfo.monthName}</span>
                </div>
            ))}
        </div>
    );
}
