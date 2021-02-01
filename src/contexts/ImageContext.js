import React, { useEffect, useState } from "react";
import HomeImageLists from "../components/Home/HomeImageLists";

export const ImageContext = React.createContext();

export default function ImageProvider() {
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
  const [allPhotos, setallPhotos] = useState([]);

  async function fetchApi(url) {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: API_KEY,
      },
    }).catch((errorm) => {
      console.error("Error", errorm);
    });
    const data = await dataFetch.json();
    return data;
  }

  async function fetchAllPhotos() {
    const newestPhotoData = await fetchApi(
      `https://api.pexels.com/v1/curated?per_page=4&page=1`
    );
    const petPhotoData = await fetchApi(
      `https://api.pexels.com/v1/search?query=pet&per_page=4&page=1`
    );
    const naturePhotoData = await fetchApi(
      `https://api.pexels.com/v1/search?query=nature&per_page=4&page=1`
    );
    setallPhotos({
      ...allPhotos,

      newest: newestPhotoData.photos,
      pets: petPhotoData.photos,
      nature: naturePhotoData.photos,
    });
  }

  useEffect(() => {
    fetchAllPhotos();
  }, []);

  return (
    <>
      <ImageContext.Provider value={{ allPhotos }}>
        <HomeImageLists />
      </ImageContext.Provider>
    </>
  );
}
