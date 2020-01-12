import React, { Component } from "react";
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
  Image,
  IntroSection,
  IntroMain,
  IntroTitle,
  IntroDate,
  IntroImageContainer,
  MainImageContainer
} from "../ProjectDetailUIComponents";

class FirstPlanet extends Component {
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
          <Image src={data.detail.first_planet_main} />
        </MainImageContainer>
        <Section>
          <SectionTitle>Motivation</SectionTitle>
          {data.detail.motivation.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <Section>
          <SectionTitle>Design & Research</SectionTitle>
          {data.detail.define.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MainImageContainer direction="row">
          <Image src={data.detail.first_planet_design} />
        </MainImageContainer>

        <Section>
          <SectionTitle>What I learned</SectionTitle>
          <SectionDescription>{data.detail.what_i_learned}</SectionDescription>
        </Section>
      </Container>
    );
  }
}

export default FirstPlanet;
