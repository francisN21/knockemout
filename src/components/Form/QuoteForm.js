import React from "react";

import { FormWrapper, Input, Select, TextArea } from "./QuoteFormStyles";
import Button from "../../styles/GlobalComponents/Button";
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
import axios from "axios";

const QuoteForm = () => {
  const onChange = () => {
    console.log("test");
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <Section>
      <SectionTitle main center>
        KnockEmOut <br />
        Pest Control
      </SectionTitle>
      <SectionText>
        Start knocking Em Out now by filling out the form below.
      </SectionText>
      <FormWrapper className="new-event-f" onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <Input type="text" name="name" onChange={onChange} />
        <label htmlFor="special">Email: </label>
        <Input type="text" name="special" onChange={onChange} />
        <label htmlFor="category">Select Service: </label>
        <Select name="category" id="category" onChange={onChange}>
          <option value="n/a">Please Select one</option>
          <option value="anime">Pest</option>
          <option value="beach">Rats</option>
          <option value="birthday">Mosquitos</option>
          <option value="car">Termite</option>
          <option value="default">Bee</option>
          <option value="disco">Other</option>
        </Select>
        <label htmlFor="description">Description: </label>
        <TextArea type="text" name="description" onChange={onChange}></TextArea>
        <label htmlFor="time">Time: </label>
        <Input type="time" name="time" onChange={onChange} />
        {/* <label htmlFor="private">Private: </label>
      <input type="checkbox" name="private" value="true" onChange={onChange} /> */}
        <label htmlFor="date">Date: </label>
        <Input type="date" name="date" onChange={onChange} />
        <Hr />
        <Button type="submit" className="btn btn-primary create-event">
          Request Quote
        </Button>
      </FormWrapper>
    </Section>
  );
};

export default QuoteForm;
