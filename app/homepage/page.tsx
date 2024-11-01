import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/app/components/Slider";
import CurrentandUpcomming from "../components/CurrentandUpcomming";

export default function Home() {

  return (
    <div>
      <Slider/>
      <CurrentandUpcomming/>
    </div>
  );
}