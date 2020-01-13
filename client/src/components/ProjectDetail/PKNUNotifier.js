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

class PKNUNotifier extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <IntroSection>
          <IntroMain>
            <IntroTitle>{data.title}</IntroTitle>
            <IntroDate>
              <span>dApp Developer</span>
              <span>May 2018</span>
            </IntroDate>
            <SectionDescription>{data.description}</SectionDescription>
          </IntroMain>
          <IntroImageContainer>
            <Image src={data.image_url} />
          </IntroImageContainer>
        </IntroSection>
        <MainImageContainer>
          <Image src="https://user-images.githubusercontent.com/31213226/64647808-a90c2e80-d454-11e9-8d61-72a233ea01ca.png" />
        </MainImageContainer>
        <Section>
          <SectionTitle>Motivation</SectionTitle>
          {data.detail.motivation.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <Section>
          <SectionTitle>Define problem & Research</SectionTitle>
          {data.detail.define.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <MainImageContainer direction="row">
          <Image src={data.detail.pknu_notifier_process} />
        </MainImageContainer>
        <Section>
          <SectionTitle>Ideate & Prototype</SectionTitle>
          {data.detail.ideate.map((el, i) => {
            return <SectionDescription key={i}>{el}</SectionDescription>;
          })}
        </Section>
        <Section>
          <SectionTitle>What I learned</SectionTitle>
          <SectionDescription>{data.detail.what_i_learned}</SectionDescription>
        </Section>
      </Container>
    );
  }
}

export default PKNUNotifier;
