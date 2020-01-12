import React, { Component } from "react";
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
  ImageContainer,
  MultipleImageContainer,
  SmallImage,
  Image,
  IntroSection,
  IntroMain,
  IntroTitle,
  IntroDate,
  IntroImageContainer,
  MainImageContainer
} from "../ProjectDetailUIComponents";

class ISTC extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <IntroSection>
          <IntroMain>
            <IntroTitle>{data.title}</IntroTitle>
            <IntroDate>
              <span>dApp Developer</span>
              <span>Mar 2019</span>
            </IntroDate>
            <SectionDescription>{data.description}</SectionDescription>
          </IntroMain>
          <IntroImageContainer>
            <Image src={data.image_url} />
          </IntroImageContainer>
        </IntroSection>
        <MainImageContainer>
          <Image src={data.detail.istc_main} />
        </MainImageContainer>
        <Section>
          <SectionTitle>Motivation</SectionTitle>
          {data.detail.motivation.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MainImageContainer>
          <Image src={data.detail.problem} />
          <figcaption
            style={{ color: "grey", textAlign: "center", paddingTop: "16px" }}
          >
            Article related about mistranslation of Avengers(source:
            https://metro.co.uk)
          </figcaption>
        </MainImageContainer>
        <Section>
          <SectionTitle>Define problem & Research</SectionTitle>
          {data.detail.define.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MultipleImageContainer direction="row">
          <SmallImage src={data.detail.hyperledger_logo} />
        </MultipleImageContainer>
        <Section>
          <SectionTitle>Ideate</SectionTitle>
          {data.detail.ideate.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MainImageContainer>
          <Image src={data.detail.istc_process} />
          <figcaption
            style={{ color: "grey", textAlign: "center", paddingTop: "16px" }}
          >
            Transaction process of our dApp
          </figcaption>
        </MainImageContainer>
        <Section>
          <SectionTitle>Prototype</SectionTitle>
          {data.detail.prototype.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MultipleImageContainer direction="row">
          <Image src={data.detail.prototype1} />
          <Image src={data.detail.prototype2} />
          <figcaption
            style={{ color: "grey", textAlign: "center", padding: "16px" }}
          >
            Early sketchs of Overfetch
          </figcaption>
          <Image src="https://github.com/eunsukimme/Overfetch/raw/master/document/readme/play.gif" />
          <figcaption
            style={{ color: "grey", textAlign: "center", paddingTop: "16px" }}
          >
            Overfetch DEMO
          </figcaption>
        </MultipleImageContainer>
        <Section>
          <SectionTitle>Ongoing plan</SectionTitle>
          <SectionDescription>{data.detail.ongoing}</SectionDescription>
        </Section>
        <Section>
          <SectionTitle>Acknowledgment</SectionTitle>
          <SectionDescription>{data.detail.acknowledgment}</SectionDescription>
        </Section>
      </Container>
    );
  }
}

export default ISTC;
