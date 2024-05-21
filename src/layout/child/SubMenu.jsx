import { Link } from "react-router-dom";
import { productSubmenu } from "../../constants/navLinks";
Link;

const SubMenu = () => {
  return (
    <div>
      <ul className="flex flex-col p-3 gap-4 bg-whiteTheme-primaryColor/30">
        {productSubmenu?.map((menu, index) => (
          <li key={index}>
            <Link
              to={menu.path}
              className="text-whiteTheme-accentDark font-medium text-sm flex items-center gap-5"
            >
              <menu.icon size={17} />
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
