import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const routePath = ['/', '/about', '/logistics', '/hire', '/rentals', '/contact']
    const routeName = ['Home', 'About Us', 'Logistics', 'Car Hire Services', 'Equipment Rentals', 'Contact Us']

    return (
        <div className="navbar bg-0 flex justify-between">
            <a className="bg-attr font h-20 logo normal-case mx-4 text-white text-2xl w-32" style={{backgroundImage: `url('/007logo.png')`}}></a>
            
            <div className='card-wrap-4'>
                {
                    routePath.map((route, idx) => (
                        <Link href={route}><p className="font-medium link link-hover custom-link hover:no-underline mx-4 text-white text-md">{routeName[idx]}</p></Link>
                    ))
                }
            </div>

            <button className="btn btn-ghost btn-circle">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
        </div>
    )
}

export default Navbar