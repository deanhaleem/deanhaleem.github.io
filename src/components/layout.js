import React from "react";
import PropTypes from "prop-types";

import MyNavbar from "./mynavbar";
import MyFooter from "./myfooter";

const Layout = ({ children }) => (
  <>
    <MyNavbar />
    {children}
    <MyFooter />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
