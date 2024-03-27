import React from "react";
import '../css/CollectionDetails.css'

const CollectionDetails = ({ item }) => {

    return (
        <>
            <div className="collection-item-page">
                <div className="collection-item-div1">
                    <img
                        src={item.img}
                        alt="SelectedImage"
                        style={{
                            width: '100%',
                            display: 'block',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        className="collection-item-image"
                    />
                </div>

                <div className="collection-item-div2">
                    <div style={{ display: 'flex', marginBottom: '10px'}}>
                        <span style={{ fontSize: '36px', textAlign: 'left', lineHeight: '40px'}}>{item.text}</span>
                    </div>

                    <div className="price-tag">
                        <p className="mrp-price">{item.price}</p>
                        <span className="mrp-details">MRP (Inclusive of all taxes)</span>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <span style={{ fontSize: '14px', color: '#666561' }}>Product-ID: {item.productId}</span>
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
                </div>

            </div>


        </>

    );
}

export default CollectionDetails;