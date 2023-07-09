import {useState} from 'react'
import Link from 'next/link'

export const Popup = ({useModal}) => {

    const routePath = ['/', '/about', '/logistics', '/hire', '/rentals', '/contact']
    const routeName = ['Home', 'About Us', 'Logistics', 'Car Hire Services', 'Equipment Rentals', 'Contact Us']
    
    function handleCloseModal() {
        useModal = null;
        console.log(useModal);
    }

    return (
        <>
            { useModal && <div className="absolute bg-white flex flex-col h-[400px] items-center justify-start popup px-2 w-full">

                <div className='flex justify-end w-full'>
                    <div
                        onClick={() => handleCloseModal()}
                        className="bg-[#E7F1E9] cursor-pointer flex items-center justify-center mt-3 py-3 p-6 w-[30px] text-red-600 relative rounded-full"
                    >
                        x
                    </div>
                </div>

                <div className='flex flex-col justify-center h-[80%]'>
                    {
                        routePath.map((route, idx) => (
                            <Link key={idx} href={route}><p className="font-medium link-hover custom-link hover:no-underline mb-5 mx-4 text-[#212121] text-lg">{routeName[idx]}</p></Link>
                        ))
                    }
                </div>
            </div>
        }
    </>
    )
}

export default Popup