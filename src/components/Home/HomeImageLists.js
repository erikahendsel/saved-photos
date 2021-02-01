import React, { useContext } from "react";
import { ImageContext } from "../../contexts/ImageContext";

export default function HomeImageLists() {
  const { allPhotos } = useContext(ImageContext);

  console.log(allPhotos);

  return (
    <section className="popular-images">
      <div className="image-block">
        <h1 className="title">Newest Photos</h1>
        <div className="images">
          {allPhotos.newest ? (
            allPhotos.newest.map((image) => (
              <img
                src={image.src.large}
                alt={image.photographer}
                key={image.id}
              ></img>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="image-block">
        <h1 className="title">Awesome Pets</h1>
        <div className="images">
          {allPhotos.pets ? (
            allPhotos.pets.map((image) => (
              <img
                src={image.src.large}
                alt={image.photographer}
                key={image.id}
              ></img>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="image-block">
        <h1 className="title">Stunning nature</h1>
        <div className="images">
          {allPhotos.nature ? (
            allPhotos.nature.map((image) => (
              <img
                src={image.src.large}
                alt={image.photographer}
                key={image.id}
              ></img>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}
