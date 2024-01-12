import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const DashBoard = props => {
    const [cart] = useCart();

    const isAdmin = true;
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                {
                    isAdmin ? <>
                    
                    <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/additems">Add Items</NavLink></li>
                <li><NavLink to="/dashboard/manageItems">Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/manageBookings">Manage Bookings</NavLink></li>
                <li><NavLink to="/dashboard/users">All Users</NavLink></li>
                    </> : 
                    
                    <>
                    
                    <div className='divider'></div>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                    
                    </>
                }
              
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