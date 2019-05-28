import React, { Component } from "react";

import { MDBContainer } from "mdbreact";

import ProjectJumbotron from "../components/projectjumbo";
import Layout from "../components/layout";
import SEO from "../components/seo";

import WebsiteImage from "../images/third_iteration.png";
import RobotImage from "../images/robot.jpg";

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <MDBContainer>
          <ProjectJumbotron
            title="Super Mario Bros Clone"
            src="https://www.youtube.com/embed/R2F_g45ArcY"
            sourceCode="https://github.com/deanhaleem/mario-clone"
            sourceLocation="GitHub"
            languages="C#"
            tools="MonoGame, Visual Studio, Azure Devops"
            description="A clone of the first level of the original Super Mario Bros. Made in teams of four in CSE 3902 at the Ohio State University. Involved Agile SCRUM methodologies, using Design Patterns to write a maintainable system, and what it's like living with a repository for an extended period of time."
            projectPage="/mario_clone/"
          />
          <ProjectJumbotron
            title="Unity Projects"
            src="https://www.youtube.com/embed/-EMA88QG04Y"
            sourceCode="https://github.com/deanhaleem/Unity"
            sourceLocation="GitHub"
            languages="C#"
            tools="Unity"
            description="Small Unity projects to learn how to use the engine. Also used to understand basic concepts about game development and graphics."
            projectPage="/unity/"
          />
          <ProjectJumbotron
            title="Personal Website"
            src={WebsiteImage}
            sourceCode="https://github.com/deanhaleem/deanhaleem.github.io"
            sourceLocation="GitHub"
            languages="HTML, CSS"
            tools="Material Design Bootstrap, React.js"
            description="Personal website to serve as sort of a central location for access to all my other projects. Has evolved to become a project worth talking about itself. Now on React, hopefully it can become something worth sharing as far as design goes soon."
            projectPage="/website/"
          />
          <ProjectJumbotron
            title="Fundamentals of Engineering Robot Design Project"
            src={RobotImage}
            sourceCode="http://u.osu.edu/feh17f7/"
            sourceLocation="Here (password: master_f7)"
            languages="Interactive C"
            tools="QT Creator, Solidworks"
            description="A robot competition for ENGR 1282.01 at the Ohio State University. Created a robot in teams of four. Involved programming, getting the electrical side working, as well as building the actual robot. A full engineering experience."
            awards="1st Place in Outstanding Achievment in Innovation"
            projectPage="/robot/"
          />
        </MDBContainer>
      </Layout>
    );
  }
}

export default ProjectsPage;
