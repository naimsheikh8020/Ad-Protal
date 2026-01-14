import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
