import { Outlet } from "react-router-dom";
import Footer from "../components/reusuable/footer";
import Navbar from "../components/reusuable/navbar";


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