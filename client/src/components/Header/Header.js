import Link from "next/link";
import React from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  ContactDropDown,
  Span,
} from "./HeaderStyles";

function Header() {
  const test = () => console.log("Test");
  const notify = () =>
    toast.success("Number Copied to Clipboard", {
      position: toast.POSITION.TOP_CENTER,
    });
  return (
    <Container>
      <ToastContainer />
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            {/* <DiCssdeck size="3rem" /> */}
            <img src="./images/GlovesIco.png" alt="KEO" size="3rem" />
            <Span>KnockEmOut</Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href="#Services">
            <NavLink>Pay Now</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#Hours & Directions">
            <NavLink>Find Us</NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <SocialIcons href="https://www.instagram.com/keopestcontrol/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>

        <SocialIcons
          onClick={
            (() => navigator.clipboard.writeText("(800) 733-9478"), notify)
          }
        >
          <AiFillPhone size="3rem" />
        </SocialIcons>
        <SocialIcons href="/about">About</SocialIcons>
      </Div3>
    </Container>
  );
}
export default Header;
