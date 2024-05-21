import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal({ title, subTitle, toggleFunction, children, className }) {
  return (
    <main
      className={`fixed inset-0 flex items-center justify-center z-[50000] flex-col`}
    >
      <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
      <div
        className={`bg-white border p-6 z-50 w-[40%] rounded-md ${className}`}
      >
        <div className="flex justify-between items-center font-semibold text-xl">
          <div className="flex flex-col ">
            <p className="text-whiteTheme-primaryColor font-semibold">
              {title}
            </p>
            <p className="text-whiteTheme-accentDark text-base font-normal">
              {subTitle}
            </p>
          </div>
          <button className="p-1 " onClick={toggleFunction}>
            <p className="text-whiteTheme-accentDark flex items-center">
              <IoIosCloseCircleOutline size={30} />
            </p>
          </button>
        </div>
        <div className="py-4">{children}</div>
      </div>
    </main>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  toggleFunction: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Modal;
