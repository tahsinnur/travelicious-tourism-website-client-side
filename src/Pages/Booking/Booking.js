import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { bookingId } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [tourPackage, setTourPackage] = useState({});

    useEffect(() => {
        fetch(`https://shrouded-tor-86842.herokuapp.com/tourPackages/${bookingId}`)
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [bookingId])

    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-tor-86842.herokuapp.com/bookingInfo', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Successfully");
                    reset();
                }
            })
    };

    return (
        <div className="container add-service">
            <div className="pt-5 pb-4 text-center">
                <h1 className="pb-4" style={{ color: "tomato" }}>Book Your Trip Now</h1>
                <h1>{tourPackage.name}</h1>
                <img style={{ height: "400px" }} className="img-fluid" src={tourPackage?.img} alt="" />
                <p className="text-secondary fs-5 px-5">{tourPackage?.description}</p>
                <h3>Cost: {tourPackage.cost}</h3>
            </div>
            <form className="fs-5" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input type="text" {...register("userName")} defaultValue={user.displayName} />
                <label htmlFor="">Email</label>
                <input type="email" {...register("userEmail")} defaultValue={user.email} />
                <label htmlFor="">Address</label>
                <input type="text" {...register("userAddress")} />
                <label htmlFor="">Phone Number</label>
                <input type="number" {...register("userPhoneNumber")} />
                <label htmlFor="">Status</label>
                <input {...register("status")} defaultValue="Pending" />
                <input className="border-0 text-white py-2" style={{ backgroundColor: "tomato", width: "20%" }} type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default Booking;