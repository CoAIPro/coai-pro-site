import Footer from "@/components/reuse/footer";
import Navbar from "@/components/reuse/navbar";
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