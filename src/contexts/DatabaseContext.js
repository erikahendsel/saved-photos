import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
const DatabaseContext = React.createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const [stDatabase, setStDatabase] = useState();
  const [loading, setLoading] = useState(true);
  const [allFetchedPhotos, setAllFetchedPhotos] = useState([]);

  async function getPhotoCollection() {
    // const photosRef = db.collection("PhotoCollection").doc("image1");
    // photosRef.get().then((doc) => {
    //   const data = doc.data();
    //   console.log(data);
    //   return data;
    // });

    // db.collection("PhotoCollection")
    //   .get()
    //   .then((querySnapshot) => {
    //     let bigAr = [];
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       //   console.log(doc.id, " => ", doc.data());
    //       console.log(doc.id);
    //       bigAr.push(doc.id);
    //     });
    //     return bigAr;
    //   })
    //   .then((v) => {
    //     setAllFetchedPhotos(v);
    //     return allFetchedPhotos;
    //   });
    let photoArray = [];
    const photosRef = db.collection("PhotoCollection");
    const snapshot = await photosRef.get();
    snapshot.forEach((doc) => {
      //   console.log(doc.id, "=>", doc.data());
      //   setAllFetchedPhotos((oldArray) => [...oldArray, doc.id]);
      photoArray.push(doc.id);
    });
    return photoArray;
  }
  function setPhotoCollection(imgNr, imgId) {
    db.collection("PhotoCollection").doc(imgNr).set({
      id: imgId,
    });
  }
  function deleteFromPhotoCollection(imgNr) {
    const photoRef = db.collection("PhotoCollection").doc(imgNr);

    // Remove the 'capital' field from the document
    photoRef.update({
      id: db.FieldValue.delete(),
    });
  }

  //   useEffect(() => {
  //     getPhotoCollection();
  //     setLoading(false);
  //   }, []);

  const value = {
    getPhotoCollection,
    setPhotoCollection,
    deleteFromPhotoCollection,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
