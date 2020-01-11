import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Main = styled.div`
  font-size: 1.5rem;
  color: black;
  margin: 16px;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Icon = styled.a`
  color: black;
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <MessageContainer>
          <Main>Let's make things that make a diffrence</Main>
          <IconContainer>
            <Icon href="mailto:eunsu.dev@gmail.com">
              <i style={{ fontSize: "1.5rem" }} class="far fa-envelope"></i>
            </Icon>
            <Icon
              href="https://www.facebook.com/profile.php?id=100003647254099"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ fontSize: "1.5rem" }} class="fab fa-facebook-f"></i>
            </Icon>
            <Icon
              href="https://www.instagram.com/eunsu_wag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ fontSize: "1.5rem" }} class="fab fa-instagram"></i>
            </Icon>
            <Icon
              href="https://www.github.com/eunsukimme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ fontSize: "1.5rem" }} class="fab fa-github-alt"></i>
            </Icon>
            <Icon
              href="https://www.linkedin.com/in/eunsukimme/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i style={{ fontSize: "1.5rem" }} class="fab fa-linkedin-in"></i>
            </Icon>
          </IconContainer>
        </MessageContainer>
      </Container>
    );
  }
}

export default Footer;
