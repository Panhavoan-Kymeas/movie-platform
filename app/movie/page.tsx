import React from 'react';
import Header from '../homepage/Header';
import SearchBar from '../homepage/Searchbar.';
import Footer from '../homepage/Footer';
import MovieDetail from './MovieDetail';

export default function movie() {
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
      <MovieDetail/>
      <Footer/>
    </div>
  )
}