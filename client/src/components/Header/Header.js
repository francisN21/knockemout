import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
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

const Header = () => (
  <Container>
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
      <SocialIcons href="https://www.instagram.com/keopestcontrol/">
        About
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
