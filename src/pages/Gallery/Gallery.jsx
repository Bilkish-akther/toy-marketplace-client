import React, { useEffect, useState } from "react";
import ViewGallery from "../ViewGallery/ViewGallery";

const Gallery = () => {
  const [dolls, setDolls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("gallery.json");
        const data = await response.json();
        setDolls(data.dolls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center mt-4 text-bold ">Gallery Store</h2>
      <div  className="galleryCard">
        {dolls.map((doll) => (
          <ViewGallery key={doll.id} doll={doll}></ViewGallery>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
