import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Cover/Cover';
import shop from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuCard from '../MenuCard/MenuCard';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const OurShop = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };



    const categories = ['pizza', 'soup', 'desert', 'salad'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);


    const [pizzaMenu, setPizzaMenu] = useState([]);
    const [saladMenu, setSaladMenu] = useState([]);
    const [soupMenu, setSoupMenu] = useState([]);
    const [drinksMenu, setDrinksMenu] = useState([]);
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

                setDessertMenu(dessertItems);
                setSaladMenu(saladItems);
                setPizzaMenu(pizzaItems);
                setSoupMenu(soupItems)
            })
    }, [])
    return (
        <div className='mb-20 '>
            <Helmet><title>Bistro | Shop</title></Helmet>
            <Cover img={shop} title='OUR SHOP' description='Would you like to try a dish?'></Cover>

            <div className='mt-5 text-center'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>

                        <Tab>Salad</Tab>
                    </TabList>
                    <TabPanel>
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>
                                    {
                                        pizzaMenu.map(item => <MenuCard item={item}></MenuCard>)
                                    }
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>
                                    {
                                        soupMenu.map(item => <MenuCard item={item}></MenuCard>)
                                    }
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </TabPanel>
                    <TabPanel>
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>
                                    {
                                        dessertMenu.map(item => <MenuCard item={item}></MenuCard>)
                                    }
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </TabPanel>

                    <TabPanel>
                        <Swiper
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>
                                    {
                                        saladMenu.map(item => <MenuCard item={item}></MenuCard>)
                                    }
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default OurShop;