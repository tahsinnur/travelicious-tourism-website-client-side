import React, { useEffect, useState } from 'react';
import UsersBookingInfoTable from '../UsersBookingInfoTable/UsersBookingInfoTable';

const ManageOrders = () => {
    const [usersBookingInfo, setUsersBookingInfo] = useState([]);

    useEffect(()=>{
        fetch("https://shrouded-tor-86842.herokuapp.com/bookingInfo")
        .then(res => res.json())
        .then(data => setUsersBookingInfo(data))
    }, [])

    return (
        <div>
            <h1>Manage Orders</h1>
            {
                usersBookingInfo.map(userBookingInfo => <UsersBookingInfoTable
                    key={userBookingInfo._id}
                    userBookingInfo={userBookingInfo}
                ></UsersBookingInfoTable>)
            }
        </div>
    );
};

export default ManageOrders;