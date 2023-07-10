import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Logistics = () => {
  const images = [
    '/logistics-truck.jpeg',
    '/logistics-container.jpeg',
    '/logistics-truck-02.jpeg'
  ]

  return (
    <div className='bg-gray-50'>

      <div className='bg-attr h-[400px]' style={{backgroundImage: `url('/logistics-truck.jpeg')`}}>
        <div className='bg-wall-shadow-alt h-full'>
          <Navbar />

          <div className='flex h-[300px] items-center justify-center'>
            <p className='font-alt font-bold text-[4rem] mob-title-2 text-white uppercase'>Logistic services</p>
          </div>
        </div>

        <div className=''>
            <div className='mob-margin-sm mob-width-full mx-auto p-10 w-9/12'>
            <p className=''>
                Double07Concepts Logistics are professionals that provide the solutions you need. 
                We provide our clients with a wide range of services including physical inventory counts, 
                quality control and inspection of goods, returns processing, promotional pricing, 
                custom inventory reports, Fleets managemant , Truck delivery services ranging from 5tons – 30tons and more.
                <br/><br/>
                We specialize in outsourced wholesale and retail product distribution, fulfillment, and 
                logistic services with all necessary documents requirement for transportation of your 
                clients goods within and outside the borders internationally.
                <br/><br/>
                We have the science/logic involved in the proper planning, implementing, and managing procedures 
                for the most efficient and effective storage and transportation of goods as possible.
            </p>
            </div>
        </div>

        <div className='card-section flex justify-center m-5 mb-10'>
            { images.map((img, idx) => (
                <div key={idx} className='bg-attr bg-attr-img-2 h-64 w-[350px] m-5' style={{backgroundImage: `url(${img})`}}></div>
            ))}
        </div>


        <Footer />
      </div>

    </div>
  )
}

export default Logistics