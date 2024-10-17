import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

// typeof logo === "string";

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-20 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navLink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={navLink._id}
            >
              <Link
                activeClass="active"
                to={navLink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
