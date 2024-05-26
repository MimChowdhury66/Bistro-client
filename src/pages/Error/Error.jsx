import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center">
            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl text-black font-bold">404!! Not Found. </h1>
                        <Link to='/'>            <button className="mt-3 btn btn-outline">Go Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;