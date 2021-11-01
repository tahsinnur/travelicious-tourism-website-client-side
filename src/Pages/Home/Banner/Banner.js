import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import B1 from '../../../images/Banner/banner1.jpg';
import B2 from '../../../images/Banner/banner2.jpg';
import B3 from '../../../images/Banner/banner3.jpg';

const Banner = () => {
    return (
        <Container fluid className="p-0">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        height="800px"
                        className="d-block w-100"
                        src={B2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" style={{ color:"tomato", fontSize:"50px"}}>Welcome to Travelicious Travels.</h1>
                        <p className="fs-4">Have stories to tell not stuff to show.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="800px"
                        className="d-block w-100"
                        src={B3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" style={{ color:"tomato", fontSize:"50px"}}>Travel is my therapy.</h1>
                        <p className="fs-4">Go, fly, roam, travel, voyage, explore, journey, discover, adventure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="800px"
                        className="d-block w-100"
                        src={B1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" style={{ color:"tomato", fontSize:"50px"}}>Adventures are the best way to learn.</h1>
                        <p className="fs-4">The goal is to die with memories not dreams.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;