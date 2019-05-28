import React, { Component } from "react";
import { Link } from "gatsby";

import { Jumbotron, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class ProjectJumbotron extends Component {
  render() {
    return (
      <Jumbotron>
        <MDBRow className="text-center">
          <h2>{this.props.title}</h2>
        </MDBRow>
        <MDBRow center style={{ marginTop: "2rem" }}>
          <MDBCol md="6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={this.props.src}
                scrolling="no"
              />
            </div>
          </MDBCol>
          <MDBCol md="6" className="align-self-center">
            <p>
              <strong>Source Code: </strong>
              <a href={this.props.sourceCode} target="_blank">
                {this.props.sourceLocation}
              </a>
            </p>
            <p>
              <strong>Language(s):</strong> {this.props.languages}
            </p>
            <p>
              <strong>Tools:</strong> {this.props.tools}
            </p>
            <strong>Project Description</strong>
            <p>{this.props.description}</p>
            {this.displayAwards()}
            <p>{this.props.awards}</p>
          </MDBCol>
        </MDBRow>
        <MDBRow end>
          <Link to={this.props.projectPage}>
            <MDBBtn style={{ marginRight: "2rem" }}>Go to project</MDBBtn>
          </Link>
        </MDBRow>
      </Jumbotron>
    );
  }

  displayAwards() {
    if (this.props.awards != undefined) {
      return <strong>Awards</strong>;
    }
  }
}

export default ProjectJumbotron;
