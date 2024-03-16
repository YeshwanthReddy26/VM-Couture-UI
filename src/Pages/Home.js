import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import img4 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image4.png";
import img5 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image5.png";
import img6 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image6.png";
import img7 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image7.png";
import img8 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image8.png";
import img9 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image9.png";

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

    const itemData = [
        {
          img: img9,
          title: 'image 1',
          text: 'Wrapped in elegance, draped in grace.',
        },
        {
          img: img4,
          title: 'image 3',
          text: 'Every fold tells a story.',
        },
        {
          img: img8,
          title: 'image 4',
          text: 'Wear with pride',
        },
        {
          img: img5,
          title: 'image 5',
          text: 'Saree: Six yards of pure elegance.',
        },
        {
          img: img6,
          title: 'image 6',
          text: 'A timeless piece of art',
        },
        {
          img: img7,
          title: 'image 7',
          text: 'A symbol of grace and femininity.',
        },
      ];

    return (
        <>
            <Box sx={{ width: '100%', minHeight: 829}}>
                <Masonry columns={imagesInRow} spacing={1} sx={{margin: '10px'}}>
                    {itemData.map((item, index) => (
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