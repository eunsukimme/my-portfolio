// main images
import cbound_image from "../images/main/CommonBound_mockup.png";
import overfetch_title_logo from "../images/main/overfetch_title_logo.png";
import tcqas from "../images/main/tcqas.png";
// tech logos
import aws from "../images/tech/aws.png";
import aws_s3 from "../images/tech/aws_s3.png";
import aws_rds from "../images/tech/aws_rds.png";
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
      "Common Bound is built using React, with a node backend and runs on Heroku. AWS RDS(PostgreSQL) provides the database solution and S3 stores object data. Styled-components is the CSS framework of choice for this project",
    image_url: cbound_image,
    stacks: [
      javascript,
      react,
      nodejs,
      styled_components,
      postgresql,
      aws,
      heroku
    ],
    link: "https://cbound.herokuapp.com",
    status: "available"
  },
  {
    title: "Overfetch",
    description:
      "Overfetch is a service for visualizing game data of Overwatch. It allows you to save time to view, understand, and analyze overwatch statistics",
    technology:
      "Overfetch uses D3 for visualizing dashboard to represent analyzed data, with react for easy page manipulation. On the backend an Express/Node.js app lives on a Heroku dyno that acts as a middleware to crawl Overwatch official homepage and return the information to the user",
    image_url: overfetch_title_logo,
    stacks: [javascript, react, nodejs, mongodb, heroku, d3],
    link: "https://overfetch.herokuapp.com",
    status: "available"
  },
  {
    title: "ISTC",
    description:
      "ISTC(Inspection System of Translated Contents) is designed to ensure that translations of Intellectual properties, which translates into various languages, are adressed transparently",
    technology:
      "To organize private channel by intellectual properties, I choose a widely used private blockchain 'Hyperledger'. I defined assets and transactions for inspecting process of translation by using hyperledger composer",
    image_url: tcqas,
    stacks: [javascript, hyperledger_fabric, hyperledger_composer],
    link:
      "https://github.com/eunsukimme/Translation-Content-Quality-Assurance-System",
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
