import React from 'react';
import error from '../assets/error-404.png';
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className=' flex flex-col justify-center items-center mt-20 '>
            <img className=' w-fit' src={error} alt="" />
            <p className=' text-4xl font-bold mt-6 mb-2'>Oops, page not found!</p>
            <p>The page you are looking for is not available</p>
            <Link className='rounded-xl mt-6 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 py-2   font-semibold' to={"/"}>Go Back</Link>
        </div>
    );
};

export default NotFound;