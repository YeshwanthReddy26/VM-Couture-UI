import React from "react";
import CustomerReviews from "../Components/CustomerReviews";
import '../css/AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div className="about-us-page-div">
                <p className="about-us-heading">Welcome to [Company Name]</p>
                <p className="about-us-heading">Your premier destination for high-quality sarees online. </p>
                <p className="about-us-description">My name is Chirra Yeshwanth Reddy, and I'm thrilled to personally welcome you to our platform. At [Company Name], we take pride in offering a curated selection of sarees crafted with the utmost care and attention to detail.</p>
                <p className="about-us-description">Driven by our commitment to excellence, we continuously observe and analyze our customers' behaviors, preferences, and feedback. From likes and dislikes to reviews and trends, we pay close attention to every aspect of our customers' interactions with our platform. By understanding their unique styles, color preferences, and design choices, we strive to tailor our offerings to meet their needs and exceed their expectations.</p>
                <p className="about-us-description">Whether you're browsing for a special occasion or adding to your everyday wardrobe, we invite you to explore our collection of sarees and discover the perfect piece that reflects your individual style. Feel free to reach out to us with any questions or inquiries – we're here to assist you every step of the way.</p>
                <p className="about-us-description">Thank you for choosing [Company Name] for your saree needs.</p>
            </div>
            <CustomerReviews />
        </>
    );
}

export default AboutUs;