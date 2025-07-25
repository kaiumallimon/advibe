import { ArrowRightIcon, Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import Logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className="sticky top-0 z-50  backdrop-blur-md">

            {/* TopBar */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-3 bg-black text-white text-sm px-4">

                <p className="hidden md:block text-white/60 text-sm">
                    Grow your brand with result-driven digital marketing solutions.
                </p>

                <div className="flex items-center cursor-pointer hover:underline">
                    <p>Get started</p>
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                </div>

            </div>


            {/* Header */}
            <div className="py-5 px-5 md:px-10 flex justify-center items-center">
                <div className="container flex justify-between items-center">
                    <Image
                        className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] cursor-pointer transition duration-300 hover:opacity-60"
                        src={Logo}
                        alt="Logo"
                        width={35}
                        height={35}
                    />

                    <MenuIcon className="cursor-pointer md:hidden transition duration-300 hover:opacity-60" />

                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#"
                            className="transition duration-300 hover:underline"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="transition duration-300 hover:underline"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="transition duration-300 hover:underline"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="transition duration-300 hover:underline"
                        >
                            Contact
                        </a>

                        <button className="bg-black text-white px-4 py-2 rounded-3xl text-sm hover:opacity-60 transition duration-300">
                            Get Started
                        </button>
                    </nav>

                </div>
            </div>

        </header>
    );
}
