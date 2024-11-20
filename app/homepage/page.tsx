import Slider from "./Slider";
import CurrentandUpcomming from "./CurrentandUpcomming";
import Showtime from "./Showtime";
import MovieList from "./MovieList"
import Header from "./Header";
import SearchBar from "./Searchbar";

export default function Home() {

  return (
    <div>
      <Header/>
      <Slider/>
      <div className="flex mx-auto xs:w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-12">
        <SearchBar searchType="movie" />
        <SearchBar searchType="location" />
      </div>
      <CurrentandUpcomming/>
      <Showtime/>
      <MovieList/>
    </div>
  );
}