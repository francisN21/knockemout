import React from "react";

import Button from "../../styles/GlobalComponents/Button";
import AboutImg from "./AboutStyles";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../Projects/ProjectsStyles";

const About = () => {
  return (
    <Section>
      <SectionTitle main center>
        KnockEmOut <br />
        Pest Control
      </SectionTitle>
      <AboutImg src="./images/KEOTeam.jpg" />
      <Tag>
        We are a local, family-owned & operated business. With over 30 years of
        field experience, we are confident we can take care of your pest control
        needs - it's not just our name, it really is what we do!
      </Tag>
      <TagList>
        At Knock 'Em Out Pest Control, we take a mixed martial arts approach
        towards defeating our pesky opponents. When going into battle,
        mixed-martial artists take into account a long history of techniques -
        mixing the old and proven with the new and innovative - and incorporate
        any and all combinations of tools in their arsenal to defeat their
        opponent. At Knock 'Em Out Pest Control, we utilize traditional pest
        control methodologies in conjunction with environmentally safe green
        pest control systems to exterminate your problem pests effectively and
        efficiently. This concept is firmly embedded into our Integrated Pest
        Management (IPM) program to help keep you and your surroundings safe. We
        identify your opponent, analyze their weakness, take inventory of the
        best tools to use, then plan and execute the attack. This sets us apart
        in assessing and solving your problems with the most effective attack
        possible. Knock 'Em Out Pest Control offers thorough inspections of your
        property to identify conducive conditions and areas of current
        infestation and reveal possible points of access. Our highly trained &
        licensed Field Representatives will advise you on the proper treatment
        program to rid of your pesky pest problems and prevent future troubles.
        We'll fight for you and coach you on future battles, as well as avoiding
        them all together. Save yourselves the headache, the hassles, but most
        importantly hundreds or possibly even thousands of dollars down the road
        and contact Knock 'Em Out Pest Control today! You'll be glad you did!
      </TagList>
    </Section>
  );
};

export default About;
