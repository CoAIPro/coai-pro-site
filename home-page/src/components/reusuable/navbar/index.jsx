import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router";
import Theme from "../theme/theme";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {

    const navItams = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "How It Works", href: "/" },
        { id: 3, label: "Templates", href: "/" },
        { id: 4, label: "Pricing", href: "/" },
        { id: 5, label: "Contact", href: "/" },
    ];

    return (
        <header className="container relative">
            <div className="flex items-center justify-between py-5 md:py-12">
                {/* Logo */}
                <Link to={"/"}>
                    <img src={logo} className="max-w-40 object-contain" alt="logo" />
                </Link>

                {/* Centered nav items */}
                <nav className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
                    {navItams.map(item => (
                        <Link
                            to={item.href || "/"}
                            key={item.id}
                            className="hover:text-blue-500 transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side icons */}
                <div className="flex items-center gap-5">
                    <Theme />
                    <button className="md:hidden text-2xl">
                        <FiMenu />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
