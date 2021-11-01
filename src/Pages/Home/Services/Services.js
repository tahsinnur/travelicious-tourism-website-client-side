import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-tor-86842.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className="container">
            <div className="pt-5 pb-4 text-center">
                <h1 style={{ color: "tomato" }}>We offered best services
                </h1>
                <p className="text-secondary fs-5">Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-3 pb-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;