import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section nopadding>
    <LeftSection>
      <SectionTitle main center>
        KnockEmOut <br />
        Pest Control
      </SectionTitle>
      <SectionText>
        We utilize traditional pest control methodologies in conjunction with
        environmentally safe green pest control systems to exterminate your
        problem pests effectively and efficiently.
      </SectionText>
      <Button>
        Knock'Em <img src="./images/GlovesIco.png" alt="KEO" size="3rem" />
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
