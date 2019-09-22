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

import FirstIteration from "../images/myopgg.png";
import SecondIteration from "../images/myopgg-history.png";

class MyOPggPage extends Component {
    state = {};
    render() {
        return (
            <Layout>
                <SEO title="MarioClone" />
                <MDBContainer>
                    <MDBRow around style={{ marginBottom: "2rem" }}>
                        <MDBCol md="7">
                            <MDBCarousel
                                activeItem={1}
                                length={2}
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
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </MDBCol>
                        <MDBCol md="3" className="align-self-center">
                            <p>
                                <strong>See it: </strong>
                                <a href={"http://deangg.com"} target="_blank">Here</a>
                            </p>
                            <p>
                                <strong>Language(s):</strong> C#, HTML
              </p>
                            <p>
                                <strong>Tools:</strong> ASP.NET, Bootstrap
              </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <strong>Project Description</strong>
                            <p>
                                <a href="https://na.op.gg" target="_blank">op.gg</a> is a site that provides, among other things, tons of useful stats for League of Legends players. The Riot API is what makes getting this information possible. This is a very small subset of op.gg that will tell users some information about their most played champions, as well as some brief match history information.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </Layout>
        );
    }
}

export default MyOPggPage;
