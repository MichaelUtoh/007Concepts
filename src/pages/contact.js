import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import axios from 'axios';
import * as Yup from 'yup';
import dotenv from 'dotenv';
dotenv.config();


const Logistics = () => {
    const sheetyUrl = process.env.REACT_APP_SHEETY_URL;
    const images = [
        '/logistics-truck.jpeg',
        '/logistics-container.jpeg',
        '/logistics-truck-02.jpeg'
    ]

    const ValidationSchema = Yup.object().shape({
        name: Yup.string().required('Fullname is required'),
        email: Yup.string().email('Invalid Email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})


    const reset = () => {
        setName(''), setEmail(''), setMessage('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // res = ValidationSchema.validate({ name, email, message })

        try {
            let now = new Date()
            let body = {sheet1: { Fullname: name, Email: email, Message: message, Date: now }}

            fetch(sheetyUrl.toString(), {
                method: 'POST',
                body: JSON.stringify(body)
            })
            .then((response) => { response.json(); reset()})
            .then(json => {
                // Do something with object
                console.log(json.sheet1);
            });
        } catch (error) {
            console.error('An error occured!')
        }
    }

    return (
        <div className='bg-gray-50'>

        <div className='bg-attr h-[400px]' style={{backgroundImage: `url('https://decharlieshireservices.com.ng/wp-content/uploads/2022/08/head1.jpg')`}}>
            <div className='bg-wall-shadow-alt h-full'>
                <Navbar />
                <div className='flex flex-col h-[300px] items-center justify-center'>
                    <p className='font-alt font-bold text-[4rem] mob-title-2 text-white uppercase'>Contact us</p>
                    <hr className="border border-red-600 w-[250px] mob-hr" />
                </div>
            </div>

            <div className='card-section flex justify-center'>

                <div className='contact-wrap-1 flex flex-col justify-start mob-p-0 mob-width-full mx-2 my-10 p-10 w-5/12'>
                    <form className='flex flex-col items-start'>
                        <p className='font my-2 text=[#212121] text-2xl uppercase'>We're ready, let's talk.</p>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Fullname" className="input input-bordered input-ctrl mb-4 mob-input-1 w-[500px]" />
                        {errors.name && <span className='bg-red-200'>{errors.name}</span>}

                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="input input-bordered input-ctrl mb-4 mob-input-1 w-[500px]" />
                        {errors.email && <span className='bg-red-200'>{errors.email}</span>}

                        <textarea onChange={(e) => setMessage(e.target.value)} className="mob-input-1 textarea textarea-bordered input-ctrl w-[500px]" placeholder="Message"></textarea>
                        {errors.message && <span className='bg-red-200'>{errors.message}</span>}

                        <button onClick={(e) => onSubmit(e)} className='bg-red-600 hover:bg-red-500 my-10 p-3 rounded-full text-white uppercase w-[200px]'>Submit</button>
                    </form>
                </div>

                <div className='contact-wrap-2 flex flex-col justify-start mob-margin-0 mob-card-text mob-width-full mx-2 my-10 p-10 w-5/12'>
                    <p className='font my-2 text=[#212121] text-2xl uppercase'>Contact Information.</p>

                    <div className='my-2'>
                        <p className='font-bold'>Address​</p>
                        <p>20b Ibeju Lekki, Dolphin Estate , Lagos State Nigeria</p>
                    </div>
                    <div className='my-2'>
                        <p className='font-bold'>Email Us</p>
                        <p>info@double07concepts.com</p>
                        <p>kingsley.okereke@double07concepts.com</p>
                    </div>
                    <div className='my-2'>
                        <p className='font-bold'>Call Us</p>
                        <p>+234 (0) 808 954 1529</p>
                        <p>+234 (0) 912 871 9721</p>
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