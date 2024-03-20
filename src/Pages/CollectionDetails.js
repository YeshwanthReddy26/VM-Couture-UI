import React from "react";

import Box from '@mui/material/Box';
import { Row } from "react-bootstrap";

const CollectionDetails = ({ item }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    width: '100%',
                    marginTop: { xs: '0px', sm: '20px' },
                    marginLeft: { xs: '0px', sm: '10px' },
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
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
                    <Row style={{display: 'flex'}}>
                        <h1 style={{ fontSize: '36px' }}>{item.text}</h1>
                    </Row>

                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>{item.price}</h2>
                        <span style={{ fontSize: '14px', marginLeft: '15px' }}>MRP (Inclusive of all taxes)</span>
                    </Row>

                    <Row style={{ display: 'flex' }}>
                        <span style={{ fontSize: '14px' }}>Product-ID: {item.productId}</span>
                    </Row>
                </div>

            </Box>


        </>

    );
}

export default CollectionDetails;