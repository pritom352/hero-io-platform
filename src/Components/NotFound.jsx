import React from 'react';
import error from '../assets/error-404.png';
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className=' flex flex-col justify-center items-center mt-20 '>
            <img className=' w-fit' src={error} alt="" />
            <p className=' text-4xl font-bold mt-6 mb-2'>Oops, page not found!</p>
            <p>The page you are looking for is not available</p>
            <Link className=' border px-4 py-3 rounded-xl mt-6  bg-purple-400 text-white font-semibold' to={"/"}>Go Back</Link>
        </div>
    );
};

export default NotFound;