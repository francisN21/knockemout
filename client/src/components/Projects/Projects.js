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
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="project">
    <SectionDivider />
    <div>
      <SectionTitle main>Services</SectionTitle>
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
