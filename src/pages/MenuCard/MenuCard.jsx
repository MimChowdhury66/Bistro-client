import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const MenuCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/carts?email=${user.email}`)
            return res.data;

        }

    });


    const handleCart = food => {
        if (user && user.email) {
            const cartItem = {
                name, image, price,
                menuId: _id, email: user.email
            }
            // console.log(cartItem)
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                          
                            icon: "success",
                            title: `${name} added to Your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })


        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login first to add item into the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, confirm it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleCart(item)} className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;