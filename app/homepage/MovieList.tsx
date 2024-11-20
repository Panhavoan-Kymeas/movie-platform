"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import SkeletonCard from './SkeletonCard';

// Define Movie interface to match both static and dynamic data structures
interface Movie {
  id: number;
  title: string;
  image: string;
  cinemas: string[];
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href="/movie" className="flex flex-col gap-4 h-full group">
      <div className="relative flex-1 w-full overflow-hidden rounded-xl">
        <img 
          src={movie.image} 
          alt={movie.title}
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
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/movie')
      .then(res => {
        const apiMovies = res.data.map((movie: any, index: number) => ({
          id: movie.movie_id,
          title: movie.title,
          image: movie.posterurl,
        }));
        setMovies(apiMovies);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <div className="mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          Array(4).fill(null).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;