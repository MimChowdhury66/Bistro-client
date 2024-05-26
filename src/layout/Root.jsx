import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';

const Root = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    const noHeadFoot = location.pathname.includes('register')
    return (
        <div>
            {noHeaderFooter || noHeadFoot|| <Header></Header>}
          

            <Outlet></Outlet>
            {noHeaderFooter || noHeadFoot|| <Footer></Footer>}
           
        </div>
    );
};

export default Root;