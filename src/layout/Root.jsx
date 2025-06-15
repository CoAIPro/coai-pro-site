import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { Outlet } from "react-router-dom";


const Root = () => {

  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;