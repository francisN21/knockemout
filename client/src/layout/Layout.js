import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import NavHeader from "../components/NavBar/NavHeader";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      {/* <NavHeader /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
