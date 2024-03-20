import React from "react";

import CustomerReviews from "../Components/CustomerReviews";

const AboutUs = () => {
    return (
        <>
            <div className="about-us-page-div">
                <p style={{ fontWeight: 'bold', margin: 0, fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Welcome to VM Couture, your premier destination for high-quality sarees online. </p>
                <p style={{ fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>My name is Arra Yamini Reddy, and I'm thrilled to personally welcome you to our platform. At VM Couture, we take pride in offering a curated selection of sarees crafted with the utmost care and attention to detail.</p>
                <p style={{ fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Driven by our commitment to excellence, we continuously observe and analyze our customers' behaviors, preferences, and feedback. From likes and dislikes to reviews and trends, we pay close attention to every aspect of our customers' interactions with our platform. By understanding their unique styles, color preferences, and design choices, we strive to tailor our offerings to meet their needs and exceed their expectations.</p>
                <p style={{ fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Whether you're browsing for a special occasion or adding to your everyday wardrobe, we invite you to explore our collection of sarees and discover the perfect piece that reflects your individual style. Feel free to reach out to us with any questions or inquiries – we're here to assist you every step of the way.</p>
                <p style={{ fontSize: '20px', fontFamily: 'Verdana, sans-serif' }}>Thank you for choosing VM Couture for your saree needs.</p>
            </div>
            <CustomerReviews/>
        </>
    );
}

export default AboutUs;