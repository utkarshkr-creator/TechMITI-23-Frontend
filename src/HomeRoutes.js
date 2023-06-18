import React from "react";
import About from "./sections/About";
import Events from "./sections/Events";
import Glimpse from "./sections/Glimpse";
import Marquee from "./sections/Marquee";

export default function HomeRoutes() {
  return (
    <>
      <About key="about" />
      <Events key="Events" />
      <Marquee key="marquee" />
      <Glimpse key="Glimpse" />
    </>
  );
}
