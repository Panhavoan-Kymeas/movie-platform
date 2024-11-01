import React from 'react';

export default function CurrentAndUpcoming() {

    const containerStyle: React.CSSProperties = {
        fontSize: '30px',
        padding: '80px 0px 78px 53px',
        display: 'flex',
        alignItems: 'center',
    };

    const nowShowingStyle: React.CSSProperties = {
        position: 'relative',
    };

    const dividerStyle: React.CSSProperties = {
        width: '5px',
        height: '25px',
        backgroundColor: 'white',
        margin: '0 20px',
    };

    const underlineStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '-5px',
        left: '50%',
        width: '50%',
        height: '3px',
        backgroundColor: 'red',
        transform: 'translateX(-50%)', // Shift back by half of its own width
    };

    return (
        <div style={containerStyle}>
            <span style={nowShowingStyle}>
                NOW SHOWING
                <span style={underlineStyle}></span>
            </span>
            <div style={dividerStyle}></div>
            <span style={{ opacity: 0.5 }}>COMING SOON</span>
        </div>
    );
}
