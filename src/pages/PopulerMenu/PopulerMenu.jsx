import React, { useEffect, useState } from 'react';

const PopulerMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === 'popular');
                setMenu(populerItems)
            })
    }, [])


    return (
        <div className='mb-10'>
            <h1 className='text-center text-2xl font-bold mb-5'>POPULAR MENU</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
                    menu.map(item =>
                        <div className='flex'>
                            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={item.image} alt="" />
                            <div>
                                <h3>{item.name}-------</h3>
                                <p>{item.recipe}</p>
                            </div>
                            <p className='text-yellow-500'>${item.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopulerMenu;