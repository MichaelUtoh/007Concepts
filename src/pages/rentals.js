import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Image from 'next/image';

const About = () => {
    const images = ['/cat1.webp', '/cat2.png', '/cat3.png', '/cat4.jpeg', '/cat5.png']

    return (
    <div className='bg-gray-50'>

        <div className='bg-attr h-[370px]' style={{backgroundImage: `url('/equipment1.png')`}}>
            <div className='bg-wall-shadow-alt h-full'>
                <Navbar />
                <div className='flex h-[300px] items-center justify-center'>
                    <p className='font-alt font-bold mob-title-2 mob-width-sm text-6xl text-white uppercase'>Equipment Rental Services.</p>
                </div>
            </div>
        </div>

        <div className=''>
                <div className='mob-margin-sm mob-width-full mx-auto p-10 w-9/12'>
                <p className=''>
                    De charlies Equipment Rental & Logistics Pvt. Ltd. provides Mobile Hydraulic Crane, 
                    Crawler Cranes, Dredging Machine ,Forklifts etc. We have a simple yet effective 
                    attitude towards safety. Every high-risk task is minimized with a controlled 
                    risk assessment ensuring our procedures are of the highest standard..
                    <br/><br/>
                    We offer fully customisable solutions to the most complex lifting situations. 
                    With over 50 years’ industry experience and access to a large national fleet 
                    of cranes of variable capacity, we are perfectly positioned to support any project 
                    size. We pride ourselves on our service level excellence and end to end project 
                    management. Our Team understands the challenges faced on projects and works 
                    with you on every step of the way.
                    <br/><br/>
                    The company serves with a fleet of 45+ cranes and 100+ forklifts with a total tonnage 
                    capacity of over 7000 Tons – this makes Express Equipment Rental & Logistics Pvt. Ltd. 
                    as one of the top Crane and Equipment rental companies in India. Our fleet consists 
                    of Mobile Hydraulic Cranes ranging from 30 Tons to 450 Tons, Crawler Cranes from 40 
                    Tons to 250 Tons, Forklifts (Diesel and Electric) from 2 Tons to 10 Tons and various 
                    kinds of equipment such as Reach Trucks, Tow Trucks, Stackers Etc.
                    <br/><br/>
                    Why We’re Your No.1 most sorted logistics company
                </p>
                <br/><br/>
                </div>
            </div>

            <div className='flex flex-wrap justify-center m-5 mb-10 mx-auto w-10/12'>
            { images.map((img, idx) => (
                <img key={idx} className='bg-attr bg-attr-img-2 h-64 w-[400px] m-5' src={img} />
            ))}
            </div>

            <div className='flex flex-col m-10'>
                <p className='font mob-title-2 text-[#212121] text-[4rem] text-center'>For Best Price & Quality Equipment</p>
                <button className='bg-red-600 hover:bg-red-500 mx-auto my-10 p-3 rounded-full text-white uppercase w-[200px]'>Call us now</button>
            </div>
        <Footer />
    </div>
  )
}

export default About