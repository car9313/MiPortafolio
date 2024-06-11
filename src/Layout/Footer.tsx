import { animateScroll as scroll } from "react-scroll";

import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import ListSocial from "../components/UI/ListSocial";
import NavMenu from "../components/UI/NavMenu";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const scrollHandler = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > 420) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <footer id="footer" className="bg-bgSecundary py-6 seccion">
      <div className="w-20 h-20 group flex justify-center items-end  fixed bottom-2  right-1 cursor-pointer">
        <button
          className={`${visible ? "" : "hidden"
            } animate-bounce  btn bg-primaryColor rounded-full w-16 h-16 text-lg font-semibold  group-hover:animate-none z-50`}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <FaArrowUp />
        </button>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <ListSocial constainerStyle="listSocial" linkStyles="bannerIcon" />
        <NavMenu styleMenu="flex flex-col mdl:flex-row justify-evenly items-center text-pri  w-auto static gap-4  h-auto" />
        <article className="copyright__container">
          <h3>Copyright | Realizado por Claudia Alfonso Rodriguez 2023</h3>
        </article>
      </div>
    </footer>
  );
};
export default Footer;
