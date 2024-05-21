import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

export const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: RxDashboard,
    menu: false,
  },
  {
    name: "Products",
    path: "/products",
    icon: MdOutlineInventory2,
    menu: true,
    subMenuIcon: FaAngleDown,
  },
];

export const productSubmenu = [
  {
    name: "Add product",
    path: "/products/newProducts",
    icon: MdCreateNewFolder,
  },
  {
    name: "Products",
    path: "/products",
    icon: MdOutlineInventory2,
  },
];
