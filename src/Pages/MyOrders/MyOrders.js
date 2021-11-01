import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [usersBookingInfo, setUsersBookingInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
        fetch("https://shrouded-tor-86842.herokuapp.com/bookingInfo")
        .then(res => res.json())
        .then(data => setUsersBookingInfo(data))
    }, [])

    useEffect(()=>{
        const matchedInfo = usersBookingInfo.filter(userBookingInfo => userBookingInfo.userEmail === user.email);
        setUserInfo(matchedInfo);
    }, [user.email, usersBookingInfo])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://shrouded-tor-86842.herokuapp.com/bookingInfo/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remaining = userInfo.filter(userInfo => userInfo._id !== id);
                    setUserInfo(remaining);
                }

            })
        }     
    }
    
    return (
        <div className="container">
            <h1>My Orders</h1>
            {
                userInfo.map(user => <Table striped bordered hover key={user._id}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.userAddress}</td>
                            <td>{user.userPhoneNumber}</td>
                            <td>{user.status}</td>
                            <td><button onClick={() => handleDelete(user._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </Table>)
            }
        </div>
    );
};

export default MyOrders;