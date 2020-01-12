import React, { Component } from "react";
import CommonBound from "./ProjectDetail/CommonBound";
import Overfetch from "./ProjectDetail/Overfetch";
import ISTC from "./ProjectDetail/ISTC";
import PKNUNotifier from "./ProjectDetail/PKNUNotifier";
import FirstPlanet from "./ProjectDetail/FirstPlanet";

class ProjectDetail extends Component {
  render() {
    const { data } = this.props;
    const { title } = this.props.data;
    return title === "Common Bound" ? (
      <CommonBound data={data} />
    ) : title === "Overfetch" ? (
      <Overfetch data={data} />
    ) : title === "ISTC" ? (
      <ISTC data={data} />
    ) : title === "PKNU Notifier" ? (
      <PKNUNotifier data={data} />
    ) : title === "First Planet" ? (
      <FirstPlanet data={data} />
    ) : (
      undefined
    );
  }
}

export default ProjectDetail;
