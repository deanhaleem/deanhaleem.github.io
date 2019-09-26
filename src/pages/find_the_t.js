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

import FirstIteration from "../images/findthet.png";
import SecondIteration from "../images/findthet-play.png";

class FindTheTPage extends Component {
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
                                <strong>Source Code: </strong>                              
                                <a href={"https://github.com/deanhaleem/find-the-t"} target="_blank">GitHub</a>
                            </p>
                            <p>
                                <strong>Play it: </strong>
                                <a href={"http://deangg.com/FindTheT"} target="_blank">Here</a>

                            </p>
                            <p>
                                <strong>Language(s):</strong> C#
              </p>
                            <p>
                                <strong>Tools:</strong> Unity
              </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <strong>Project Description</strong>
                            <p>
                                A very simple game in which the player must find the correct T amongst a bunch of fakes.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <strong>The Goal</strong>
                            <p>
                                I had a lot of projects that were half finished, and I also had projects that were never really meant
                                to be finished games, but just exist to teach me a certain thing. I wanted to make something that I could
                                fully deploy somewhere, and a simply mobile game seemed like the best place to go.
                            </p>
                            <p>
                                I used to play this game called Don't Step the White Tile. I always thought it was cool how the game had
                                no audio or cool visuals or anything. It was just the player tapping black tiles, trying not to tap the 
                                white ones. I made this game simple, going for that same style.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </Layout>
        );
    }
}

export default FindTheTPage;
