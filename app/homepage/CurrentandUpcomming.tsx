"use client";
import React, { useState } from 'react';

export default function CurrentAndUpcoming() {

    return (
        <div className="flex xs:justify-center md:justify-start lg:justify-start xs:text-[20px] relative xs:mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12">
            <span className="lg:text-[22px]">NOW SHOWING</span>
            <div className="w-1 h-auto bg-white mx-5"/>
            <span className="lg:text-[22px] opacity-[0.5]">COMING SOON</span>
            <span className="bg-red-700 w-[5.5rem] h-1 absolute bottom-[-7px] left-[3.5%]"></span>
        </div>
    );
}
