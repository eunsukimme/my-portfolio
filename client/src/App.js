import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Profile from "./components/Profile";
import data from "./data/data";
import Project from "./components/Project";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import NoMatch from "./NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            </Container>
          </Route>
          {/* project details */}
          {this.state.data.map((el, i) => {
            return (
              <Route
                key={i}
                path={`/${el.title}`}
                render={props => <ProjectDetail {...props} data={data[i]} />}
              />
            );
          })}
          {/* 404 Not Found */}
          <Route component={NoMatch} />
        </Switch>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Router>
    );
  }
}

export default App;
