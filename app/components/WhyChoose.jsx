'use client'
import { motion } from "framer-motion";
import React from "react";
const WhyChoose = () => {
    const features = [
        {
            id: 1,
            title: "Expert Instructors",
            description:
                "Learn from industry professionals with years of real-world experience and proven track records in their respective fields.",
            icon: "👩‍🏫", // You can replace with SVG icons
        },
        {
            id: 2,
            title: "Flexible Learning",
            description:
                "Study at your own pace with 24/7 access to course materials, downloadable resources, and mobile-friendly platform.",
            icon: "⏱️",
        },
        {
            id: 3,
            title: "Industry-Relevant Skills",
            description:
                "Acquire practical skills that are in high demand in today's job market with hands-on projects and real-world applications.",
            icon: "💼",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Why Choose iLearning Solutions?
                </motion.h2>
                <motion.p
                    className="text-gray-400 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    We're committed to providing the best learning experience with innovative teaching methods and comprehensive support.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.id}
                            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
