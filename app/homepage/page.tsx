import Slider from "./Slider";
import CurrentandUpcomming from "./CurrentandUpcomming";
import Showtime from "./Showtime";
import MovieList from "./MovieList"

export default function Home() {

  return (
    <div>
      <Slider/>
      <CurrentandUpcomming/>
      <Showtime/>
      <MovieList/>
    </div>
  );
}