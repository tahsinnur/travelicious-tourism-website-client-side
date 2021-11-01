import React from 'react';

const About = () => {
    return (
        <div id="about" className="container">
            <div className="pt-5 pb-4 text-center">
                <h1 style={{ color: "tomato" }}>About Us</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-5">
                <div className="col">
                    <img src="https://preview.colorlib.com/theme/gotrip/assets/img/service/xsupport-img.jpg.pagespeed.ic.KVE5xRQ1QZ.webp" alt="" />
                </div>
                <div className="col text-start d-flex flex-column justify-content-center">
                    <p className="text-secondary fs-5 py-3">About Our Company</p>
                    <h1 className="fw-bold">We are Travelicious</h1>
                    <h1 className="fw-bold">Travels Support Company</h1>
                    <p className="text-secondary fs-5 py-4">Travelicious is the country’s one of the first and leading online travel aggregator. We had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.</p>
                </div>
            </div>
        </div>
    );
};

export default About;