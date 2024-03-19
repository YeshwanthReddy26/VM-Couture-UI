import React from "react";

import Box from '@mui/material/Box';

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
                <div 
                   style={{ 
                    width: '100%',
                    marginBottom: { xs: '20px', sm: 0 },
                    marginRight: { xs: 0, sm: '20px' },
                }}>
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

                <div style={{ width: '100%' }}>
                    <div>
                        <h1 style={{fontSize: '36px', marginBottom: '10px'}}>{item.text}</h1>
                    </div>

                    <div style={{display: 'inline-flex', alignItems: 'center'}}>
                        <h2>
                            {item.price}
                        </h2>
                        <span style={{fontSize: '14px', marginLeft: '15px'}}>MRP (Inclusive of all taxes)</span>
                    </div>
                </div>

            </Box>

        </>

    );
}

export default CollectionDetails;