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
                                <strong>Source Code: </strong>
                                <a href={"https://github.com/deanhaleem/myopgg"} target="_blank">GitHub</a>
                            </p>
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
                    <MDBRow>
                        <MDBContainer>
                            <strong>The Goal</strong>
                            <p>
                                I really like C#, so I wanted to do something with it that I could show to anyone. A .NET web app seemed 
                                good to me. This also allowed me to involve another passion of mine: games. Specifically League of Legends.
                                Riot Games' API wasn't necessarily difficult to use, but when I stumbled across <a href="https://github.com/BenFradet/RiotSharp" target="_blank">RiotSharp</a>,
                                I thought I'd just use it instead of trying to mimic it.
                            </p>
                            <p>
                                From a backend point of view, there isn't too much to it right now as I can't use a development API key in a public app. Once (if, hopefully, please) Riot Games
                                approves the app and provides a public API key, I can actually use the backend work to provide information for any summoner name entered, 
                                as long as they're on the North American server.
                            </p>
                            <p>
                                From a front end point of view, all the beautiful artwork is provided by Riot from their <a href="https://na.leagueoflegends.com/en/featured/league-displays" target="_blank">League Displays</a> app. The champion headshots are from <a href="https://na.op.gg" target="_blank">op.gg</a>.
                            </p>
                        </MDBContainer>
                    </MDBRow>

                </MDBContainer>
            </Layout>
        );
    }
}

export default MyOPggPage;
