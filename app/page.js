import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrapRates from "./components/ScrapRates";
import EarnFromScrap from "./components/EarnFromScrap";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <EarnFromScrap/>
      <ScrapRates/>
    </div>
  );
}
