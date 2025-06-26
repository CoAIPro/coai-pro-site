import { useTheme } from "@/hooks/useTheme";
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";
import { navItams } from "../../../data/navContent";

const Navbar = () => {
    const { toggleTheme, darkMode } = useTheme();
    return (
        <header className="container relative">
            <div className="homeTopGradient flex items-center justify-between py-5 md:py-12">
                <Link to={"/"}>
                    <img src={logo} className="max-w-40 object-contain" alt="logo" />
                </Link>
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
                <div className="flex items-center gap-5">
                    <button type="button" onClick={toggleTheme} className="flex items-center justify-center gap-2 bg-[#EEF2FF] px-4 py-3 rounded-lg text-2xl">
                        {darkMode ? (
                            <div className="flex items-center gap-2">
                                <MdLightMode className="text-primary" />
                                <span className="text-sm">Light Mode</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <FaMoon className="text-primary" />
                                <span className="text-sm">Dark Mode</span>
                            </div>
                        )}
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={darkMode}
                            readOnly
                        />
                        <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${
                            darkMode ? "bg-green-500" : "bg-gray-300"
                        }`}>
                            <div
                                className={`w-4 h-4 bg-white rounded-full absolute top-1/2 transition-all duration-300 ${
                                    darkMode
                                        ? "left-5 -translate-y-1/2"
                                        : "left-1 -translate-y-1/2"
                                }`}
                            ></div>
                        </div>
                    </button>
                    <button className="md:hidden text-2xl" onClick={toggleTheme}>
                        <FiMenu />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
