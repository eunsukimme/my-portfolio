import React, { Component } from "react";
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
  ImageContainer,
  MultipleImageContainer,
  Image,
  SmallImage,
  IntroSection,
  IntroMain,
  IntroTitle,
  IntroDate,
  IntroImageContainer,
  MainImageContainer
} from "../ProjectDetailUIComponents";

class CommonBound extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <IntroSection>
          <IntroMain>
            <IntroTitle>{data.title}</IntroTitle>
            <IntroDate>
              <span>Lead Developer</span>
              <span>May 2019</span>
            </IntroDate>
            <SectionDescription>{data.description}</SectionDescription>
          </IntroMain>
          <IntroImageContainer>
            <Image src={data.image_url} />
          </IntroImageContainer>
        </IntroSection>
        <MainImageContainer>
          <Image src={data.detail.main_image_url} />
        </MainImageContainer>
        <Section>
          <SectionTitle>Motivation</SectionTitle>
          {data.detail.motivation.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <ImageContainer>
          <Image src={data.detail.ai_research_image_url} />
          <figcaption
            style={{ color: "grey", textAlign: "center", paddingTop: "16px" }}
          >
            AI industry in Korea(source: KAIST Research Center)
          </figcaption>
        </ImageContainer>
        <Section>
          <SectionTitle>Define problem & Research</SectionTitle>
          {data.detail.define.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MultipleImageContainer direction="row">
          <SmallImage src={data.detail.aws_mechanical_turk} />
          <SmallImage src={data.detail.figure_eight} />
        </MultipleImageContainer>
        <Section>
          <SectionTitle>Checking out the competition & Ideate</SectionTitle>
          {data.detail.ideate.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MainImageContainer>
          <Image src={data.detail.design} />
        </MainImageContainer>
        <Section>
          <SectionTitle>Prototype</SectionTitle>
          {data.detail.prototype.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MultipleImageContainer direction="row">
          <Image src="https://github.com/Common-Bound/cbound-web/raw/master/DEMO/cbound_requester_dashboard.gif?raw=true" />
          <Image src="https://github.com/Common-Bound/cbound-web/raw/master/DEMO/cbound_join_project_make_data.gif?raw=true" />
        </MultipleImageContainer>
        <Section>
          <SectionTitle>Spreading its wings</SectionTitle>
          <SectionDescription>{data.detail.result}</SectionDescription>
        </Section>
        <Section>
          <SectionTitle>Acknowledgment</SectionTitle>
          <SectionDescription>{data.detail.acknowledgment}</SectionDescription>
        </Section>
      </Container>
    );
  }
}

export default CommonBound;
