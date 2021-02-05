import React, { useState } from "react";
import Hero from "./Hero";
import HomeImages from "./HomeImages";
import ImageData from "../../data";
import SeeMore from "./SeeMore";

export default function Home() {
  const [dataImages, setDataImages] = useState(ImageData());

  return (
    <div>
      <Hero />
      <HomeImages dataImages={dataImages} />
      <SeeMore />
    </div>
  );
}
