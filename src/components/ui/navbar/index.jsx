import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";
import { navItams } from "../../../data/navContent";
import Theme from "../theme/theme";


const Navbar = () => {

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
