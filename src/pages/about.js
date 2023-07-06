import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const About = () => {
  return (
    <div className='bg-gray-50'>

      <div className='bg-attr h-[370px]' style={{backgroundImage: `url('/about01.jpeg')`}}>
        <div className='bg-wall-shadow-alt h-full'>
          <Navbar />
        </div>
      </div>

      <div className="">
        <div className="">
            <div className="card-section flex justify-center mob-margin-0 mt-16 py-16">
                <div className="flex flex-col justify-center h-[300px] mob-margin-b-sm lg:w-5/12 mob-p-10">
                    <p className="mob-title-2 mob-margin-l-sm mb-2 text-[#212121] text-left text-4xl uppercase">OUR MISSION</p>
                    <hr className="border-2 border-t-orange-400 mob-margin-l-sm w-[100px]" />
                    <p className="font-alt lg:w-10/12 lg:mt-5 mob-card-text">
                        Our mission is to deliver a positive, reliable experience to each and every one 
                        of our clients while offering exceptional value in the marketplace and setting 
                        the standard for professionalism in the logistic solutions we provide. <br/>
                        In addition to operating our business profitably, we strive to operate it 
                        responsibly both for our clients and our employees, for whom our goal is to 
                        provide a safe and secure work environment.
                    </p>
                </div>
                <div className="bg-attr h-[300px] w-[500px] rental" style={{backgroundImage: `url("/rental.webp")`}}></div>
            </div>
        </div>
      </div>

      <div className="">
          <div className="">
              <div className="card-section mob-container flex justify-center mob-margin-0 mt-10 py-16">
                  <div className="card-wrap-1 flex flex-col justify-start h-[300px] lg:w-4/12 mob-margin-b-sm mx-20 font">
                      <p className="uppercase font-bold mb-2 mob-title-2 text-left text-4xl text-[#212121]">Our Vision</p>
                      <hr className="border-2 border-t-orange-400 w-[100px]" />
                      <p className="font-alt lg:mt-5">
                          Our aim is to act as an indispensable partner to our clients by helping them 
                          build and maximize sustainable competitive advantages <br/>
                          We do this by helping them get their products to market quickly, efficiently, 
                          and safely. In addition to our expertly crafted and reliably delivered logistics 
                          solutions, our clients can rest assured that every interaction will be driven by 
                          integrity and respect, the fundamental principles of our business.
                      </p>
                  </div>

                  <div className="card-wrap-1 flex flex-col justify-start h-[300px] lg:w-4/12 mob-margin-t-sm mx-20 font">
                      <p className="uppercase font-bold mob-margin-sm mob-title-2 mb-2 text-left text-4xl text-[#212121]">Our Core Values</p>
                      <hr className="border-2 border-t-orange-400 w-[100px]" />
                      <div className="font-alt lg:mt-5">
                          Some of our core values lies in our abilities of being able to give our customers 
                          satisfaction and a positivity. We pride ourselves on giving our client <br/>
                          
                          <ul className="font-alt m-2 py-2">
                              <li className="mt-2">AGILITY AND RESPONSIVENESS</li>
                              <li className="mt-2">POSITIVE IMPACT ON CUSTOMER SUCCESS</li>
                              <li className="mt-2">STRONG RELATIONSHIPS</li>
                              <li className="mt-2">TRUST</li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
      </div>

      <div style={{backgroundImage: `url('/about01.jpeg')`}}>
        <div className="custom-gradient flex flex-col items-center py-20">
            <p className="mob-title-2 text-5xl font text-white">MEET OUR TEAM</p>
            <div className="card-section lg:flex items-start justify-center w-full">

              <div className="flex flex-col justify-start h-[300px] lg:w-3/12 mob-flex-center pt-14 font">
                  <p className="uppercase mb-2 text-left font-thin text-lg text-white">C.E.O</p>
                  <p className="mob-display-0 lg:text-4xl lg:mt-5 font-alt text-white">
                      KINGSLEY <br/> KELECHUKWU <br/> OKEREKE​
                  </p>
                  <p className="mob-display-1 lg:text-4xl lg:mt-5 font-alt text-white">
                      KINGSLEY KELECHUKWU OKEREKE​
                  </p>
                  <section className="flex py-4">
                      <FiFacebook color='white' style={{ marginRight: "15px" }} />
                      <FiTwitter color='white' style={{ marginRight: "15px" }} />
                      <FiInstagram color='white' />
                  </section>
              </div>

              <div className="flex flex-col justify-start h-[300px] lg:w-3/12 mob-flex-center pt-14 font">
                  <p className="uppercase mb-2 text-left font-thin text-lg text-white">Manager</p>
                  <p className="mob-display-0 lg:text-4xl lg:mt-5 font-alt text-white">
                      MICHAEL <br/> CHIMA <br/> UTOH
                  </p>
                  <p className="mob-display-1 lg:text-4xl lg:mt-5 font-alt text-white">
                      MICHAEL CHIMA UTOH
                  </p>
                  <section className="flex py-4">
                      <FiFacebook color='white' style={{ marginRight: "15px" }} />
                      <FiTwitter color='white' style={{ marginRight: "15px" }} />
                      <FiInstagram color='white' />
                  </section>
              </div>

              <div className="flex flex-col justify-start h-[300px] lg:w-3/12 mob-flex-center pt-14 font">
                  <p className="uppercase mb-2 text-left font-thin text-lg text-white">HUMAN RESOURCE MANAGER</p>
                  <p className="mob-display-0 lg:text-4xl lg:mt-5 font-alt text-white">
                      MICHELLE <br/> GRACE <br/> FRANCIS
                  </p>
                  <p className="mob-display-1 lg:text-4xl lg:mt-5 font-alt text-white">
                      MICHELLE GRACE FRANCIS
                  </p>
                  <section className="flex py-4">
                      <FiFacebook color='white' style={{ marginRight: "15px" }} />
                      <FiTwitter color='white' style={{ marginRight: "15px" }} />
                      <FiInstagram color='white' />
                  </section>
              </div>

            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About