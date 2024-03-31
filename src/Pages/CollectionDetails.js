import { React, useState } from 'react';
import { replaceSpaceWithHyphen } from '../Utils/BaseUtils';
import '../css/CollectionDetails.css'
import IosShareIcon from '@mui/icons-material/IosShare';
import ShareMenuItem from '../Components/ShareMenuItem';

const CollectionDetails = ({ item }) => {
    const totalCollectionImages = item.collectionImages;
    const [currentDisplayImageUrl, setCurrentDisplayImageUrl] = useState(null);
    const [shareMenuItemAnchorEl, setShareMenuItemAnchorEl] = useState(null);

    const handleImageClick = (imageUrl) => {
        setCurrentDisplayImageUrl(imageUrl);
    };

    const handleShareIconClick = (event) => {
        setShareMenuItemAnchorEl(event.currentTarget);
    };

    const sellerProductsLink = "http://localhost:3000/" + replaceSpaceWithHyphen(item.seller);

    const zoom = (e) => {
        const zoomer = e.currentTarget;
        let offsetX, offsetY;

        if (e.nativeEvent.offsetX !== undefined) {
            offsetX = e.nativeEvent.offsetX;
            offsetY = e.nativeEvent.offsetY;
        } else {
            offsetX = e.touches[0].pageX;
            offsetY = e.touches[0].pageY;
        }

        const x = (offsetX / zoomer.offsetWidth) * 100;
        const y = (offsetY / zoomer.offsetHeight) * 100;

        zoomer.style.backgroundPosition = `${x}% ${y}%`;
    };

    return (
        <>
            <div className="collection-item-page">
                <div className="collection-item-div1">
                    {totalCollectionImages.map((imageUrl) => (
                        <img
                            src={imageUrl}
                            alt="SelectedImage"
                            className="collection-item-images"
                            onClick={() => handleImageClick(imageUrl)}
                        />
                    ))}
                </div>

                <div
                    className="collection-item-div2 zoom"
                    onMouseMove={zoom}
                    style={{
                        backgroundImage: `url(${currentDisplayImageUrl === null ? item.displayImage : currentDisplayImageUrl})`
                    }}
                >
                    <img
                        src={currentDisplayImageUrl === null ? item.displayImage : currentDisplayImageUrl}
                        alt="SelectedImage1"
                        className="collection-item-image"
                        style={{
                            width: '100%',
                            display: 'block',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <div className='share-product-icon'>
                        <IosShareIcon onClick={handleShareIconClick} />
                    </div>

                    <ShareMenuItem
                        shareMenuItemAnchorEl={shareMenuItemAnchorEl}
                        setShareMenuItemAnchorEl={setShareMenuItemAnchorEl}
                    />
                </div>

                <div className="collection-item-div3">
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <span className="collection-item-name">{item.text}</span>
                    </div>

                    <div className="price-tag">
                        <p className="mrp-price">{item.price}</p>
                        <span className="mrp-details">MRP (Inclusive of all taxes)</span>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <span className='product-id'>Product-ID: {item.productId}</span>
                    </div>

                    <div className="delivery-policy-div">
                        <div class="delivery-policy delivery">
                            <img alt="logo" class="deliver-icon" src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw421157f7/images/delivery.svg" title="" />
                            <span class="check-delivery-status">
                                {item.deliveryCharges === 0
                                    ? "Free delivery within India"
                                    : `${item.deliveryCharges}/- Delivery Charges`}
                            </span>
                        </div>
                        <div class="delivery-policy return">
                            <img alt="logo" class="deliver-icon" src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw9599825a/images/return.svg" title="" />
                            <span class="check-delivery-status">
                                {item.returnAvailableDays === 0
                                    ? "Return not available"
                                    : `Easy returns in ${item.returnAvailableDays} days`}
                            </span>
                        </div>
                    </div>

                    <div className='seller-details'>
                        <span >Seller: {item.seller}</span>
                        <a href={sellerProductsLink} style={{ fontSize: '13px', fontFamily: 'Verdana, sans-serif' }} target="_blank" rel="noopener noreferrer">View other products from this seller</a>
                    </div>

                </div>

            </div>


        </>

    );
}

export default CollectionDetails;