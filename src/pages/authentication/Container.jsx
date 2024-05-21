import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <section className="py-12 px-48 w-full min-h-full h-full bg-yellow-100 ">
      <div>{children}</div>
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
