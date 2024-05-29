import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartPlus, FaHome } from "react-icons/fa";

const div = () => {
    return (
        <div className='flex'>
            <div className='w-72 min-h-screen bg-[#D1A054]'>
                <ul className="menu grid gap-3">
                    <li><NavLink to='/dashboard/user'><FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaHome /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/cart'><FaCartPlus /> My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'><FaCartPlus /> My Bookings</NavLink></li>
                    <div className="divider"></div> 
                    <li><NavLink to='/'><FaHome />  Home</NavLink></li>
</ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default div;