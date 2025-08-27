// components/Footer.js
import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">iLearning Solutions</h3>
                    <p className="text-gray-400 text-sm">
                        Transforming learning with Agile, Strategy, and Generative AI.
                        <br />
                        <span className="mt-2 block">© 2025 iLearning Solutions</span>
                    </p>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Courses</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Agile & SAFe Training</li>
                        <li>Generative AI for Strategy</li>
                        <li>Leadership & Project Mgmt</li>
                        <li>6-Sigma & Lean Tools</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Consulting</li>
                        <li>Corporate Training</li>
                        <li>Research & Surveys</li>
                        <li>Workshops & Webinars</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-400 text-sm">Email: <a href="mailto:nick@ilearningsolutions.com" className="hover:text-white">nick@ilearningsolutions.com</a></p>
                    <p className="text-gray-400 text-sm mt-2">Phone: +61 XXX XXX XXX</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
                        <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
