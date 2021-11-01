import React, { useEffect, useState } from 'react';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [tourpackages, setTourPackages] = useState([]);

    useEffect( () => {
        fetch("https://shrouded-tor-86842.herokuapp.com/tourPackages")
        .then(res => res.json())
        .then(data => setTourPackages(data))
    }, [])

    return (
        <div id="packages" className="container">
            <div className="pt-5 pb-4 text-center">
                <h1 style={{ color: "tomato" }}>Featured Tour Packages</h1>
                <p className="text-secondary fs-5">Featured Places</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
            {
                    tourpackages.map(tourpackage => <TourPackage
                        key={tourpackage._id}
                        tourpackage={tourpackage}
                    ></TourPackage>)
                }
            </div>
        </div>
    );
};

export default TourPackages;