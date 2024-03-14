import React from "react";

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import img1 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image1.png";
import img3 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image3.png";
import img4 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image4.png";
import img5 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image5.png";
import img6 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image6.png";
import img7 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image7.png";
import img8 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image8.png";
import img9 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/HomePagePics/image9.png";

const Home = () => {
    const itemData = [
        {
          img: img9,
          title: 'image 1',
        },
        {
          img: img4,
          title: 'image 3',
        },
        {
          img: img3,
          title: 'image 4',
        },
        {
          img: img5,
          title: 'image 5',
        },
        {
          img: img6,
          title: 'image 6',
        },
        {
          img: img7,
          title: 'image 7',
        },
        {
          img: img8,
          title: 'image 8',
        },
        {
          img: img1,
          title: 'image 9',
        },
      ];

    return (
        <>
            <Box sx={{ width: '100%', minHeight: 829}}>
                <Masonry columns={3} spacing={1} sx={{margin: '10px'}}>
                    {itemData.map((item, index) => (
                        <div key={index}>
                            <img
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            </Box>
        </>

    );
}

export default Home;