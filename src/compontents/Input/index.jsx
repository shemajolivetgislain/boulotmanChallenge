import { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
  (
    {
      type = null,
      className = "",
      placeholder,
      onChange,
      required = false,
      defaultValue,
    },
    ref
  ) => {
    return (
      <>
        <input
          ref={ref}
          type={type || "text"}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          className={`${className} border-[1px] border-whiteTheme-primaryColor rounded-md p-2 w-full focus:outline-none focus:border-2 focus:border-whiteTheme-primaryColor transition:all duration-100 ease-out-in`}
        />
      </>
    );
  }
);
Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default Input;
