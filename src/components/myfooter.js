import React, { Component } from "react";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class MyFooter extends Component {
  state = {};
  render() {
    return (
      <MDBFooter color="unique-color-dark">
        <MDBContainer fluid>
          <MDBRow style={{ paddingTop: "1rem" }} center className="text-center">
            <p>
              Thank you for taking the time to visit my website. Please, take a
              look around, and always feel free to contact me.
            </p>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <MDBRow className="text-center">
              <MDBCol md="2">
                <a
                  href="https://www.linkedin.com/in/deanhaleem"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </MDBCol>
              <MDBCol md="2">
                <a href="https://instagram.com/deanhaleem" target="_blank">
                  INSTAGRAM
                </a>
              </MDBCol>
              <MDBCol md="4" style={{ color: "white" }}>
                deanhaleem.10@gmail.com
              </MDBCol>
              <MDBCol md="2">
                <a href="https://github.com/deanhaleem" target="_blank">
                  GITHUB
                </a>
              </MDBCol>
              <MDBCol md="2">
                <a href="https://twitter.com/deanhaleem" target="_blank">
                  TWITTER
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default MyFooter;
