import React from 'react';

import { homePageItemsData } from '../Utils/Constants';
import { useNavigate } from "react-router-dom";
import { replaceSpaceWithHyphen } from '../Utils/BaseUtils';
import '../css/SellerProducts.css'

const SellerProducts = ({sellerDetails}) => {

    const navigate = useNavigate();

    const handleSellerProductsPageCollectionClick = (item) => {
        navigate("/" + replaceSpaceWithHyphen(item.text));
    };

    return (
        <>
            <div style={{ width: '100%' }}>
                <div className='seller-products-page-description'>
                    <div style={{fontSize: '25px', fontFamily: 'sans-serif'}}>WOMEN'S SAREES</div>
                    <div style={{fontSize: '20px', fontWeight:'bold', textTransform:'uppercase', color:'darkgoldenrod', fontFamily:'serif'}}>{sellerDetails["name"]}</div>
                    <div>{sellerDetails["description"]}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {homePageItemsData.map((item, index) => (
                        (item.seller === sellerDetails["name"]) && (
                            <div className="seller-products-page-image-container" key={index}>
                                <img
                                    className="seller-products-page-image"
                                    srcSet={`${item.displayImage}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.displayImage}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => handleSellerProductsPageCollectionClick(item)}
                                />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </>
    );
}

export default SellerProducts;
