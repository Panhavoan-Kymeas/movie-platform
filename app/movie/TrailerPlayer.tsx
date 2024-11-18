"use client"
import React from 'react';
import ReactPlayer from 'react-player';

export default function TrailerPlayer({ url }) {
  return (
    <div className="flex justify-center items-center mt-10">
      <ReactPlayer url={url} controls width="100%" height="500px" />
    </div>
  );
}
