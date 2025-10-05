import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/common/nav";
import Footer from "./components/home/footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/scrollToTop";

const App = () => {
  return (
    <>
    <Router>
      <div className="flex justify-center">
        {/* <Nav /> */}
        <main className="w-full overflow-hidden max-w-[1600px] border-x border-zinc-300">
          <AppRoutes />
          {/* <Footer /> */}
        </main>
      </div>
    </Router>
    </>
  );
};

export default App;
