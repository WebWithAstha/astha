// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home.jsx";
import Contact from "../pages/contact.jsx";
import { useEffect, useRef, useState } from "react";
import PageTransition from "../transitions/PageTransition.jsx";
import Projects from "../components/Projects.jsx";
import Resume from "../pages/resume.jsx";

export const NAV_ORDER = ["/", "/contact", "/projects"];

const AnimatedRoutes = () => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const fromIndex = NAV_ORDER.indexOf(prevPath.current);
    const toIndex = NAV_ORDER.indexOf(location.pathname);

    const newDirection = toIndex > fromIndex ? "right" : "left";
    setDirection(newDirection);

    prevPath.current = location.pathname;
  }, [location.pathname]);

  return (
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition direction={direction}>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition direction={direction}>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition direction={direction}>
                <Projects />
              </PageTransition>
            }
          />
          <Route
          path="/resume"
          element={
            <PageTransition direction={direction}>
              <Resume />
            </PageTransition>
          }
        />
        </Routes>
      </AnimatePresence>
  );
};

export default AnimatedRoutes;