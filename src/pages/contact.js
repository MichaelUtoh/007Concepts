import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import axios from 'axios';
import * as Yup from 'yup';

const Logistics = () => {
    const ValidationSchema = Yup.object().shape({
        name: Yup.string().required('Fullname is required'),
        email: Yup.string().email('Invalid Email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

    const images = ['/logistics-truck.jpeg', '/logistics-container.jpeg', '/logistics-truck-02.jpeg']
    const url = 'https://sheet.best/api/sheets/09b4407a-63ef-4978-b607-d2953f9e86c2';

    const reset = () => {
        setName(''), setEmail(''), setMessage('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(url);

        res = ValidationSchema.validate({ name, email, message })
        console.log('1', res);
        const data = { Name: name, Email: email, Message: message };
        console.log(data);

        // axios.post(url, data).then(() => {
        //     console.log(data);
        //     reset();
        // })
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
                    <form>
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