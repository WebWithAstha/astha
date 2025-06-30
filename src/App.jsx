import Hero from "./components/home/hero";
import Nav from "./components/common/nav";
import CaseStudy from "./components/home/cases";
import Projects from "./components/home/projects";
import Cta from "./components/home/cta";
import Footer from "./components/home/footer";
import Loader from "./components/common/loader";

const App = () => {
  return (
    <>
      <Loader />
      <div className="flex justify-center">
        <Nav />
        <main className=" w-full overflow-hidden  max-w-[1600px]">
          <Hero />
          <div className="w-full flex flex-col lg:gap-36 md:gap-16 lg:pt-40 pt-16 border-x border-zinc-300  lg:px-40 md:px-16 px-6">
            <CaseStudy />
            <Projects />
            <Cta />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
