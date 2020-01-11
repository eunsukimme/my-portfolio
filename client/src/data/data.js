// main images
import cbound_image from "../images/main/CommonBound_mockup.png";
// tech logos
import aws from "../images/tech/aws.png";
import beautifulsoup from "../images/tech/beautifulsoup.png";
import c_sharp from "../images/tech/c_sharp.png";
import d3 from "../images/tech/d3.png";
import heroku from "../images/tech/heroku.png";
import hyperledger_composer from "../images/tech/hyperledger_composer.png";
import hyperledger_fabric from "../images/tech/hyperledger_fabric.png";
import javascript from "../images/tech/javascript.png";
import mongodb from "../images/tech/mongodb.png";
import nodejs from "../images/tech/nodejs.png";
import postgresql from "../images/tech/postgresql.png";
import python from "../images/tech/python.png";
import react from "../images/tech/react.png";
import styled_components from "../images/tech/styled_components.png";
import unity from "../images/tech/unity.png";

const data = [
  {
    title: "Common Bound",
    description:
      "Common Bound is a platform that enables individuals or companies who want to solve problems with artificial intelligence to crowdsource data for training AI",
    technology:
      "Common Bound is built using React, with a node backend for handling API requests, and runs on Heroku. PostgreSQL provides the database solution and styled-components is the CSS framework of choice for this project",
    image_url: cbound_image,
    stacks: [javascript, react, nodejs, postgresql, heroku, styled_components],
    link: "",
    status: "available"
  },
  {
    title: "Overfetch",
    description: "hi, there",
    image_url: "",
    stacks: [javascript, react, nodejs, mongodb, heroku, d3],
    link: "",
    status: "available"
  },
  {
    title: "Translate Content Quality Assurance System",
    description: "hahaha",
    image_url: "",
    stacks: [javascript, hyperledger_fabric, hyperledger_composer],
    link: "",
    status: "unavailable"
  },
  {
    title: "PKNU notifier(Slack Bot)",
    description: "ddd",
    image_url: "",
    stacks: [python, beautifulsoup, aws],
    link: "",
    status: "unavailable"
  },
  {
    title: "Last Planet",
    description: "hohoho",
    image_url: "",
    stacks: [c_sharp, unity],
    link: "",
    status: "available"
  }
];

export default data;
