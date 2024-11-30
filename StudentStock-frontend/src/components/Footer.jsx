import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white bg-black'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
        <div className='flex'>
            <Link to='/' className='flex'>
           <img className='w-28 my-2' src="./public/logo.png" alt="" />
            </Link>
        </div>
        <p className='w-full md:w-2/3 text-gray-300 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla atque reiciendis reprehenderit veniam aut molestiae deleniti est exercitationem modi quas iusto, explicabo minima consequuntur nesciunt commodi assumenda ducimus qui laudantium!</p>
        </div>

        <div>
        <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-300'>
                <li className='cursor-pointer'>
                <Link to='/' className='flex'>Home</Link></li>
                <li className='cursor-pointer'>About us</li>
                <li className='cursor-pointer'>Contact us</li>
                <li className='cursor-pointer'>Privacy policy</li>
            </ul>
        
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-2 text-gray-300'>
                <li>+91 9097984931</li>
                <li>saurabh030198@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 © Saurabh Kumar - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
