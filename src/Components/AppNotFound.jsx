import React from 'react';
import notFound from "../assets/App-Error.png"
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className=' flex flex-col items-center'>
            <img className=' w-fit' src={notFound} alt="" />
            <h1 className=' text-4xl font-bold '>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <Link className=' rounded-xl mt-6  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 py-2 rounded-xlbg-purple-400  font-semibold' to={"/"}>Go Back</Link>
        </div>
    );
};

export default AppNotFound;