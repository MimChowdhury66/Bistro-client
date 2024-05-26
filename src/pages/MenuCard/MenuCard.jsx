import React from 'react';

const MenuCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ name}</h2>
                    <p>{ recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;