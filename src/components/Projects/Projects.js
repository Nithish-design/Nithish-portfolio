import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/a.png";

import editor from "../../Assets/Projects/calci.png";
import chatify from "../../Assets/Projects/new.png";
import suicide from "../../Assets/Projects/bmi.png";
import bitsOfCode from "../../Assets/Projects/file.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=<b>"Quick Travel"</b>
              description="	The Quick Travel Information system is a web-based application designed to provide users with comprehensive travel information. It features a user-friendly interface that allows users to search and retrieve bus details efficiently. The system ensures quick access to accurate travel information, enhancing the user experience. This project highlights Nithish's expertise in developing intuitive and functional web applications."
              ghLink="https://github.com/Nithish-design/quick-travel"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=<b>"GT Polling"</b>
              description="Developed a Polling Website that offers real-time updates and displays polling results dynamically. The site allows users to participate in polls, view live updates, and see the results as they come in. It features a responsive design for seamless access across devices. The backend integration ensures smooth data handling and real-time updates. This project showcases Nithish's skills in full-stack development, particularly in handling real-time data."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=<b>"Calculator"</b>
              description="	Created a general calculator, showcasing proficiency in precise calculations and intuitive interfaces.	Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=<b>"Age-Calculator"</b>
              description="Created a general Age calculator, showcasing proficiency in precise calculations and intuitive interfaces.Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=<b>"BMI-Calculator"</b>
              description="Created a general Age calculator, showcasing proficiency in precise calculations and intuitive interfaces.Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
