import React from 'react';

import { homePageItemsData } from '../Utils/Constants';
import { useNavigate } from "react-router-dom";
import { replaceSpaceWithHyphen } from '../Utils/BaseUtils';
import Slider from '@mui/material/Slider';
import '../css/Home.css'

const minDistance = 10;

const Home = () => {
  const navigate = useNavigate();
  const [priceRangeValue, setPriceRangeValue] = React.useState([0, 30000]);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleHomePageCollectionClick = (item) => {
    navigate(replaceSpaceWithHyphen(item.text));
  };

  const handlePriceRangeChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setPriceRangeValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPriceRangeValue([clamped - minDistance, clamped]);
      }
    } else {
      setPriceRangeValue(newValue);
    }
  };

  return (
    <>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '30%', marginTop: '50px', paddingLeft: '70px' }}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ textAlign: 'start' }}>Availability</h4>
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              <li style={{ textAlign: 'start' }}>
                <input type="checkbox" />
                <label>In stock <span>(14)</span></label>
              </li>
              <li style={{ textAlign: 'start' }}>
                <input type="checkbox" />
                <label>Out of stock <span>(0)</span></label>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ textAlign: 'start' }}>Price</h4>
            <Slider
              getAriaLabel={() => 'Minimum distance shift'}
              value={priceRangeValue}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
              color="secondary"
              max="30000"
              sx={{ width: "80%" }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ textAlign: 'start' }}>Color</h4>
            <ul className="all-colors-filter">
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'pink' }}></span>
                <label className='color-label'>Pink <span>(14)</span></label>
              </li>
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'peachpuff' }}></span>
                <label className='color-label'>Peach <span>(0)</span></label>
              </li>
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'black' }}></span>
                <label className='color-label'>Black <span>(2)</span></label>
              </li>
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'green' }}></span>
                <label className='color-label'>Green <span>(0)</span></label>
              </li>
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'orange' }}></span>
                <label className='color-label'>Orange <span>(1)</span></label>
              </li>
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'gold' }}></span>
                <label className='color-label'>Gold <span>(0)</span></label>
              </li>
              <li className='color-filter'>
                <span className='color-circle' style={{ backgroundColor: 'yellow' }}></span>
                <label className='color-label'>Yellow <span>(4)</span></label>
              </li>
            </ul>
          </div>
          
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {homePageItemsData.map((item, index) => (
            <div className="home-page-image-container" key={index}>
              <img
                className="home-page-image"
                srcSet={`${item.displayImage}?w=162&auto=format&dpr=2 2x`}
                src={`${item.displayImage}?w=162&auto=format`}
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
