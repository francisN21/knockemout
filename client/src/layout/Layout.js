import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import NavHeader from "../components/NavBar/NavHeader";
import { Container } from "./LayoutStyles";

import "react-toastify/dist/ReactToastify.css";

export function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
