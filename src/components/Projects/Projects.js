import React from "react";

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
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="project">
    <SectionDivider />
    <div>
      <SectionTitle main>Services</SectionTitle>
      <div>
        <SectionText>
          We partner with our clients to fight all manner of pests and coach you
          in preventing fights in the future. We are well versed in offensive
          and defensive techniques. From lightweight to heavyweight...let us
          champion your bout against all pests.
        </SectionText>
      </div>
      <div>
        <CardInfo>
          <h3>Why Knock 'Em Out?</h3>
          <ul>
            <li>
              • Servicing the following countries in the San Francisco Bay area:
              Solano, Sonoma, Napa, Marin, Contra Costa
            </li>
            <li>• Traditional and Green Pest Control Methods</li>
            <li>• Locally based Solano County Native</li>
            <li>• Licensed & Bonded</li>
          </ul>
        </CardInfo>
      </div>
      <GridContainer>
        {projects.map(({ id, title, description, tags, image }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </BlogCard>
        ))}
      </GridContainer>
    </div>
  </Section>
);

export default Projects;
