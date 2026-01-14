import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white p-6 md:p-12 text-center mt-20'>
        <div className='flex flex-col md:flex-row justify-around items-center md:text-left mb-12'>
            <div className='max-w-2xs'>
                <h2 className='text-3xl font-semibold mb-4'>CS — Ticket System</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className=' grid gap-8 mt-8 grid-cols-1 md:grid-cols-4'>
                    <div>
                <h2 className='text-xl font-semibold mb-2'>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>Services</h2>
                <ul>
                    <li>Product and Services</li>
                    <li>Customer Stories</li>
                    <li>Download Apps</li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>Information</h2>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Join Us</li>
                </ul>
            </div>
            
            <div>
                <h2 className='text-xl font-semibold mb-2'>Social Links</h2>
                <p>@CS-- Ticket System</p>
                <p>@CS-- Ticket System</p>
                <p>@CS-- Ticket System</p>
                <p>support@cst.com</p>
             
            </div>
            </div>
        
        </div>
        <p>
            © 2025 CS — Ticket System. All rights reserved.
        </p>
        
    </div>
  )
}

export default Footer