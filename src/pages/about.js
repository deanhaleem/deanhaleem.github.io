import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProfileImage from "../images/dean.png";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <MDBContainer>
        <MDBRow>
          <img
            src={ProfileImage}
            className="rounded-circle mx-auto d-block"
            style={{ width: "300px", height: "300px", marginBottom: "2rem" }}
          />
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <p>
              Hi! My name's Dean Haleem, and I'm a third year Computer Science
              and Engineering student at The Ohio State University. I started
              coding my senior year of high school. Since then, I've developed a
              good understanding of the basics of programming and have used that
              to further my knowledge of the discipline. I am most comfortable
              using C# or Java, but am no stranger to C/C++. What made me want
              to become a software engineer was the possibilities one can do
              with the skills involved. Out of these, game development has stood
              out as the most interesting to me, especially being a gamer my
              entire life.
            </p>
            <p>
              I've always had an interest in making games, and when I realized I
              wanted to be a programmer, game development was always in the back
              of my mind. I do love programming in general, but when it comes to
              games, I always find myself wanting to do more. Wanting to take
              the project to the next level. And I'm sure this stems from
              knowing what it's like to be the player. Currently, I am learning
              the fundamentals of game development through Unity and MonoGame. I
              hope to expand on my skill and tool sets soon, hopefully adding
              C++ and Unreal Engine to them.
            </p>
            <p>
              Outside of software development, I enjoy sports and eSports,
              mostly soccer and League of Legends respectively. I played soccer
              growing up and also participate in the intramural soccer league at
              OSU. And of course I love playing video games, recently being
              FIFA, League of Legends, and Super Mario Odyssey.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default AboutPage;
