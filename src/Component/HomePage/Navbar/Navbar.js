import React from 'react';
// import { FaStripeS } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className='bg-[#F8492F]'>
            <div className='flex justify-around'>
                <div>
                    <ul className='flex gap-10 pt-5 text-white'>
                        <li>Seller Center</li>
                        <li>Start Selling</li>
                        <li>Download</li>
                        <li>Follow Us</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-10 pt-5 text-white'>
                        <li>Notification</li>
                        <li>Help</li>
                        <li>English</li>
                        <li>Sign Up</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;