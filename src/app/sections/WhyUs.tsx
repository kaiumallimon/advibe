import { BadgeCheck, Sparkles, BarChart2, UserCheck, BadgeCheckIcon } from "lucide-react";


export default function WhyUs() {
    return (
        <div className="container pt-25 pb-20  px-4  md:mx-auto">
            <div className="inline-flex items-center gap-2 border-2 border-dotted border-black-500 rounded-lg px-3 py-2">
                <BadgeCheck />
                <p>Why Us?</p>
            </div>

            <div className="mt-8">
                <p className="text-2xl font-semibold md:text-3xl text-black dark:text-white leading-relaxed">
                    GROW YOUR BRAND ON SOCIAL MEDIA
                </p>
            </div>

            <div className="mt-5">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed w-full text-left">
                    Partner with us to experience unparalleled digital marketing solutions that drive results. Our team of experts is dedicated to helping your brand thrive in the digital landscape. From strategic planning to execution, we tailor our services to meet your unique needs and goals. With a focus on innovation and creativity, we ensure your brand stands out and connects authentically with your audience. Let us help you achieve measurable growth and success in the ever-evolving world of digital marketing.
                </p>
            </div>




            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2 bg-black text-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: "#CBFF4D" }}>
                        <Sparkles className="w-6 h-6 text-black" />
                    </div>


                    <h3 className="text-lg font-semibold">Innovation at Our Core</h3>
                    <p className="text-base text-gray-500">We stay ahead of trends to provide cutting edge solutions.</p>
                </div>

                <div className="flex flex-col gap-2 bg-black text-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: "#CBFF4D" }}>
                        <BarChart2 className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold">Data-Driven Strategies</h3>
                    <p className="text-base text-gray-500">Our approach is backed by analytics to ensure effectiveness.</p>
                </div>
                <div className="flex flex-col gap-2 bg-black text-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: "#CBFF4D" }}>
                        <UserCheck className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold">Client-Centric Focus</h3>
                    <p className="text-base text-gray-500">Your success is our priority, and we tailor our services to your needs.</p>
                </div>
                <div className="flex flex-col gap-2 bg-black text-white p-6 rounded-lg shadow-lg">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: "#CBFF4D" }}>
                        <BadgeCheckIcon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold">Proven Track Record</h3>
                    <p className="text-base text-gray-500">We have a history of delivering results for our clients.</p>
                </div>
            </div>
        </div>
    );
}
