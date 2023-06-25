import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Logistics = () => {
    const images = ['/logistics-truck.jpeg', '/logistics-container.jpeg', '/logistics-truck-02.jpeg']

    return (
        <div className='bg-gray-50'>

        <div className='bg-attr h-[400px]' style={{backgroundImage: `url('https://decharlieshireservices.com.ng/wp-content/uploads/2022/08/head1.jpg')`}}>
            <div className='bg-wall-shadow-alt h-full'>
            <Navbar />

            <div className='flex flex-col h-[300px] items-center justify-center'>
                <p className='font-alt font-bold text-[4rem] mob-title-2 text-white uppercase'>Contact us</p>
                <hr className="border border-red-600 w-[250px]" />
            </div>

            </div>

            <div className='card-section flex justify-center'>

                <div className='flex flex-col justify-start mob-p-0 mob-width-full mx-2 my-10 p-10 w-5/12'>
                    <p className='font my-2 text=[#212121] text-2xl uppercase'>We're ready, let's talk.</p>
                    <input type="text" placeholder="Fullname" className="input input-bordered mb-4 mob-input-1 rounded-none w-[500px]" />
                    <input type="text" placeholder="Email" className="input input-bordered mb-4 mob-input-1 rounded-none w-[500px]" />
                    <textarea className="mob-input-1 rounded-none textarea textarea-bordered w-[500px]" placeholder="Message"></textarea>
                    <button className='bg-red-600 hover:bg-red-500 my-10 p-3 rounded-full text-white uppercase w-[200px]'>Call us now</button>
                </div>

                <div className='flex flex-col justify-start mob-margin-0 mob-card-text mob-width-full mx-2 my-10 p-10 w-5/12'>
                    <p className='font my-2 text=[#212121] text-2xl uppercase'>Contact Information.</p>

                    <div className='my-2'>
                        <p className='font-bold'>Address​</p>
                        <p>13 Ibeju Lekki Way , Dolphin Estate , Lagos State Nigeria</p>
                    </div>
                    <div className='my-2'>
                        <p className='font-bold'>Email Us</p>
                        <p>info@decharlieshireservices.com.ng</p>
                        <p>kingsley.okereke@decharlieservices.com.ng</p>
                    </div>
                    <div className='my-2'>
                        <p className='font-bold'>Call Us</p>
                        <p>+234 (0) 808 954 1529</p>
                        <p>+234 (0) 808 044 9647</p>
                    </div>
                    <div className='my-2'>
                        <p className='font-bold'>Follow Us</p>
                        <section className="flex py-4">

                            <div className='bg-red-600 hover:bg-red-500 flex h-14 items-center justify-center mr-4 p-5 rounded-full'>
                                <FiFacebook className='text-white' />
                            </div>

                            <div className='bg-red-600 hover:bg-red-500 flex h-14 items-center justify-center mr-4 p-5 rounded-full'>
                                <FiTwitter className='text-white' />
                            </div>

                            <div className='bg-red-600 hover:bg-red-500 flex h-14 items-center justify-center mr-4 p-5 rounded-full'>
                                <FiInstagram className='text-white' />
                            </div>

                        </section>
                    </div>
                </div>

            </div>


            <Footer />
        </div>

        </div>
    )
}

export default Logistics