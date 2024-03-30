import React from "react";

import img1 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/ContactPagePics/kalyaniSareepic.jpg";
import img2 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/ContactPagePics/OrangeSareeWomen.png";
import img3 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/ContactPagePics/RedSareeWomen.png";

import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <div className="contactUs-page-container">
                <div className="contactUs-page-container-item">
                    <div style={{ textAlign: 'center' }}>
                        <PlaceIcon style={{ fontSize: '85px' }} />
                        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>WE ARE LOCATED AT</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Sai Nagar Colony,</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Hyderabad</p>
                    </div>
                </div>

                <div className="contactUs-page-container-item">
                    <img src={img1} alt="not loading" style={{ objectFit: 'cover' }} />
                </div>

                <div className="contactUs-page-container-item">
                    <div style={{ textAlign: 'center' }}>
                        <WhatsAppIcon style={{ fontSize: '85px' }} />
                        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>WHATSAPP US</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>8688026814</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>EMAIL: buntyyeshwanth123@gmail.com</p>
                    </div>
                </div>

                <div className="contactUs-page-container-item">
                    <img src={img2} alt="not loading" style={{ objectFit: 'cover' }} />
                </div>

                <div className="contactUs-page-container-item">
                    <div style={{ textAlign: 'center' }}>
                        <AccessAlarmIcon style={{ fontSize: '85px' }} />
                        <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>WE ARE AVAILABLE</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Monday-Sunday</p>
                        <p style={{ margin: 0, fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>9:30 am - 11:00 pm</p>
                    </div>
                </div>

                <div className="contactUs-page-container-item">
                    <img src={img3} alt="not loading" style={{ objectFit: 'cover' }} />
                </div>
            </div>

            <div style={{ backgroundColor: 'black', color: 'white', width: '100%' }}>
                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif', paddingBottom: '10px' }}>FOLLOW US TO GET THE LATEST UPDATES</p>
                <a href="https://www.instagram.com/____iamyesh__/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ fontSize: 85, color: '#cd486b' }} />
                </a>
            </div>
        </>
    );
}

export default ContactUs;