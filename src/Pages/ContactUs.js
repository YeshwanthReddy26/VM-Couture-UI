import React from "react";

import { Box } from "@mui/material";

import img1 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/kalyaniSareepic.jpg";
import img2 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/OrangeSareeWomen.png";
import img3 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/RedSareeWomen.png";

import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
    return (
        <>
            <Box
                height={500}
                width={'100%'}
                display="flex"
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 500,
                        width: '100%',
                    }}
                >
                    <div>
                        <PlaceIcon sx={{ fontSize: 85 }} />
                        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>WE ARE LOCATED AT</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Rocktown colony,</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Hyderabad</p>
                    </div>
                </Box>

                <Box height={500} width={'100%'}>
                    <img src={img1} alt="not loading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 500,
                        width: '100%',
                    }}
                >
                    <div>
                        <WhatsAppIcon sx={{ fontSize: 85 }} />
                        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>WHATSAPP US</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>8688026814</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>EMAIL: buntyyeshwanth123@gmail.com</p>
                    </div>
                </Box>
            </Box>
            <Box
                height={500}
                width={'100%'}
                // my={0}
                display="flex"
            // alignItems="center"
            // sx={{ border: '2px solid grey' }}
            >
                <Box height={500} width={'100%'}>
                    <img src={img2} alt="not loading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 500,
                        width: '100%',
                    }}
                >
                    <div>
                        <AccessAlarmIcon sx={{ fontSize: 85 }} />
                        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>WE ARE AVAILABLE</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Monday-Sunday</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>9:30 am - 11:00 pm</p>
                    </div>
                </Box>
                <Box height={500} width={'100%'}>
                    <img src={img3} alt="not loading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 200,
                    width: '100%',
                    backgroundColor: 'black', color: 'white'
                }}
            >
                <div>
                    <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif', paddingBottom: '10px' }}>FOLLOW US TO GET THE LATEST UPDATES</p>
                    <a href="https://www.instagram.com/____iamyesh__/" >
                        <InstagramIcon sx={{ fontSize: 85, color: '#cd486b' }} />
                    </a>
                </div>
            </Box>
        </>
    );
}

export default ContactUs;