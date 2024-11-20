import React from 'react';
import Header from '../homepage/Header';
import SearchBar from '../homepage/Searchbar';
import Footer from '../homepage/Footer';
import { MovieDetail } from './MovieDetail';



export default function movie() {

  const movie = {
    id: "1",
    title: "Thaghut",
    description: "Ainun found out that her biological father, Abah Mulya, was actually a spiritual teacher who taught heresy and distanced himself from the Qibla. Can Ainun guide them to the right path again?",
    releaseDate: "2024-11-17",
    genre: "Horror",
    posterURL: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001755",
    trailerURL: "https://youtu.be/twEBsn_Ke4o?si=LOmd_ClDBQzgpr8d",
    movieRate: "R18",
    duration: 103,
  };

  return (
    <div>
      <div className=" lg:flex justify-between items-center mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12 pt-5">
        <div className="w-[30rem]">
          <SearchBar searchType="movie" />
        </div>
        <div className="w-[30rem]">
          <SearchBar searchType="location" />
        </div>
      </div>
      <MovieDetail movie={movie} />
      <Footer/>
    </div>
  )
}