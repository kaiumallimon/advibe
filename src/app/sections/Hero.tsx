import Image from "next/image";
import Logo from '../../assets/pattern.jpg';

export default function Hero() {
    return (
        <div className="container h-screen mx-auto px-4 py-12">
            <h1 className="text-3xl font-semibold mb-8 max-w-[1200px] leading-relaxed">
                Discover the Secrets of <span className="bg-black text-white px-3 py-1.5">Marketing Magic</span> That Empower Businesses to Stand Out, Connect Authentically, and Drive Measurable Growth.
            </h1>

            <div className="relative w-full h-[600px] md:h-[600px] md:aspect-video max-w-screen rounded-lg shadow-lg overflow-hidden">
                <Image
                    src={Logo}
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>


        </div>
    );
}
