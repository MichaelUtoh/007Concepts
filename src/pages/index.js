import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  const titles = [
    'VEHICLE HIRE SERVICES',
    'LOGISTICS SERVICES',
    'EQUIPMENT RENTAL',
  ]
  const messages = [
    `007 Concepts is a logistics company that has ventures into the corporate 
    world of car rental services business in Nigeria. We have clients/customers that cuts 
    across small businesses to large multi-national organizations based in Lagos and Abuja...`,
    `007 Concepts are professionals that provide the solutions you need. We provide 
    our clients with a wide range of services including physical inventory counts, quality 
    control and inspection of goods, returns processing, promotional pricing, custom ...`,
    `007 Concepts Equipment Rental provides Mobile Hydraulic Crane, Crawler Cranes, Dredging Machine,
    Forklifts etc. We have a simple yet effective attitude towards safety. Every high-risk task 
    is minimized with a controlled risk assessment...`
  ]
  const images = [
    '/rental.webp',
    '/logistics-truck-02.jpeg',
    '/logistics-truck.jpeg',
  ]

  const iconTitles = [
    'Timely & Consistent',
    'Nationwide Delivery',
    'Customer Satisfaction',
    'Quality & High standard vehicles',
  ]

  const iconMessages = [
    'We deliver our clients goods timely and efficiently.',
    'We deliver to our clients all over the country and even outside the shores of Nigeria.',
    'We deliver our clients goods timely and efficiently.',
    'We deliver our clients goods timely and efficiently.'
  ]

  const iconImages = [
    '/icon1.png',
    '/icon2.png',
    '/icon3.png',
    '/icon4.png',
  ]

  const partnerLogos = [
    'clogo0.jpeg',
    'clogo1.png',
    'clogo2.png',
    'clogo3.jpeg',
    'clogo4.png',
    'clogo5.png',
    'clogo6.png',
  ]

  return (
    <div className='bg-gray-50'>

      <div className='bg-attr h-screen' style={{backgroundImage: `url('/logistics-truck-02.jpeg')`}}>
        <div className='bg-wall-shadow h-full'>

            <Navbar />

            <div className='flex flex-col bg-banner justify-center items-center'>
                <h3 className='font mb-4 text-2xl text-white'>NO #1 SOLUTION PROVIDERS FOR</h3>
                <hr className='' />
                <p className='text-6xl text-white text-center lg:mx-20'>
                  <span className='font-alt'>LOGISTICS </span>
                  <span className='text-orange-200'>|| </span>
                  <span className='font-alt'> EQUIPMENT RENTALS </span>
                  <span className='text-orange-200'>|| </span>
                  <span className='font-alt'> SERVICES </span>
                  <span className='text-orange-200'>|| </span>
                  <span className='font-alt'> VEHICLE HIRING</span>
                </p>
            </div>

        </div>
      </div>

      <div className='bg-gray-100 p-10'>
        <div className='flex justify-center mx-10 my-20'>
          {
            titles.map((title, idx) => (
              <div key={idx} className="card w-96 bg-base-100 mx-2 shadow-xl">
                <div className="card-body py-10">
                  <p>{messages[idx]}</p>
                  <div className="card-actions flex items-center justify-end mt-3">
                    <p className='font'>{title}</p>
                    <div className="bg-attr h-16 rounded-full w-16" style={{backgroundImage: `url(${images[idx]})`}}></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className=''>
        <div className='flex justify-center mx-10 my-20'>
          <p className='font font-bold m-20 text-[#212121] text-2xl'>Why Choose Us?</p>
          {
            iconTitles.map((title, idx) => (
              <div key={idx} className="card w-48 border-0 border-gray-50 hover:shadow-lg m-3 p-2">
                  <figure><div className='bg-attr h-12 w-12' style={{ backgroundImage: `url('${iconImages[idx]}')` }}> </div></figure>
                  <div className="card-body p-2 py-4 flex flex-col items-center justify-between">
                    <h2 className="text-xlg font-bold text-center">{title}</h2>
                    <p className="text-center w-10/12">
                    {iconMessages[idx]}
                    </p>
                  </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className='bg-gray-100'>
        <div className='flex items-center justify-center p-20'>
          <p className='font font-bold m-10 text-[#212121] text-4xl'>Do You Require?</p>

          <div className="">
              <Image src='/equipment1.png' alt='Earth-moving equipments' height={300} width={600} />
          </div>

        </div>
      </div>

      <div>
        <p className='font text-center m-5 text-3xl text-[#212121]'>Our Partners</p>
        <hr className="border border-red-600 mx-auto w-[150px]" />
        <div className='flex justify-center m-5'>
          { partnerLogos.map((img, idx) => (
              <img key={idx} className='bg-attr h-[60px] w-[100px] m-5' src={img} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
