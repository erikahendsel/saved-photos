import React from "react";
import PexelsContext from "../../contexts/ImageContext";
import Hero from "./Hero";
import HomeImageLists from "./HomeImageLists";

export default function Home() {
  return (
    <div>
      <Hero />
      <PexelsContext>
        <HomeImageLists />
      </PexelsContext>
    </div>
  );
}
