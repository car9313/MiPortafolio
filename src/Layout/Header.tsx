import Navbar from "../components/UI/Navbar";
const Header = () => {
  return (
    <header
      id="header"
      className="header w-full  h-[70px] sticky top-0 z-50  duration-300 "
    >
      <Navbar />
    </header>
  );
};

export default Header;
