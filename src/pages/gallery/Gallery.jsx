import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Helmet } from "react-helmet";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

import "./Gallery.css";
import { GalleryData } from "../../data/GalleryData";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../footer/Footer";

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const GalleryDataSorting = [...GalleryData].sort((a, b) => b.id - a.id);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(GalleryDataSorting)
      : setFilteredImages(
          GalleryDataSorting.filter((image) => image.tag === tag)
        );
  }, [tag, GalleryDataSorting]);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(filteredImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === filteredImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

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
      {openModal && (
        <div className="sliderWrap">
          <FaTimes className="btnClose" onClick={handleCloseModal} />
          <BsFillArrowLeftCircleFill className="btnPrev" onClick={prevSlide} />
          <BsFillArrowRightCircleFill className="btnNext" onClick={nextSlide} />

          <div className="fullScreenImage">
            <img src={filteredImages[slideNumber].imageUrl} alt="" />
          </div>
        </div>
      )}

      <motion.div layout className="image-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {filteredImages.map((item, index) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key={item.id}
                className="image-card"
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
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
