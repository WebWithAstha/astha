
import {useScroll} from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes.jsx";
import SideNav from "../components/SideNav.jsx";
import Navbar from "../components/Navbar.jsx";

const AppRoutes = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
          <SideNav progress={scrollYProgress} />
          <Navbar />
        <AnimatedRoutes />

    </>
  );
};

export default AppRoutes;
