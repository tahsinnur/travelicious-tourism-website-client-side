import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="col">
            <div className="card h-100 service-card border-0">
                <img style={{ height: "200px" }} src={img} className="card-img-top" alt="" />
                <div className="card-body" style={{textAlign:"left"}}>
                    <h3 className="card-title" style={{color:"#264247"}}>{name}</h3>
                    <p className="card-text fs-5 text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;