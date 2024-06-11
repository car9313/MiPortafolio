import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoLogoBuffer } from "react-icons/io";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);

  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.toggle("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex h-full w-full items-center justify-between px-4">
      <div className="relative flex cursor-pointer items-center">
        <IoLogoBuffer size={35} />
        <h1 className="text-2xl font-semibold">
          Clau
          <span className="text-primaryColor">Web</span>
        </h1>
      </div>

      <div>
        <NavMenu styleMenu="hidden mdl:flex justify-evenly items-center  w-auto static gap-6  lg:gap-10 h-auto" />
        {menuShow && (
          <NavMenu styleMenu="mdl:hidden fixed top-14  left-0  w-full h-screen  bg-bgPrimary p-4  flex-col flex justify-evenly items-center  gap-3" />
        )}
      </div>

      <div className="outline: none flex items-center gap-1">
        <button
          className={theme === "dark" ? "theme-btn" : "theme-btn active"}
          aria-label="Change Theme"
          title="Change Theme"
          data-theme-btn
          onClick={handleThemeSwitch}
        >
          <span className="icon"></span>
        </button>
        <button
          className="tex inline-flex h-10 w-10 items-center justify-center rounded-full text-xl text-text mdl:hidden"
          onClick={() => setMenuShow(!menuShow)}
        >
          {menuShow ? <MdClose /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
