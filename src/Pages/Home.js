import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';
import { homePageItemsData } from '../Utils/Constants';

const Home = () => {
  const [imagesInRow, setImagesInRow] = useState(3);
  const [openHomePageImageModal, setOpenHomePageImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setImagesInRow(1);
      } else if (screenWidth < 1024) {
        setImagesInRow(2);
      } else {
        setImagesInRow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenHomePageImageModal(true);
  };

  const handleCloseModal = () => {
    setOpenHomePageImageModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Box sx={{ width: '100%', minHeight: 829 }}>
        <Masonry columns={imagesInRow} spacing={1} sx={{ margin: '10px' }}>
          {homePageItemsData.map((item, index) => (
            <div className="home-page-image-container" key={index}>
              <img
                className="home-page-image"
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleImageClick(item.img)} // Call handleImageClick on image click
              />
              {/* <div className="home-page-image-text">{item.text}</div> */}
            </div>
          ))}
        </Masonry>
      </Box>

      {/* Modal to display the selected image */}
      <Modal
        open={openHomePageImageModal}
        onClose={handleCloseModal}
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <div style={{ maxHeight: '90vh', maxWidth: '90vw', overflow: 'auto' }}>
            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
