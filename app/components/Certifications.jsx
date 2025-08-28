import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Certifications() {
    const certifications = [
        {
            title: "SCRUMstudy™",
            desc: "Scrum Master (SMC®) & Product Owner (SPOC®) — boost agility & project wins.",
            img: assets.SCRUMstudy_ATP,
        },
        {
            title: "6Sigmastudy™",
            desc: "Six Sigma mastery — Yellow, Green, Black, Lean Black Belt to maximise process quality & efficiency.",
            img: assets.six_sigma,
        },
        {
            title: "BALearning™",
            desc: "Business Analysis skills — identify needs and deliver solutions.",
            img: assets.ba_learning,
        },
        {
            title: "OKRstudy™",
            desc: "Goal-setting, strategy & performance with trusted certifications.",
            img: assets.okrstudy,
        },
        {
            title: "Kanbanstudy™",
            desc: "Master visual workflows — optimise and ensure continuous delivery.",
            img: assets.kanban,
        },

    ];

    return (
        <section className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Our Certifications</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-900 bg-[#1E2939] rounded-2xl shadow-md p-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex justify-center mb-4">
                                <Image src={cert.img}
                                    alt={cert.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                            <p className=" text-sm">{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
