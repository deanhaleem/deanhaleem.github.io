import React, { Component } from "react";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";

import Layout from "../components/layout";
import SEO from "../components/seo";

import FirstIteration from "../images/first_iteration.png";
import SecondIteration from "../images/second_iteration.png";
import ThirdIteration from "../images/third_iteration.png";

class WebsitePage extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO title="Website" />
        <MDBContainer>
          <MDBRow around style={{ marginBottom: "2rem" }}>
            <MDBCol md="7">
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={FirstIteration}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={SecondIteration}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={ThirdIteration}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="3" className="align-self-center">
              <p>
                <strong>Source Code: </strong>
                <a
                  href="https://github.com/deanhaleem/deanhaleem.github.io"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
              <p>
                <strong>Language(s):</strong> HTML, CSS
              </p>
              <p>
                <strong>Tools:</strong> Gatsby, React.js
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Project Description</strong>
              <p>
                This website is mainly just a place for me to store links to my
                projects in one place. Especially being in school, I can't just
                put everything on github and tell people to look there. As I've
                developed it though, it has also become a project itself. I'm
                still very new when it comes to designing and using the newest
                technologies, so I'm always open to feedback. As a result of
                this, the website is pretty much constantly being worked on.
                This is now the fourth iteration.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>What's Changed?</strong>
              <p>
                When I first made the site, it was pretty much just straight
                html. There was some simple css, but it was really only
                Bootstrap's. I eventually added some more of my own styling to
                it, but these first two iterations were really just me getting
                comfortable with html and css.
              </p>
              <p>
                With the third iteration, I tried to go further in incorporating
                more things. I added some simple javascript to have the navbar
                go from transparent to solid. I redesigned the home page to be
                less of a copy of the navbar. And I tried to move away from
                having too many colors, especially on the navbar. I'd say by
                then, it was obvious I understood enough about html and css, but
                still was reinventing the wheel with a lot of things.
              </p>
              <p>
                That last part was important to me. I'd say that's the one part
                about learning to program that isn't always fun: reinventing the
                wheel. And so now, I've built the website using React and
                Gatsby. I've also changed to MDBootstrap, but I from a
                programming point of view, it doesn't seem that much different
                than Twitter Bootstrap. To be honest, I wouldn't at all say I'm
                a React developer or anything. But it's nice to finally move to
                a framework like that so I can focus on the content of the site
                rather than trying to figure out how to make certain components.
              </p>
              <p>
                Overall though, the styling is very basic, and maybe even a
                little bland. I'm still working on becoming more creative when
                it comes to these things.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    );
  }
}

export default WebsitePage;
