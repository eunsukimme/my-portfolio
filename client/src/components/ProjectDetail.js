import React, { Component } from "react";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentWillMount() {
    console.log(this.props);
    const title = this.props.match.params.title;
    this.setState({
      title: title
    });
  }

  render() {
    return <div>{this.state.title}</div>;
  }
}

export default ProjectDetail;
