import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(800)733-9478">(800)733-9478</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="https://www.google.com/maps/place/1735+Enterprise+Dr+STE+101A,+Fairfield,+CA+94533/@38.2426204,-122.0621272,17z/data=!3m1!4b1!4m5!3m4!1s0x8085144013fe8ddd:0xa0bc559763ad6af0!8m2!3d38.2426204!4d-122.0599385">
            1735 Enterprise Drive, Suite 101 Fairfield, CA 94533
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
