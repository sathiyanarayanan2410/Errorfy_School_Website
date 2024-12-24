import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="p-8 w-10/12 flex flex-col mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
                    <div className="flex flex-col flex-wrap items-center hover:scale-105 transform transition-all py-5 px-3 text-center bg-white rounded-md shadow-lg  ">
                        <FaPhone className="text-xl mb-2" />
                        <h2 className="text-xl font-semibold mb-2">Phone</h2>
                        <p className="text-base">+123 456 7890</p>
                    </div>
                    <div className="flex flex-col flex-wrap items-center hover:scale-105 transform transition-all py-5 px-3 text-center bg-white rounded-md shadow-lg">
                        <FaEnvelope className="text-xl mb-2" />
                        <h2 className="text-xl font-semibold mb-2">Email</h2>
                        <p className="text-base">info@srikrishnaschool.com</p>
                    </div>
                    <div className="flex flex-col flex-wrap items-center hover:scale-105 transform transition-all py-5 px-3 text-center bg-white rounded-md shadow-lg">
                        <FaMapMarkerAlt className="text-xl mb-2" />
                        <h2 className="text-xl font-semibold mb-2">Address</h2>
                        <p className="text-base">Kuniyamuthur, Coimbatore-641008</p>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-white p-5 shadow-lg px-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-base font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-base font-medium mb-2">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-base font-medium mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" required className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-base font-medium mb-2">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
                        </div>
                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:scale-105 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">Send</button>
                    </form>
                </div>
            </div>
    );
};

export default Contact;
