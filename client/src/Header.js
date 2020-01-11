import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #93ca44;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <a
          href="https://eunsukim.me"
          target="_blank"
          style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          rel="noopener noreferrer"
        >
          Currently I'm available for work, get in touch
        </a>
      </Container>
    );
  }
}

export default Header;
