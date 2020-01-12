// main images
import cbound_image from "../images/main/CommonBound_mockup.png";
import overfetch_title_logo from "../images/main/overfetch_title_logo.png";
import tcqas from "../images/main/tcqas.png";
import pknu_notifier from "../images/main/pknu_notifier.png";
import first_planet from "../images/main/first_planet.png";
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
// details
/// Common Bound
import common_bound_main from "../images/details/common_bound/main.png";
import ai_research from "../images/details/common_bound/ai_research.png";
import aws_mechanical_turk from "../images/details/common_bound/aws_mechanical_turk.jpg";
import figure_eight from "../images/details/common_bound/figure_eight.png";
import design1 from "../images/details/common_bound/design1.jpeg";
import design2 from "../images/details/common_bound/design2.jpeg";
import design3 from "../images/details/common_bound/design3.jpeg";
/// Overfetch
import main from "../images/details/overfetch/main.png";
import overwatch_statistics from "../images/details/overfetch/overwatch_statistics.png";
import process from "../images/details/overfetch/process.png";
import prototype1 from "../images/details/overfetch/prototype1.jpg";
import prototype2 from "../images/details/overfetch/prototype2.jpg";

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
    status: "available",
    detail: {
      motivation: [
        `When I fell in love with machine learning, I wanted to create an application using machine learning but 
      whenever I came up with ideas, I realized that it was very tough to collect data to train models. I told my team and 
      friends about these worries, and I realized that there are so many friends having a similar problem with me. Even members 
      of the Facebook group of tensorflow users in Korea have often complained about this problem. At that moment, I realized that 
      this was not only my problem. So I started to think a lot about this problem.`
      ],
      define: [
        `In order to create the data needed for machine learning and deep learning, it must be accompanied by labeling data. 
      This behavior is based on a person's cognitive abilities, but it's so cumbersome and time consuming for AI technicians to label data alone. 
      I thought that ordinary people could participate in labeling, except when dealing with data in special field such as healthcare and law. 
      Therefore, in order to easily obtain the data used for machine learning, I thought that many people should be allowed to 
      participate and there must be an intermediary to manage these process.`,
        `I started to search for similar businesses. Overseas, there were AWS Mechanical Turk and Figure Eight, but it was hard to 
        find a business to benchmark in Korea. That's the main reason why machine learning researcher and engineers in Korea have 
        difficulty for getting data. Therefore, we began to develop a easy-to-use platform that made it easy to gather data for korean
        machine learning engineers.`
      ],
      ideate: [
        `Here's how We thought about setting a strategy to differentiate our service from the competition: We focused on specific data(image, audio, etc.), 
        to speed up data production through semi-automatic labeling, and automatically inspecting the produced data. In other words, 
        we planned to create an interface that allows worker to use a high-performance model in a specific task during labeling. 
        It is also about creating machine learning models that predict the quality of the produced data based on event information 
        (labeling times, etc.) that occur while labeling the data.  `
      ],
      prototype: [
        `We developed the web application with React, Nodejs, and PostgreSQL, and divided the customer into data producers (labelers) and 
        requestors to provide different functions. First, we developed an online workspace that allows data producers to crop and 
        label specific parts of the image, and implemented inspection logic to allow data producers to directly participate in the 
        validation of data. We also developed a page where labeler can check the details of their points and the data they created.`,
        `Next, we developed a project creation page that allows data requesters to gather the data producers by specifying the 
        required data. Finally, We provided a monitoring page where data requester can immediately see the data produced 
        since that time. In addition, the data can be directly downloaded in the form of CSV, JSON, etc.`
      ],
      result: [
        `Unfortunately, we could not make huge business accomplishments during the supporting period, but we were able to empathize with 
        the need for data from machine learning researchers and see the potential growth of the data acquisition market. After all of 
        the initial research, planning and testing, it’s nice to see a product get released into the wild, spread its wings and 
        take flight.`
      ],
      acknowledgment: [
        `Common Bound is a service created with the support of SW Maestro managed by the Ministry of Science and ICT, Korea.`
      ],
      main_image_url: common_bound_main,
      ai_research_image_url: ai_research,
      aws_mechanical_turk: aws_mechanical_turk,
      figure_eight: figure_eight,
      design1: design1,
      design2: design2,
      design3: design3
    }
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
    status: "available",
    detail: {
      motivation: [
        `Overwatch official website (https://playoverwatch.com/en-us/) provides a service that allows users to view gameplay data. 
        In this service, users can check the most champions based on various criteria, and can check various game data accumulated 
        during the play of each hero.`,
        `One day, I had fun playing Overwatch, and I got access to the Overwatch official homepage to check my game statistics. 
        Looking at my game stats, I thought there was too much data, which made it difficult to catch meaningful information.`
      ],
      define: [
        `The game data such as playtime and damage were expressed only by numbers, so I felt that it was difficult to understand 
        my game skills intuitively. So I thought 'why not analyze this much data so that I can easily recognize my game skills?'.
        Because Overwatch stats are already public, so I thought it would be much nicer to just visualize them. Also, I could 
        check all the information of public users, so I thought I could compare them with other users. Many ideas came to mind 
        and I quickly sorted them out and shared them with my team.`
      ],
      ideate: [
        `Our team has come up with the following workarounds to address these issues and allow users to derive meaningful results 
        from their game data to provide a better play experience. First, we decided to select, organize and classify the data with 
        significant values ​​among the game data of users. Next, we thought that we could differentiate our existing services by 
        visualizing the selected data in an easy-to-understand form and providing feedback to play better based on the user's data.`
      ],
      prototype: [
        `We benchmarked the design of the existing search service OP.GG, and crawled data from the Overwatch official homepage with 
        cheerio.js to import the public user's data and build our own database. In addition, React, Node.js, and MongoDB were used to 
        develop responsive web apps to provide a flexible interface on a variety of devices, including mobile, tablets, and desktops.
        Also we have developed a feedback feature that provides users with advice to improve skills by support of community survey 
        and help of Grand Master acquaintances. Finally, we used D3.js to visualize the data in circles and bar graphs, and compare 
        them by user and by tier.`
      ],
      ongoing: [
        `We plan on renewing design of the homepage and providing pro features analyzing data to improve user experience. I think 
        it’s important to be continuously trying analysis data to improve information gain, rather than just concentrating on 
        visualizing data.`
      ],
      acknowledgment: [
        `Overfetch is a project supported by the Korea Scholarship Foundation and Blizzard Entertainment.`
      ],
      main_image_url: main,
      overwatch_statistics: overwatch_statistics,
      process: process,
      prototype1: prototype1,
      prototype2: prototype2
    }
  },
  {
    title: "ISTC",
    description:
      "ISTC(Inspection System of Translated Contents) is designed to ensure that translations of Intellectual properties, which translates into various languages, are addressed transparently",
    technology:
      "To organize private channel by intellectual properties, I choose a widely used private blockchain 'Hyperledger'. I defined assets and transactions for inspecting process of translation by using hyperledger composer",
    image_url: tcqas,
    stacks: [javascript, hyperledger_fabric, hyperledger_composer],
    link:
      "https://github.com/eunsukimme/Translation-Content-Quality-Assurance-System",
    status: "unavailable",
    detail: {
      motivation: [],
      define: [],
      ideate: [],
      prototype: [],
      test: []
    }
  },
  {
    title: "PKNU Notifier",
    description:
      "This app is a slack bot which parses notices of PKNU(Pukyong National University). This bot crawls notices of PKNU and compare them with previous data. if there's a new one, then the bot text a message to predefined slack channel",
    technology:
      "The Slack bot, which requests information from PKNU, parses the response with beautifulsoup, and AWS EC2 execute the code every minute to delivers new notices back to the channel",
    image_url: pknu_notifier,
    stacks: [python, beautifulsoup, aws],
    link: "https://github.com/eunsukimme/PKNU-notice-parser",
    status: "unavailable",
    detail: {
      motivation: [],
      define: [],
      ideate: [],
      prototype: [],
      test: []
    }
  },
  {
    title: "First Planet",
    description:
      "First Planet is a 2.5D barrage shooting game that uses energy to develop planets and defeat enemies of the universe. I participated this team and developed planetary weapon system",
    technology: "First Planet is built using Unity, with a various assets",
    image_url: first_planet,
    stacks: [c_sharp, unity],
    link: "https://store.steampowered.com/app/993220/FirstPlanet",
    status: "available",
    detail: {
      motivation: [],
      define: [],
      ideate: [],
      prototype: [],
      test: []
    }
  }
];

export default data;
