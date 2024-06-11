import { Link } from "react-scroll";
import { navLinksdata } from "../../utils/source";

const NavMenu = ({ styleMenu }: { styleMenu: string }) => {
  return (
    <ul className={styleMenu}>
      {navLinksdata.map(({ id, title, link }) => (
        <li className="selection  text-lg font-medium tracking-wide " key={id}>
          <Link
            className="text-textAccent"
            activeClass="activeLink"
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
