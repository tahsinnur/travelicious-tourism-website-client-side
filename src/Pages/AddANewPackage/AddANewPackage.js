import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddANewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-tor-86842.herokuapp.com/tourPackages', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
            }
        })
    };
    return (
        <div className="container add-service">
            <h1 className="pb-4" style={{ color: "tomato" }}>Add A New Tour Package</h1>
            <form className="fs-5" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Tour Package Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <label htmlFor="">Give A Description</label>
                <textarea {...register("description")} />
                <label htmlFor="">Costing</label>
                <input type="number" {...register("cost")} />
                <label htmlFor="">Image Url</label>
                <input {...register("img")} />
                <input className="border-0 text-white py-2" style={{ backgroundColor: "tomato", width: "20%" }} type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddANewPackage;