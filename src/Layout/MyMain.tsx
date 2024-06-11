import Banner from "../Pages/Banner";
import Contact from "../Pages/Contact";

import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import Resumen from "../Pages/Resumen";

const MyMain = () => {
  return (
    <main className="max-w-full mx-auto flex flex-col justify-center items-center">
      <Banner />
      <Services />
      <Resumen />
      <Projects />
      <Contact />
      {/** 
          <Resume />
         
          <Footer /> */}
    </main>
  );
};

export default MyMain;
