import React from "react";
import { Seo, Navbar } from ".";
import "../css/layout.css";

const Layout = ({htitle, children }) => {
  return (
    <React.Fragment>
      <Seo title={htitle} />
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
