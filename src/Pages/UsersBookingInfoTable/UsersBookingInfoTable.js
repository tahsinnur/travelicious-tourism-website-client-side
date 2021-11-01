import React from 'react';
import { Table } from 'react-bootstrap';

const UsersBookingInfoTable = ({ userBookingInfo }) => {
    const {_id, userName, userEmail, userAddress, userPhoneNumber, status } = userBookingInfo;
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td>{userName}</td>
                        <td>{userEmail}</td>
                        <td>{userAddress}</td>
                        <td>{userPhoneNumber}</td>
                        <td>{status}</td>
                        <td><button>Update</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default UsersBookingInfoTable;