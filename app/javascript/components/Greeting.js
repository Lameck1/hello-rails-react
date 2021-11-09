import React from "react";
import PropTypes from "prop-types";

const HelloWorld = ({ greeting }) => (
  <React.Fragment>
    {greeting}
  </React.Fragment>
);

HelloWorld.defaultProps = {
  greeting: ''
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default Greeting;
