import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 460px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${props => props.src});
  background-size: contain;
  border-radius: 100%;
  box-shadow: 0px 4px 6px 2px lightgrey;
`;
const ProfileContainer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: regular;
`;
const Position = styled.div`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
const Introduction = styled.div`
  text-align: center;
  margin-bottom: 6px;
  font-size: 1rem;
  color: #4a4e69;
`;
const Links = styled.div`
  margin-bottom: 6px;
  font-size: 1rem;
`;

class Profile extends Component {
  render() {
    return (
      <Container>
        <ImageContainer>
          <Image src="https://avatars1.githubusercontent.com/u/31213226?s=460&v=4" />
        </ImageContainer>
        <ProfileContainer>
          <Name>Eunsu Kim</Name>
          <Position>Junior Web Developer</Position>
          <Introduction>
            Love Web, Data Science, Machine Learning & Deep Learning
          </Introduction>
          <Links>
            <a
              href="https://eunsukim.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#337ab7" }}
            >
              eunsukim.me
            </a>
          </Links>
        </ProfileContainer>
      </Container>
    );
  }
}

export default Profile;
