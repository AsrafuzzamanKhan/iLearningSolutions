'use client'

import { motion } from "framer-motion";

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Agile & SAFe Training",
            description:
                "Learn how to implement Agile practices and SAFe frameworks in your organization.",
            duration: "3 Days",
            link: "#",
        },
        {
            id: 2,
            title: "Generative AI for Strategy",
            description:
                "Understand how Generative AI can transform business strategy and product development.",
            duration: "2 Days",
            link: "#",
        },
        {
            id: 3,
            title: "Leadership & Project Management",
            description:
                "Master leadership skills and project management methodologies for better outcomes.",
            duration: "5 Days",
            link: "#",
        },
        {
            id: 4,
            title: "6-Sigma & Lean Tools",
            description:
                "Improve efficiency and quality with Lean and Six Sigma tools and practices.",
            duration: "4 Days",
            link: "#",
        },
    ];
    return (
        <section id="courses" className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Courses
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, i) => (
                        <motion.div
                            key={course.id}
                            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-2 bg-blue-500"></div>
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{course.title}</h3>
                                    <p className="text-gray-300 mb-4">{course.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-gray-400 text-sm">{course.duration}</span>
                                    <a href={course.link} className="text-blue-400 hover:text-blue-600 font-medium">
                                        Learn More →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
