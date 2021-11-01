import React from 'react';
import { Link } from 'react-router-dom';

const TourPackage = ( {tourpackage} ) => {
    const { _id, img, name, description, cost } = tourpackage;

    return (
        <div className="col">
            <div className="card h-100 service-card border-0">
                <img style={{ height: "250px" }} src={img} className="card-img-top" alt="" />
                <div className="card-body" style={{textAlign:"left"}}>
                    <h3 className="card-title" style={{color:"#264247"}}>{name}</h3>
                    <p className="card-text fs-5 text-secondary">{description.slice(0,100)}</p>
                    <h4 className="card-title" style={{color:"#264247"}}>Cost: ${cost} /person</h4>
                    <Link to={`/booking/${_id}`}><button style={{ backgroundColor: "tomato" }} className="border-0 rounded text-white fs-5 px-4 py-2 mt-4">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TourPackage;