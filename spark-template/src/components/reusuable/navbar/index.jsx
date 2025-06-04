import React, { useEffect, useState } from "react";
import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png";
import menuBtnDark from "../../../assets/icons/menu-btn-dark.png";
import menuBtnLight from "../../../assets/icons/menu-btn-light.png";
import { Link } from "react-router";
import Theme from "../theme/theme";


const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = localStorage.getItem("theme") || "dark";
            setTheme(currentTheme);
        });

        // Watch the html element's class attribute for changes
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const navItams = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "About", href: "/" },
        { id: 3, label: "Services", href: "/" },
        { id: 4, label: "Contact", href: "/" },
    ];

    return (
        <header className="container">
            <div className="flex justify-between items-center py-4 md:py-8">
                {/* logo */}
                <Link to={"/"}>
                    <img src={theme === "light" ? logoDark : logoLight} className="max-w-40 object-contain" alt="logo" />
                </Link>

                <div className="flex items-center gap-5">
                    {/* nav items */}
                    <nav className="hidden md:flex items-center gap-5 2xl:text-xl">
                        {
                            navItams?.map(item =>
                                <Link to={item?.href || "/"} key={item?.id} >
                                    {item?.label}
                                </Link>
                            )
                        }
                    </nav>

                    {/* theme */}
                    <Theme />

                    {/* mobile menu */}
                    <button className="md:hidden">
                        <img src={theme === "light" ? menuBtnDark : menuBtnLight} className="w-6 object-contain" alt="menu button" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;