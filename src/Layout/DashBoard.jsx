import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = props => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                <li><NavLink to="/dashboard/userHome">User Home</NavLink></li>
                <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                <li><NavLink to="/dashboard/review">Add a Review</NavLink></li>
                <li><NavLink to="/dashboard/bookings">My Bookings</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

DashBoard.propTypes = {
    
};

export default DashBoard;