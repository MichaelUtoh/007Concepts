import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Logistics = () => {
    const functions = [
        'Leasing / Hiring Coaster Buses for Corporate logistics.',
        'Luxury Car Hiring Services for Big Shot Corporate excutives',
        'Wedding Car Rentals',
        'Uber / Bolt vehicle Standards for business purposes (Leasing)',
        'Fleets Management .',
        'Sedan cars, SUVs and Hiace buses to luxury sports cars .',
    ]
    const arrow = '-> '
    const images = ['/hire-minibuses.png', 'https://imgs.search.brave.com/--1RHcTJBQ7HkdqHqDT_8tbMIWTbMnwJDq1bMSwY-ik/rs:fit:1200:1166:1/g:ce/aHR0cDovL3VwbG9h/ZC53aWtpbWVkaWEu/b3JnL3dpa2lwZWRp/YS9jb21tb25zLzQv/NDcvVG95b3RhX0Nh/bXJ5X0h5YnJpZC5q/cGc']
  return (
    <div className='bg-gray-50'>

      <div className='bg-attr h-[600px]' style={{backgroundImage: `url("https://decharlieshireservices.com.ng/wp-content/uploads/2022/08/bigstock-A-Young-Woman-Buys-A-Car-In-A-331622050-1-scaled.jpg")`}}>
        <div className='bg-wall-shadow-alt h-full'>
          <Navbar />

          <div className='flex h-[500px] items-start justify-center'>
            <div className='flex flex-col h-full items-start justify-center mx-auto w-10/12'>
                <p className='font text-white'>TRAVEL & LUXURY</p>
                <p className='font-alt font-bold text-[4rem] text-white uppercase'>Car Hire services</p>
                <p className='text-white w-6/12'>
                <span className=''>Car Hire </span>
                    | <span className=''>Car Sales </span>
                    | <span className=''>Car Chauffeur Services </span>
                    | <span className=''>Trucks & Haulage Services |Luxury Cars Rentals </span>
                    | <span className=''>Exquisite Car Loan Offers Facilitators</span></p>
            </div>
          </div>

        </div>

        <div className=''>
            <div className='mx-auto p-10 w-9/12'>
            <p className=''>
                De’ Charlies Services is one of the major car rental and auto leasing companies in Nigeria. 
                We provide reliable and affordable rental services with core competency in fleet management 
                services.We are a logistics company that has ventures into the corporate world of  car rental 
                services and fleet management business in Nigeria. We have clients/customers that cuts across 
                small businesses to large multi-national organizations based in Lagos and Abuja
                <br/><br/>
                We have being in the business of providing corporate car hire services that is second to no 
                other in the car rental and fleets management industry. We help our customers meet the challenges 
                of daily corporate staff transfer , Hiring corporate Chauffeur Services for excecutives and 
                provision of clean and well-maintained vehicles.
                <br/><br/>
                We have a well-structured fleet management solution with affordable price rates for our car leasing 
                services to meet the diverse needs of our clients in addition with well-trained professional drivers.
                <br/><br/>
                We are specialist in provisions
            </p>
            <br/><br/>
            <ul className="font-alt my-2 py-2">
                {
                  functions.map((idx) => (
                      <li key={idx} className="mt-2"> <span className='font'>{arrow}</span> {idx}</li>
                  ))
                }
            </ul>
            </div>
        </div>

        <div className='flex justify-center m-5 mb-10'>
          <button className='bg-red-600 hover:bg-red-500 p-3 rounded-full text-white w-[200px]'>Get a Quote</button>
        </div>

        <div className='flex justify-center m-5 mb-10'>
          { images.map((img, idx) => (
              <img key={idx} className='bg-attr h-64 w-[500px] m-5' src={img} />
          ))}
        </div>


        <Footer />
      </div>

    </div>
  )
}

export default Logistics