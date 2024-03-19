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
                    marginTop: '20px',
                    marginLeft: '10px',
                }}
            >
                <div 
                   style={{ 
                    width: '60%',
                }}>
                    <img
                        src={item.img}
                        alt="SelectedImage"
                        style={{
                            width: '100%',
                            height: '1050px',
                            display: 'block',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>

                <div style={{ width: '40%' }}>
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