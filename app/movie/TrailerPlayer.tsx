"use client"
import React from 'react';
import ReactPlayer from 'react-player';

export default function TrailerPlayer({ url }) {
  return (
    <div className="flex justify-center items-center">
      <ReactPlayer url={url}/>
    </div>
  );
}
