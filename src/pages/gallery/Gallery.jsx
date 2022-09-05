import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { GalleryData } from "../../data/GalleryData";

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(GalleryData)
      : setFilteredImages(GalleryData.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div>
      <TagButton name="all" handleSetTag={setTag} />
      <TagButton name="new" handleSetTag={setTag} />
      <TagButton name="free" handleSetTag={setTag} />
      <TagButton name="pro" handleSetTag={setTag} />
      <div className="image-container">
        {filteredImages.map((item) => (
          <div key={item.id} className="image-card">
            <img
              src={item.imageName}
              alt=""
              className="image"
              // style={{ width: "25rem", height: "25rem" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button onClick={() => handleSetTag(name)}> {name.toUpperCase()} </button>
  );
};

export default Gallery;
