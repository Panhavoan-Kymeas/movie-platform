"use client";
import React, { useState } from 'react';

export default function CurrentAndUpcoming() {

    const [active, setActive] = useState(true);

    return (
        <div className="flex xs:justify-center md:justify-start lg:justify-start xs:text-[20px] relative xs:mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12">
            <button 
                onClick={() => setActive(true)} 
                className={`sm:text-[20px] lg:text-[22px] ${active ? 'opacity-100' : 'opacity-[0.5]'}`}
            >
                NOW SHOWING
            </button>
            <div className="w-1 h-auto bg-white mx-5"/>
            <button 
                onClick={() => setActive(false)} 
                className={`sm:text-[20px] md:text-[21px] lg:text-[22px] ${!active ? 'opacity-100' : 'opacity-[0.5]'}`}
            >
                COMING SOON
            </button>
            <span 
                className={`bg-red-700 w-[5.5rem] xs:w-[4.5rem] h-1 absolute bottom-[-7px] duration-300 ${active ? 'xl:left-[4%] lg:left-[5%] md:left-[6%] sm:left-[9%] xs:left-[5.5%]' : 'xl:left-[21%] lg:left-[26%] md:left-[35%] sm:left-[220px] xs:left-[54%]'}`}
            ></span>
        </div>
    );
}
