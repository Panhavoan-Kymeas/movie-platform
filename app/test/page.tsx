"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Movie {
    title: string;
    synopsis: string;
    bannerImageUrl: string; // Assuming the movie object has this property
}

export default function Demo() {
    const [movies, setMovies] = useState<Movie[]>([]); // Use an array to store multiple movies

    useEffect(() => {
        axios.get('https://api.legend.com.kh/scheduled-films?limit=100&date=2024-11-18T00:00:00.000Z&vistaCinemaId&sort=latest-released')
            .then(res => {
                setMovies(res.data.rows); // Assuming res.data.rows contains an array of movies
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <Link key={index} href="/movie" className="flex flex-col gap-4 h-full group">
                        <div className="relative flex-1 w-full overflow-hidden rounded-xl">
                            <img 
                                src={movie.bannerImageUrl} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-normal text-white">{movie.title}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 h-full">
                                <div className="h-full object-cover rounded">
                                    <img 
                                        src={`/image/legend.png`} 
                                        className="w-full object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
