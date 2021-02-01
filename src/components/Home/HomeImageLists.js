import React, { useEffect, useState, useContext } from "react";
import { ImageContext } from "../../contexts/ImageContext";

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

export default function HomeImageLists() {
  const { allPhotos } = useContext(ImageContext);

  console.log("allPhotos: ", allPhotos);
  // console.log("petPhotos: ", petPhotos);
  // console.log("natureImages: ", natureImages);

  return (
    <>
      <div className="image-cards">
        <h1>Newest Photos</h1>
        {allPhotos.newest ? (
          allPhotos.newest.map((image) => (
            <img src={image.src.medium} key={image.id}></img>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="image-cards">
        <h1>Awesome Pets</h1>
        {allPhotos.pets ? (
          allPhotos.pets.map((image) => (
            <img src={image.src.medium} key={image.id}></img>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="image-cards">
        <h1>Stunning nature</h1>
        {allPhotos.nature ? (
          allPhotos.nature.map((image) => (
            <img src={image.src.medium} key={image.id}></img>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
