import React from 'react';

import { homePageItemsData } from '../Utils/Constants';
import { useNavigate } from "react-router-dom";
import { replaceSpaceWithHyphen } from '../Utils/BaseUtils';
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleHomePageCollectionClick = (item) => {
    navigate(replaceSpaceWithHyphen(item.text));
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {homePageItemsData.map((item, index) => (
            <div className="home-page-image-container" key={index}>
              <img
                className="home-page-image"
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleHomePageCollectionClick(item)}
              />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Home;
