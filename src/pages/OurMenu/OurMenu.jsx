import React, { useEffect, useState } from 'react';
import Banner3 from '../../assets/menu/banner3.jpg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import saladBg from '../../assets/menu/salad-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';


import { Helmet } from 'react-helmet-async'; import Cover from '../Cover/Cover';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import { Link } from 'react-router-dom';
const OurMenu = () => {
    const [pizzaMenu, setPizzaMenu] = useState([]);
    const [saladMenu, setSaladMenu] = useState([]);
    const [soupMenu, setSoupMenu] = useState([]);
    const [offeredMenu, setOfferedMenu] = useState([]);
    const [dessertMenu, setDessertMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const pizzaItems = data.filter(item => item.category === 'pizza');
                const saladItems = data.filter(item => item.category === 'salad');
                const soupItems = data.filter(item => item.category === 'soup');
                const dessertItems = data.filter(item => item.category === 'dessert');
                const offeredItems = data.filter(item => item.category === 'offered');
                setOfferedMenu(offeredItems);
                setDessertMenu(dessertItems);
                setSaladMenu(saladItems);
                setPizzaMenu(pizzaItems);
                setSoupMenu(soupItems)
            })
    }, [])
    return (
        <div className='mb-20 ' >
            <Helmet><title>Bistro | Menu</title></Helmet>
            <Cover img={Banner3} title='OUR MENU' description='Would you like to try a dish?'></Cover>
            <h1 className='text-center text-2xl font-bold mb-5 mt-5'>TODAY'S OFFER</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 mb-5'>

                {
                    offeredMenu.map(item =>
                        <div>
                            <div className='flex'>
                                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={item.image} alt="" />
                                <div>
                                    <h3>{item.name}-------</h3>
                                    <p>{item.recipe}</p>
                                </div>
                                <p className='text-yellow-500'>${item.price}</p>

                            </div>
                            {/* <div className=' mb-6 flex justify-center'>
                                <Link to={`/shop/${item.category}`}><button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>

                            </div> */}
                        </div>

                    )
                }

            </div>

            <Cover img={pizzaBg} title='PIZZA' description='Would you like to try a dish?'></Cover>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 mb-5'>
                {
                    pizzaMenu.map(item =>
                        <div>
                            <div className='flex'>
                                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={item.image} alt="" />
                                <div>
                                    <h3>{item.name}-------</h3>
                                    <p>{item.recipe}</p>
                                </div>
                                <p className='text-yellow-500'>${item.price}</p>

                            </div>
                            <div className=' mb-6 flex justify-center'>
                                <Link to={`/shop/${item.category}`}><button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>

                            </div>
                        </div>
                    )
                }
            </div>

            <Cover img={saladBg} title='SALAD' description='Would you like to try a dish?'></Cover>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 mb-5'>
                {
                    saladMenu.map(item =>
                        <div>
                            <div className='flex'>
                                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={item.image} alt="" />
                                <div>
                                    <h3>{item.name}-------</h3>
                                    <p>{item.recipe}</p>
                                </div>
                                <p className='text-yellow-500'>${item.price}</p>

                            </div>
                            <div className=' mb-6 flex justify-center'>
                                <Link to={`/shop/${item.category}`}><button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>

                            </div>
                        </div>
                    )
                }
            </div>

            <Cover img={soupBg} title='Soup' description='Would you like to try a dish?'></Cover>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 mb-5'>
                {
                    soupMenu.map(item =>
                        <div>
                            <div className='flex'>
                                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={item.image} alt="" />
                                <div>
                                    <h3>{item.name}-------</h3>
                                    <p>{item.recipe}</p>
                                </div>
                                <p className='text-yellow-500'>${item.price}</p>

                            </div>
                            <div className=' mb-6 flex justify-center'>
                                <Link to={`/shop/${item.category}`}><button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>

                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default OurMenu;