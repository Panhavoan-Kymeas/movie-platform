import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider";
import CurrentandUpcomming from "../components/CurrentandUpcomming";
import Showtime from "../components/Showtime"

export default function Home() {

  return (
    <div>
      <Slider/>
      <CurrentandUpcomming/>
      <Showtime/>
    </div>
  );
}