import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Layout from "../components/layout";
import SEO from "../components/seo";

import UnityJumbotron from "../components/unityjumbo";

class UnityPage extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO title="Unity" />
        <MDBContainer>
          <MDBRow center>
            <MDBCol className="text-center">
              <h5>
                These are small Unity projects I've done. Some from school, some
                on my own. Hopefully as I have more time, I can do full games
                instead of these small tasks.
              </h5>
            </MDBCol>
          </MDBRow>
          <UnityJumbotron
            src="https://www.youtube.com/embed/O8RHyhOEMpc"
            title="Cyclic Coordinate Descent"
            sourceCode="https://github.com/deanhaleem/Unity/tree/master/Inverse%20Kinematics"
            description="An implementation of inverse kinematics using cyclic coordinate descent. Not meant to be a challenging project, but it helped me understand how the process works."
          />
          <UnityJumbotron
            src="https://www.youtube.com/embed/7D58fRrizZI"
            title="Maze Game"
            description="A simple game made for CSE 3541 at the Ohio State University. Involves coding some collision from scratch using the vertex test, inverse kinematics to move an obstacle, hierchical modeling to rotate planets around each other, as well as random maze generation."
          />
        </MDBContainer>
      </Layout>
    );
  }
}

export default UnityPage;
