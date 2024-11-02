"use client";
import React, { useState } from 'react';

export default function CurrentAndUpcoming() {
    const [activeSection, setActiveSection] = useState('nowShowing');

    const containerStyle: React.CSSProperties = {
        fontSize: '30px',
        padding: '80px 0px 0px 53px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    };

    const textStyle = (section: string) => ({
        cursor: 'pointer',
        opacity: activeSection === section ? 1 : 0.5,
        margin: '0 20px',
    });

    const underlineStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '-5px',
        left: activeSection === 'nowShowing' ? '6%' : '21%', // Adjust position based on active section
        width: '7%',
        height: '3px',
        backgroundColor: 'red',
        transition: 'left 0.3s ease',
    };

    return (
        <div style={containerStyle}>
            <span style={textStyle('nowShowing')} onClick={() => setActiveSection('nowShowing')}>
                NOW SHOWING
            </span>
            <div style={{ width: '5px', height: '25px', backgroundColor: 'white', margin: '0 20px' }} />
            <span style={textStyle('comingSoon')} onClick={() => setActiveSection('comingSoon')}>
                COMING SOON
            </span>
            <span style={underlineStyle}></span>
        </div>
    );
}
