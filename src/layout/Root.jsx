import topShadowDark from '@/assets/images/dashboard/top-shadow-dark.svg';
import topShadow from '@/assets/images/dashboard/top-shadow.svg';
import Footer from "@/components/reuse/footer";
import Navbar from "@/components/reuse/navbar";
import { useTheme } from "@/context/ThemeContext";
import { Outlet } from "react-router-dom";

const Root = () => {
  const { darkMode } = useTheme();
  return (
    <main className={`relative z-10 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className='absolute -top-20 -right-10 -z-10'>
        <img src={darkMode ? topShadowDark : topShadow} alt="shadow" />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;