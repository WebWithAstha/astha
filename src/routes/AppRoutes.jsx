import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<ExperienceTimeline />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
