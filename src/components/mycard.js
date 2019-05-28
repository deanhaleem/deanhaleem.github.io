import React, { Component } from "react";
import { Link } from "gatsby";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

class MyCard extends Component {
  state = {};
  render() {
    return (
      <MDBCard
        style={{
          width: "22rem",
          height: "30rem",
          margin: "2rem 5rem 2rem 5rem",
        }}
      >
        <MDBCardImage
          src={this.props.imageSource}
          width="400px"
          height="300px"
          top
        />
        <MDBCardBody>
          <MDBCardTitle>{this.props.title}</MDBCardTitle>
          <MDBCardText>{this.props.text}</MDBCardText>
          <Link to={this.props.project}>
            <MDBBtn>Go to project</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default MyCard;
