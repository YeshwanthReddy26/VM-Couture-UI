import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { homePageItemsData } from '../Utils/Constants';

const Home = () => {
  const [imagesInRow, setImagesInRow] = useState(3);
  
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

    return (
        <>
            <Box sx={{ width: '100%', minHeight: 829}}>
                <Masonry columns={imagesInRow} spacing={1} sx={{margin: '10px'}}>
                    {homePageItemsData.map((item, index) => (
                        <div class="home-page-image-container" key={index}>
                            <img
                                className="home-page-image"
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            {/* <div class="home-page-image-text">{item.text}</div> */}
                        </div>
                    ))}
                </Masonry>
            </Box>
        </>

    );
}

export default Home;