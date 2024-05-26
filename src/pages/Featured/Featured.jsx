import React from 'react';
import img from '../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item lg:bg-fixed mb-10'>
             <h1 className='text-center text-2xl font-bold mb-5'>FROM OUR MENU</h1>
             <div className='lg:flex lg:gap-14 justify-center items-center lg:pb-20 lg:pt-12 px-16 lg:px-36 '>
           
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className='text-white'>
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className='btn'>Read More</button>
            </div>
        </div>
       </div>
    );
};

export default Featured;