"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "db54deb4-6b03-4280-bc98-5248083ee19e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 "
        >

            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Connect with me
            </h4>
            <h2 className='text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                Get in touch            </h2>
            <p className='text-center  max-w-2xl mx-auto mb-10 mt-5 '>
                I'd love to hear from you! If you have any questions, comments or
                feedback, please use the form below.
            </p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                    <input name='name' type='text' placeholder='Your Name' className='p-4 border border-gray-300 rounded-lg' required />
                    <input name='email' type='email' placeholder='Your Email' className='p-4 border border-gray-300 rounded-lg' required />
                </div>
                <textarea name='message' placeholder='Your Message' className='w-full p-4 border border-gray-300 rounded-lg mb-6' rows='5' required></textarea>
                <button type='submit' className='flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 uppercase'>Send Message <Image className='w-5' alt='send message' src={assets.right_arrow_white} /> </button>

            </form>
            <p className='text-center'>{result}</p>


        </div>
    )
}

export default Contact