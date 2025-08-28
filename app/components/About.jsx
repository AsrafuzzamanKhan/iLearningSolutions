
"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section className="bg-black text-white py-16" id="about">
            <h2
                className="text-4xl font-bold mb-12 text-center text-white"
            >
                Our Courses
            </h2>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center ">

                {/* Left Side - Content */}
                <div className="flex-1 pr-8">


                    <p className=" text-lg mb-6">
                        iLearning Solutions is dedicated to empowering individuals and
                        organisations to thrive in a rapidly evolving future through innovative
                        strategy, project, and quality management training, coaching, and
                        consulting services. Our vision is to be a premier international
                        partner in strategy and project management, driven by expertise and
                        global collaboration.
                    </p>

                    {showMore && (
                        <div className=" space-y-4 mb-6">
                            <p>
                                At <strong>iLearning Solutions</strong>, we are dedicated to empowering
                                individuals and organisations to thrive in a world defined by constant
                                change and innovation. We specialise in strategy, project, and quality
                                management training, coaching, and consulting—equipping learners with
                                the tools, certifications, and insights they need to excel in their
                                professional journey.
                            </p>
                            <p>
                                Nick’s career spans roles with IBM, Telstra, Business SA, BAE
                                Systems, and government bodies. He holds multiple degrees
                                including a PhD in Strategic Project Management, and is an active
                                researcher and global conference speaker.
                            </p>
                            <p>
                                He is certified across a wide range of frameworks including
                                <em> Strategic Management Professional (SMP), PgMP, PMP, SAFe6
                                    Agilist, Scrum Master, AgilePM, CMC</em>, and more—making him the
                                first in Australia to achieve both IASP SMP and BPEC certifications.
                            </p>
                            <p>
                                Beyond certifications, Nick is a passionate coach, educator, and
                                leader—currently serving as the Founding President of the IASP
                                Australia Chapter and past leader in PMI and IMC boards.
                            </p>
                        </div>
                    )}

                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="px-6 py-3 text-black bg-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition"
                    >
                        {showMore ? "Show Less" : "Read More"}
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <Image
                        src={assets.about} // 👉 replace with actual image path
                        alt="About iLearning Solutions"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default About