import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import ProjectDetail from "../pages/project-details";
import Skills from "../pages/skills.jsx";
import ExperienceTimeline from "../pages/experience.jsx";
import Contact from "../pages/contact.jsx";
// import ProjectDetail from "../pages/ProjectDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/skills" element={<Skills />} />
<Route path="/experience" element={<ExperienceTimeline />} />
<Route path="/contact" element={<Contact />} />


    </Routes>
  );
};

export default AppRoutes;
