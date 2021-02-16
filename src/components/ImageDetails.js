import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../contexts/DatabaseContext";
import ImageData from "../data";

export default function ImageDetails() {
  const [dataImages, setDataImages] = useState(ImageData());
  const parameters = useParams();
  const [error, setError] = useState("");
  const { setPhotoCollection } = useDatabase();

  async function addImageIdToDatabase(ImgNr, imgId) {
    try {
      console.log(ImgNr, imgId);
      await setPhotoCollection(ImgNr, imgId);
    } catch {
      setError("Failed to add image to database");
    }
  }
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
                <div className="content">
                  <p>
                    Like the photo? Save it to your favorites and view it later!
                  </p>
                  <button
                    onClick={() => addImageIdToDatabase(image.id, image.id)}
                  >
                    Favorite
                  </button>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    </section>
  );
}
