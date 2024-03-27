import React from "react";

const NotFound = () => {

    return (
        <>
            <div
                style={{height: '750px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
                <div>
                    <p style={{ fontWeight: 'bold', margin: 0, fontSize: '44px', fontFamily: 'Arial, sans-serif' }}>Oops, Looks like we have lost this page. But not your saree</p>
                    <a href="http://localhost:3000/" style={{ fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Get back to Shopping Home Page</a>
                </div>
            </div>
        </>

    );
}

export default NotFound;