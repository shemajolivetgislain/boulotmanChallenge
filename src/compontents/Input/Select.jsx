import PropTypes from "prop-types";

const SelectInput = ({ name, id, options, className }) => {
  return (
    <select
      name={name}
      id={id}
      className={`border-[1px] border-whiteTheme-primaryColor rounded-md p-2 w-full focus:outline-none focus:border-2 focus:border-whiteTheme-primaryColor transition:all duration-100 ease-out-in${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default SelectInput;
