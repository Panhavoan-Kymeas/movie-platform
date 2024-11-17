import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import TrailerPlayer from './TrailerPlayer';

export default function MovieDetail() {
  return (
    <div>
        <div className="flex items-center justify-center mx-auto my-12 xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
            <div className="grid lg:grid-cols-[20%_35%_45%] gap-0 w-full">
                <div className="">
                    <div className="h-full object-cover rounded">
                        <img
                            src={`https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001626`}
                            className="object-cover rounded"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8 ml-6 justify-center">
                    <div className="flex items-center">
                        <div className="w-7 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E41111" className="h-6 w-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd"
                            />
                        </svg>
                        </div>
                        <span className="text-Gray mx-1">Duration:</span>
                        <span>2h 28min</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E41111" className="size-6">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-Gray mx-1">Movie Rate:</span>
                        <span>NC15</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E41111" className="size-6">
                            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-Gray mx-1">Release Date:</span>
                        <span>02 AUG 2024</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E41111" className="size-6">
                            <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>

                        </div>
                        <span className="text-Gray mx-1">Genre:</span>
                        <span className="uppercase">Action</span>
                    </div>
                </div>
                <div className="flex items-start space-x-5">
                    <div className="bg-white w-1 h-full"></div>
                    <div>
                        <h3 className="text-2xl">Description:</h3>
                        <p className="mt-5 text-Gray">
                        After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.
                        </p>

                        <h3 className="mt-5 text-2xl">How would you rate this movie?</h3>
                        <Rating
                        className="mt-2"
                        defaultValue={0}
                        precision={0.5}
                        icon={<StarIcon fontSize="inherit" />}
                        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: 'gray' }} />}
                        />
                    </div>
                    </div>
                
                <div className="flex-cols items-center gap-2 mt-2">
                    <span className="text-2xl font-normal text-white">Gladiator II</span>
                    <Rating
                        defaultValue={4}
                        precision={0.5}
                        readOnly
                        icon={<StarIcon fontSize="inherit" />}
                        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: 'gray' }} />}
                    />
                </div>
            </div>
        </div>
        <TrailerPlayer url="https://youtu.be/gKjop7sxMlg?si=N_5IabdS0T-ePAGF"/>
    </div>
  )
}
