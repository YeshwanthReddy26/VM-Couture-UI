import React from 'react';
import { homePageItemsData } from '../Utils/Constants';
import { useNavigate } from 'react-router-dom';
import { replaceSpaceWithHyphen } from '../Utils/BaseUtils';
import Slider from '@mui/material/Slider';
import '../css/NewPicks.css'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import { Box } from '@mui/system';

const minDistance = 10;
const sortingFields = [
  'Price, low to high',
  'Price, high to low',
];

const NewPicks = () => {
  const navigate = useNavigate();
  const [priceRangeValue, setPriceRangeValue] = React.useState([0, 30000]);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleNewPicksPageCollectionClick = (item) => {
    navigate("/" + replaceSpaceWithHyphen(item.text));
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

  const [sortByAnchorEl, setSortByAnchorEl] = React.useState(null);
  const [filterDrawerOpen, setFilterDrawerOpen] = React.useState(null);
  const sortByOpen = Boolean(sortByAnchorEl);
  const handleSortByClick = (event) => {
    setSortByAnchorEl(event.currentTarget);
  };

  const handleFilterClick = (newOpen) => () => {
    setFilterDrawerOpen(newOpen);
  };

  const handleSortByClose = () => {
    setSortByAnchorEl(null);
  };

  const handleSortByElementClick = (e) => {
    setSortByAnchorEl(null);
    console.log(e.target.innerText);
  };

  function getFiltersDiv() {
    return (
      <>
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
          <ul className="newpicks-all-colors-filter">
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: '#C8A2C8' }}></span>
              <label className='newpicks-color-label'>Lilac <span>(1)</span></label>
            </li>
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: 'peachpuff' }}></span>
              <label className='newpicks-color-label'>Peach <span>(0)</span></label>
            </li>
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: 'black' }}></span>
              <label className='newpicks-color-label'>Black <span>(2)</span></label>
            </li>
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: 'green' }}></span>
              <label className='newpicks-color-label'>Green <span>(0)</span></label>
            </li>
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: 'orange' }}></span>
              <label className='newpicks-color-label'>Orange <span>(1)</span></label>
            </li>
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: 'gold' }}></span>
              <label className='newpicks-color-label'>Gold <span>(0)</span></label>
            </li>
            <li className='newpicks-color-filter'>
              <span className='newpicks-color-circle' style={{ backgroundColor: 'yellow' }}></span>
              <label className='newpicks-color-label'>Yellow <span>(4)</span></label>
            </li>
          </ul>
        </div>

      </>
    );
  }

  return (
    <>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>

        <div className='filters-div'>
          {getFiltersDiv()}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '33px',
              paddingLeft: '15px'
            }}>

            <div className='total-products-info'>
              <p>5 products found</p>
            </div>

            <div className='sortby-button' onClick={handleSortByClick}>
              <p style={{ textAlign: 'start' }}>Sort by</p>
              <KeyboardArrowDownIcon />
            </div>

            <div className='filter-button' onClick={handleFilterClick(true)}>
              <p style={{ textAlign: 'start' }}>Filter</p>
              <TuneIcon />
            </div>

            <Menu
              id="basic-menu"
              anchorEl={sortByAnchorEl}
              open={sortByOpen}
              onClose={handleSortByClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {sortingFields.map((name) => (
                <MenuItem
                  onClick={handleSortByElementClick}
                >
                  {name}
                </MenuItem>
              ))}
            </Menu>

            <Drawer open={filterDrawerOpen} onClose={handleFilterClick(false)}>
              <Box className="filters-drawer" width={300} sx={{ paddingLeft: '30px' }}>
                {getFiltersDiv()}
              </Box>
            </Drawer>
          </div>

          <hr className='newpicks-horizontal-line' />

          <div style={{ textAlign: 'start' }}>
            <ul style={{ marginBottom: '0px', padding: '0px 15px' }}>
              <li className='applied-filter'>
                Out of stock
              </li>
              <li className='applied-filter'>
                Green
              </li>
              <li style={{ textDecoration: 'underline', display: 'inline-block', margin: '0 5px 5px 0', cursor: 'pointer' }}>
                Clear all
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {homePageItemsData.map((item, index) => (
              <div className="newpicks-page-image-container" key={index}>
                <img
                  className="newpicks-page-image"
                  srcSet={`${item.displayImage}?w=162&auto=format&dpr=2 2x`}
                  src={`${item.displayImage}?w=162&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => handleNewPicksPageCollectionClick(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPicks;