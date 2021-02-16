import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDatabase } from "../contexts/DatabaseContext";
import ImageData from "../data";

export default function Favorites() {
  const { getPhotoCollection } = useDatabase();
  const [allData, setAllData] = useState([]);
  const [dataImages, setDataImages] = useState(ImageData());

  useEffect(() => {
    getPhotoCollection();
    console.log(getPhotoCollection().then((v) => setAllData(v)));
  }, []);

  return (
    <div>
      {/* {getPhotoCollection().map((s) => (
        <h1>{s}</h1>
      ))} */}
      {allData.length ? (
        <div>
          {allData.map((item) =>
            dataImages.map((image) => {
              if (image.id === item) {
                return (
                  <Link to={`/image-details/${image.id}`}>
                    <img key={image.id} src={image.photo} alt={image.author} />
                  </Link>
                );
              }
            })
          )}
        </div>
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
}
