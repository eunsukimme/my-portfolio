import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./components/Profile";
import data from "./data/data";
import Project from "./components/Project";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

const ProfileContainer = styled.div`
  width: 100%;
`;

const MainContainer = styled.div`
  width: 100%;
`;

const FooterContainer = styled.div`
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      projects: []
    };
  }

  async componentWillMount() {
    const _projects = await this.state.data.map((el, i) => {
      return (
        <Project
          key={i}
          index={i}
          title={el.title}
          description={el.description}
          technology={el.technology}
          image_url={el.image_url}
          stacks={el.stacks}
          link={el.link}
          status={el.status}
          background={i % 2 ? "white" : "lightgrey"}
        />
      );
    });
    this.setState({
      projects: _projects
    });
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {/* homepage */}
          <Route exact path="/">
            <Container>
              <ProfileContainer>
                <Profile />
              </ProfileContainer>
              <MainContainer>{this.state.projects}</MainContainer>
              <FooterContainer>footer</FooterContainer>
            </Container>
          </Route>
          {/* project details */}
          <Route path="/:title" component={ProjectDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
