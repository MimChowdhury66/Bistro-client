import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Header = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar fixed z-30 max-w-screen-xl bg-opacity-35  bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Home</NavLink></li>
                            {
                                user ?
                                    <>
                                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Contact Us</NavLink></li>
                                        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Dashboard</NavLink></li>
                                        <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Our Menu</NavLink></li>
                                        <li><NavLink to="/shop/pizza" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Our Shop</NavLink></li>
                                        <li><button onClick={logout} className="btn lg:text-xl text-black  bg-blue-200 ">Logout</button> </li></>
                                    :
                                    <Link to='/login'><button className="btn lg:text-xl text-white  bg-blue-400 ">Log In</button></Link>
                            }
                        </ul>
                    </div>
                    <a className="text-white text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center text-white hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Home</NavLink></li>
                        <Tooltip id="my-tooltip" />

                        {
                            user ? <>
                                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Contact Us</NavLink></li>
                                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Dashboard</NavLink></li>
                                <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Our Menu</NavLink></li>
                                <li><NavLink to="/shop/pizza" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'font-bold'} >Our Shop</NavLink></li>
                                <div data-tooltip-id="my-tooltip" data-tooltip-place="right" data-tooltip-content={user?.displayName || 'name not found'} className="dropdown dropdown-end  z-[4]" >
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                                        <div className="w-10 rounded-full "  >
                                            <img src={user?.photoURL || 'https://avatars.githubusercontent.com/u/86664820?v=4'} alt="" />

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button onClick={logout} className="btn btn-sm text-black  bg-blue-200">Logout</button></li>
                                    </ul>
                                </div>
                            </>

                                :
                                <Link to='/login'><button className="btn lg:text-xl text-white  bg-blue-400 ">Log In</button></Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;