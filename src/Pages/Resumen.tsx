import Title from "../components/UI/Title";
import { FadeIn } from "../components/UI/FadeIn";
import { useEffect, useState } from "react";
import SkillsList from "../components/UI/SkillsList";
import Experience from "../components/UI/Experience";
import { Link } from "react-scroll";
import ProjectNavigation from "../components/UI/ProjectNavigation";
import { SiMinutemailer } from "react-icons/si";
import { FaPhone, FaSchool } from "react-icons/fa";

const Resumen = () => {
  /*  const [educationData, setEducationData] = useState<boolean>(true);
  const [skillData, setSkillData] = useState<boolean>(false);
  const [experienceData, setExperienceData] = useState<boolean>(false); */
  const tabs = ["Skills", "Herramientas", "Experiencie"];
  const [tabActive, setTabActive] = useState<Array<boolean>>([
    true,
    false,
    false,
  ]);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600);
  }, [tabActive]);
  const handleActiveTabs = (value: string) => {
    if (value == "Skills") {
      setTabActive([true, false, false]);
    } else if (value == "Education") {
      setTabActive([false, true, false]);
    } else if (value == "Experiencie") {
      setTabActive([false, false, true]);
    }
  };
  return (
    <section id="resumen" className="seccion relative">
      <FadeIn className="z-10">
        <Title title="Resumen" des="What I Do" />
        <button
          className="block h-10 w-10 rounded-[100px] bg-buttonColor p-1 shadow-sm shadow-text transition-all duration-300"
          aria-label="Change Theme"
          title="Change Theme"
        /* onClick={handleThemeSwitch} */
        >
          <span className="relative top-0 block h-6 w-auto rounded-[100px] bg-primaryColor">

          </span>
        </button>
        {/* Container */}
        <div className="flex h-full w-full flex-col items-start justify-between gap-5 lg:flex-row">
          <div className="flex w-full flex-col gap-4 px-5 lg:w-[50%]">
            {/* <img className="z-10" src={featureImg} alt="featureImg" /> */}
            <div className="flex flex-col gap-2">
              <h1>Acerca de mí</h1>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
              <div className="flex items-center gap-2 text-base">
                <span className="text-primaryColor">
                  <FaPhone size={15} title="Número Telefónico" />
                </span>
                <span className="text-text">+53 53761909</span>
              </div>

              <div className="flex items-center gap-2 text-base">
                <span className="text-primaryColor">
                  <SiMinutemailer size={15} title="Dirección de Correo" />
                </span>
                <span className="text-text">claudiaar9313@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <span className="text-primaryColor">
                  <FaSchool size={15} title="Estudios Universitarios" />
                </span>
                <span className="text-text">
                  Universidad de Ciencias Informáticas
                </span>
              </div>
              <Link
                className="btn btn__primary my-4 w-fit"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Let Talk
              </Link>
            </div>
            <ProjectNavigation
              tabs={tabs}
              onChange={handleActiveTabs}
              styleContainer="flex item-center justify-center lg:justify-start pb-10 gap-1 md:gap-3"
              styleTab="bg-bgSecundary btn__navegation"
            />
          </div>
          <div
            className={`w-full px-5 lg:w-[50%] ${load ? "animate-zoomIn" : ""}`}
          >
            {tabActive[0] && <SkillsList />}
            {/* {tabActive[1] && <Education />} */}
            {tabActive[2] && <Experience />}
          </div>
        </div>
      </FadeIn>
      <div className="absolute right-[30px] top-[40px] h-[150px] w-[150px] rounded-full gradient opacity-70 blur-3xl"></div>
    </section>
  );
};

export default Resumen;
