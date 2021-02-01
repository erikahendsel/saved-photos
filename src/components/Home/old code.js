import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

export default function HomeImageLists2() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  async function curatedPhotos() {
    const dataFetch = await fetch("https://api.pexels.com/v1/curated", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: API_KEY,
      },
    }).catch((errorm) => {
      console.error("Error", errorm);
    });
    const data = await dataFetch.json();
    setItems(data.photos);
  }

  useEffect(() => {
    curatedPhotos();
  }, []);

  console.log(items);

  return (
    <>
      <div className="title">Latest Photos</div>
      {items.length ? (
        items.map((item) => (
          <div key={item.id}>
            <img src={item.src.medium}></img>
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
