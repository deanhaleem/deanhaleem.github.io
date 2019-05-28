import React, { Component } from "react";
import { Link } from "gatsby";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardGroup,
  Jumbotron,
} from "mdbreact";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MyCard from "../components/mycard";

import MarioImage from "../images/overworld.png";
import UnityImage from "../images/unitycrop.png";
import RobotImage from "../images/robot.jpg";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" />
          <main>
            <MDBContainer fluid>
              <Jumbotron>
                <MDBRow center>
                  <h2>Welcome</h2>
                </MDBRow>
                <MDBRow style={{ marginTop: "2rem" }}>
                  <MDBCol md="1" />
                  <MDBCol md="5" center>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        width="560"
                        height="400"
                        src="https://www.youtube.com/embed/VKNOURaNKcs"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </MDBCol>
                  <MDBCol
                    md="5"
                    style={{ fontSize: "21px" }}
                    className="align-self-center"
                  >
                    <p>
                      Here is a short video of the{" "}
                      <Link to="/mario_clone/">Super Mario Bros clone</Link> I
                      made in CSE 3902. The class itself wasn't exactly focused
                      on game development, but it definitely served as a good
                      starting point. This video is of the game after I redid
                      the project on my own. It isn't perfect, but this project
                      alone has taught me so much about code quality and what
                      goes into / what it means to have a maintainable system.
                      Check out the code on{" "}
                      <a
                        href="https://github.com/deanhaleem/mario-clone"
                        target="_blank"
                      >
                        GitHub
                      </a>
                      !
                    </p>
                  </MDBCol>
                  <MDBCol md="1" />
                </MDBRow>
              </Jumbotron>
              <Jumbotron>
                <MDBRow center>
                  <h2>Explore</h2>
                </MDBRow>
                <MDBRow center>
                  <MDBCardGroup deck>
                    <MyCard
                      imageSource={MarioImage}
                      title="Mario Clone"
                      text="A clone of the first level of the original Super Mario Bros. Made with MonoGame."
                      project="/mario_clone/"
                    />
                    <MyCard
                      imageSource={UnityImage}
                      title="Unity"
                      text="Small, simply Unity projects. Made to help learn Unity but also to help learn concepts in general, such as Inverse Kinematics and other graphics ideas."
                      project="/unity/"
                    />
                    <MyCard
                      imageSource={RobotImage}
                      title="FEH Robot"
                      text="FEH Robot competition where we built a robot in teams of four. The goal was to complete a course while doing certain tasks as fast as possible. "
                      project="/robot/"
                    />
                  </MDBCardGroup>
                </MDBRow>
              </Jumbotron>
            </MDBContainer>
          </main>
        </Layout>
      </>
    );
  }
}

export default App;
