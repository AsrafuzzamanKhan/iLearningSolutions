

const Reviews = () => {
    // app/data/reviews.js
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            title: "Project Manager",
            review: "The Agile & SAFe training was transformative. Our team became more productive and aligned.",
            avatar: "https://i.pravatar.cc/100?img=1",
        },
        {
            id: 2,
            name: "Jane Smith",
            title: "Software Engineer",
            review: "Generative AI for Strategy course helped me understand AI applications in business strategy.",
            avatar: "https://i.pravatar.cc/100?img=2",
        },
        {
            id: 3,
            name: "Michael Lee",
            title: "Team Lead",
            review: "Leadership & Project Management course was highly practical and easy to implement.",
            avatar: "https://i.pravatar.cc/100?img=3",
        }
    ];

    return (
        <section className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    What Our Students Say
                </h2>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col"
                        >
                            {/* Avatar */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-white font-semibold">{review.name}</h3>
                                    <p className="text-gray-400 text-sm">{review.title}</p>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 text-sm flex-grow">"{review.review}"</p>

                            {/* Optional Star Rating */}
                            <div className="mt-4 flex space-x-1 text-yellow-400">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
