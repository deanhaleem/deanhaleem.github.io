import React, { Component } from "react";

import { Jumbotron, MDBRow, MDBCol } from "mdbreact";

class UnityJumbotron extends Component {
  render() {
    return (
      <Jumbotron>
        <MDBRow center>
          <h2>{this.props.title}</h2>
        </MDBRow>
        <MDBRow style={{ marginTop: "2rem" }}>
          <MDBCol md="6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={this.props.src} />
            </div>
          </MDBCol>
          <MDBCol md="6" className="align-self-center">
            <p>
              <strong>Source Code: </strong>
              <a href={this.props.sourceCode} target="_blank">
                GitHub
              </a>
            </p>
            <p>
              <strong>Project Description</strong>
            </p>
            <p>{this.props.description}</p>
          </MDBCol>
        </MDBRow>
      </Jumbotron>
    );
  }
}

export default UnityJumbotron;
