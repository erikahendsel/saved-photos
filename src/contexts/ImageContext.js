import React, { useCallback, useEffect, useState } from "react";
import HomeImageLists from "../components/Home/HomeImageLists";

export const ImageContext = React.createContext();

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

export default function ImageProvider() {
  //   const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allPhotos, setallPhotos] = useState([]);
  const [petPhotos, setPetPhotos] = useState([]);
  const [natureImages, setNatureImages] = useState([]);

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
