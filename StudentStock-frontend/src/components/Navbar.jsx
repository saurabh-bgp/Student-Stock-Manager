import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-4 bg-black text-white'>
     <div className='flex justify-between items-center'>
        <div className='flex'>
            <Link to='/' className='flex'>
           <img className='w-28' src="./public/logo.png" alt="" />
            </Link>
        </div>
        <div className='flex flex-row gap-5'>
            <Link to='/allStock' className=''>All Stock</Link>
            <Link to='/addStock' className=''>Add Stock</Link>
            <Link to='/stockByGender' className=''>Get Stock By Gender</Link>
            <Link to='/distribute' className=''>Distribute Dress</Link>
            <Link to='/allDistribution' className=''>All Distribution</Link>
        </div>
     </div>
    </div>
  )
}

export default Navbar