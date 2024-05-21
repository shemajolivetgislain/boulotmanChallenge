import PropTypes from "prop-types";

const ContainerHolder = ({ children, className }) => {
  return (
    <section
      className={`w-full bg-yellow-50 min-h-[89vh] h-[89vh] p-8 overflow-auto ${className}`}
    >
      {children}
    </section>
  );
};

ContainerHolder.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default ContainerHolder;
