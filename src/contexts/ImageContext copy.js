import React, { useEffect, useState } from "react";
import HomeImageLists from "../components/Home/HomeImageLists";

export const ImageContext = React.createContext();

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

export default function ImageProvider2() {
  //   const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [generalPhotos, setGeneralPhotos] = useState([]);
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

  async function curatedPhotos() {
    const data = await fetchApi(
      `https://api.pexels.com/v1/curated?per_page=4&page=1`
    );
    setGeneralPhotos(data.photos);
  }
  async function animalPhotos() {
    const data = await fetchApi(
      `https://api.pexels.com/v1/search?query=pet&per_page=4&page=1`
    );
    setPetPhotos(data.photos);
  }
  async function naturePhotos() {
    const data = await fetchApi(
      `https://api.pexels.com/v1/search?query=nature&per_page=4&page=1`
    );
    setNatureImages(data.photos);
  }

  useEffect(() => {
    curatedPhotos(animalPhotos(naturePhotos()));
  }, []);

  return (
    <>
      <ImageContext.Provider value={{ generalPhotos, petPhotos, natureImages }}>
        <HomeImageLists />
      </ImageContext.Provider>
    </>
  );
}
