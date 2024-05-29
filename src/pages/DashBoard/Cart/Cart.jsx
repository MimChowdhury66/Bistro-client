import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/carts?email=${user.email}`)
            return res.data;

        }

    });
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });
    }


    return (
        <div>
            <h1 className='text-3xl text-center mb-4 font-bold'>This is my cart</h1>
            <hr />
            <div className='lg:flex justify-evenly mt-5'>
                <h1 className='text-2xl'>Total Orders: {cart.length} </h1>
                <h1 className='text-2xl'>Total price: ${totalPrice} </h1>
                <button className='btn'>Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th> Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart.map((item, index) =>
                                    // console.log(item);
                                    <tr>

                                        <th>{index + 1}</th>
                                        <td><div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div></td>
                                        <td>{item.name} </td>
                                        <td>${item.price}</td>

                                        <td className="flex gap-2 m-2">

                                            <button onClick={() => handleDelete(item._id)} className="btn text-black  "><FaTrash className='text-red-700'></FaTrash></button>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;