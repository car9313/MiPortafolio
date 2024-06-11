import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FadeIn } from "../components/UI/FadeIn";
import ListSocial from "../components/UI/ListSocial";
/* import LeftBanner from "../UI/LeftBanner";
import RightBanner from "../UI/RightBanner"; */

//className="seccion banner relative flex min-h-screen flex-col items-center justify-center gap-10 bg-cover bg-fixed xl:gap-8"
const Banner = () => {
  // "UI Designer."
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="seccion flex min-h-screen flex-col items-center justify-center gap-10 xl:gap-8"
    >
      <FadeIn className="relative z-10 max-w-4xl gap-4 pb-12 pt-24">
        <div className="text-center">
          <h4 className="mb-5 text-xl font-bold">WELCOME TO MY WORLD</h4>
          <h1 className="text-3xl font-bold text-textAccent md:text-4xl mdl:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I'm <span className="text-primaryColor capitalize">Claudia Alfonso</span>
          </h1>
          <h2 className="text-2xl font-bold text-textAccent md:text-3xl mdl:text-4xl lg:text-5xl xl:text-6xl">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ff014f" />
          </h2>
        </div>
        <div className="relative z-10 my-5 rounded-md bg-bgPrimary p-12 shadow-shadowOne">
          <FaQuoteLeft className="quote__icon left-2 top-4" />
          <p className="font-bodyFont text-base leading-6 tracking-wider">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I enjoy the
            process of turning ideas into reality using creative solutions.
          </p>
          <FaQuoteRight className="quote__icon botton bottom-2 right-2" />
        </div>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <ListSocial constainerStyle="listSocial" linkStyles="bannerIcon" />
          <a href="" className="btn btn__primary">
            Let Task
          </a>
        </div>
        <div className="h-[150px] w-[150px]  mdl:h-[200px] mdl:w-[200px] gradient rounded-full absolute top-0 left-0 blur-3xl opacity-70"></div>
      </FadeIn>

    </section>
  );
};

export default Banner;
