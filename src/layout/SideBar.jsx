import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import Logo from "../assets/logo/lo.png";
import SubMenu from "./child/SubMenu";
import { useState } from "react";

const SideBar = () => {
  const { pathname } = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const navigate = useNavigate();
  const handleOpenSubmenu = (menu) => {
    if (menu === true) {
      setOpenSubmenu(true);
    } else {
      setOpenSubmenu(false);
    }
  };
  return (
    <aside className="w-[20%] max-md:hidden max-w-[20%] py-6 px-8 flex flex-col  z-[9999] bg-whiteTheme-textColor text-whiteTheme-secondColor min-h-screen h-screen sticky">
      <header>
        <img src={Logo} alt="logo" className="w-32 h-24" />
      </header>
      <main className="mt-10 relative h-full">
        <ul className="flex flex-col gap-7">
          {navLinks?.map((links, index) => (
            <li
              key={index}
              className={`${
                pathname === links.path &&
                "p-3 bg-whiteTheme-primaryColor rounded-md hover:text-whiteTheme-secondColor"
              } hover:text-whiteTheme-primaryColor`}
              onClick={() => {
                handleOpenSubmenu(links.menu);
                links.menu && setOpenSubmenu(!openSubmenu);
              }}
            >
              <Link to={links.path} className="flex items-center gap-4">
                <span>
                  <links.icon size={22} />
                </span>
                <span className="text-base font-normal">{links.name}</span>
                <span>
                  {links.menu && (
                    <links.subMenuIcon
                      size={20}
                      className={`${openSubmenu && "rotate-180"}`}
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {openSubmenu && <SubMenu />}
      </main>
      <footer className="bottom-0">
        <span
          className="flex gap-3 items-center pb-2 cursor-pointer hover:text-whiteTheme-primaryColor"
          onClick={() => navigate("/")}
        >
          <IoLogOutOutline size={22} />
          <p>Logout</p>
        </span>
        <hr className="border-slate-400" />
        <p className="text-sm pt-2 text-slate-300">Powered by Boulot man</p>
      </footer>
    </aside>
  );
};

export default SideBar;
