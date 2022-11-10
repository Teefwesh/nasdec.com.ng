import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { GalleryData } from "../../data/GalleryData";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const GalleryDataSorting = [...GalleryData].sort((a, b) => b.id - a.id);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(GalleryDataSorting)
      : setFilteredImages(
          GalleryDataSorting.filter((image) => image.tag === tag)
        );
  }, [tag]);

  return (
    <div>
      <Helmet>
        <title>Gallery || Nasdec Royal Schools</title>
        <meta
          name="description"
          content="Beautiful pictures about Nasdec Royal School students and other activities"
        />
      </Helmet>
      <Navigation />
      <div className="tags">
        <TagButton
          name="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        />
        <TagButton
          name="nursery"
          handleSetTag={setTag}
          tagActive={tag === "nursery" ? true : false}
        />
        <TagButton
          name="basic"
          handleSetTag={setTag}
          tagActive={tag === "basic" ? true : false}
        />
        <TagButton
          name="college"
          handleSetTag={setTag}
          tagActive={tag === "college" ? true : false}
        />
      </div>
      <motion.div layout className="image-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {filteredImages.map((item) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key={item.id}
                className="image-card"
              >
                <img
                  src={item.original}
                  alt=""
                  className="image"
                  // style={{ width: "25rem", height: "25rem" }}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>

      <Footer />
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      onClick={() => handleSetTag(name)}
      className={`btnTags ${tagActive ? "activate" : null}`}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Gallery;
