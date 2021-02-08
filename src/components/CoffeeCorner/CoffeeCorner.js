import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageData from "../../data";

export default function CoffeeCorner() {
  const [dataImages, setDataImages] = useState(ImageData());
  return (
    <section>
      <div className="coffee-corner-container">
        <div className="">
          <h2>All Coffee Images in one place</h2>
          <p>
            Best coffee photos picked out just for you. Smell the aroma, feel
            the juicy colors and let your thoughts wander in the Coffee
            Wonderland.
          </p>
        </div>

        <div className="coffee-images">
          {dataImages.map((image) => (
            <div key={image.id}>
              <Link to={`/image-details/${image.id}`}>
                <img src={image.photo} alt={image.author} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
