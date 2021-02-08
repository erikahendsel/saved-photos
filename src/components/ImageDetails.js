import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageData from "../data";

export default function ImageDetails() {
  const [dataImages, setDataImages] = useState(ImageData());
  const parameters = useParams();

  return (
    <section>
      <div className="image-detail-container">
        {dataImages.map((image) => {
          if (parameters.id === image.id) {
            return (
              <div key={image.id}>
                <p className="author">Author: {image.author}</p>
                <img src={image.photo} />
                <p>
                  Support the author by visiting the source link:{" "}
                  <a href={image.link} target="_blank" rel="noreferrer">
                    {image.link}
                  </a>
                </p>
              </div>
            );
          } else {
            return "";
          }
        })}
        <div className="content">
          <p>Like the photo? Save it to your favorites and view it later!</p>

          <button>Favorite</button>
        </div>
      </div>
    </section>
  );
}
