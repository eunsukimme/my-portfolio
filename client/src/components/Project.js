import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 580px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.background};

  clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
`;

const ProjectContainer = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: ${props => (props.index % 2 ? "row-reverse" : "row")};
`;
const ImageContainer = styled.div`
  width: 65%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 80%;
  height: 300px;
  background-image: url(${props => props.image_url});
  background-size: contain;
  background-repeat: no-repeat;
`;

const InfoContainer = styled.div`
  width: 35%;
  padding: 20px;
`;
const Title = styled.div`
  padding-bottom: 10px;
  font-size: 1.8rem;
  font-weight: regular;
`;
const SemiTitle = styled.div`
  padding: 8px 0px;
  font-size: 1.2rem;
  font-weight; regular;
`;
const Description = styled.div`
  font-size: 1rem;
  color: #4a4e69;
`;

const Sub = styled.div`
  height: 110px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Stacks = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  width: 200px;
  padding: 6px 12px;

  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 400;

  background-color: #549657;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px darkgrey;

  z-index: 2;

  :hover {
    background-color: #327635;
  }
`;

class Project extends Component {
  render() {
    return (
      <Container background={this.props.background}>
        <ProjectContainer>
          <Main index={this.props.index}>
            <ImageContainer>
              <Image image_url={this.props.image_url} />
            </ImageContainer>
            <InfoContainer>
              <Title>{this.props.title}</Title>
              <Description>{this.props.description}</Description>
              <SemiTitle>Technology</SemiTitle>
              <Description>{this.props.technology}</Description>
            </InfoContainer>
          </Main>
          <Sub>
            <Stacks>
              {this.props.stacks.map((stack, i) => {
                return (
                  <img
                    key={i}
                    src={stack}
                    style={{ height: "36px", margin: "5px 10px" }}
                  />
                );
              })}
            </Stacks>
            <Button href={this.props.link} target="_blank">
              {this.props.status === "available"
                ? "Go to app"
                : "View on Github"}
            </Button>
          </Sub>
        </ProjectContainer>
      </Container>
    );
  }
}

export default Project;
