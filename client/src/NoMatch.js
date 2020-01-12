import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  font-size: 2rem;
`;

class NoMatch extends Component {
  render() {
    return (
      <Container>
        <Message>
          Oops, you found hidden page!<span role="img">😜</span>
        </Message>
        <Message>
          Go back to{" "}
          <a
            href="https://eunsu-portfolio.herokuapp.com"
            style={{ color: "#337ab7", textDecoration: "none" }}
          >
            homepage
          </a>
        </Message>
      </Container>
    );
  }
}

export default NoMatch;
