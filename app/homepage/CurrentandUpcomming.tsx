"use client";
import React, { useState } from 'react';

export default function CurrentAndUpcoming() {

    return (
        <div className="text-2xl flex relative mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12">
            <span>NOW SHOWING</span>
            <div className="w-1 h-auto bg-white mx-5"/>
            <span className="opacity-[0.5]">COMING SOON</span>
            <span className="bg-red-700 w-[5.5rem] h-1 absolute bottom-[-7px] left-[4%]"></span>
        </div>
    );
}
