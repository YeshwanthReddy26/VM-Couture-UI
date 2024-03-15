import React from "react";

import Box from '@mui/material/Box';

const NotFound = () => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 600,
                    width: '100%',
                }}
            >
                <div>
                    <p style={{ fontWeight: 'bold', margin: 0, fontSize: '44px', fontFamily: 'Arial, sans-serif' }}>Oops, Looks like we have lost this page. But not your saree</p>
                    <a href="http://localhost:3000/" style={{ marginLeft: '200px', marginRight: '200px', fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Get back to Shopping Home Page</a>
                </div>
            </Box>
        </>

    );
}

export default NotFound;