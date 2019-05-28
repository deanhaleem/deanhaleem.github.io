import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Layout from "../components/layout";
import SEO from "../components/seo";

import CourseImage from "../images/robot-path.png";

class RobotPage extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO title="Robot" />
        <MDBContainer>
          <MDBRow around style={{ marginBottom: "2rem" }}>
            <MDBCol md="5">
              <figure className="figure" className="text-center">
                <img
                  src="https://deanhaleem.com/images/robot.jpg"
                  className="figure-img img-fluid z-depth-1"
                  alt=""
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" className="align-self-center">
              <p>
                <strong>Source Code: </strong>
                <a href="http://u.osu.edu/feh17f7/" target="_blank">
                  Here
                </a>
                (password: master_f7)
              </p>
              <p>
                <strong>Language(s):</strong>
                <a
                  href="https://en.wikipedia.org/wiki/Interactive_C"
                  target="_blank"
                >
                  Interactive C
                </a>
              </p>
              <p>
                <strong>Tools:</strong>{" "}
                <a
                  href="https://www.qt.io/qt-features-libraries-apis-tools-and-ide/#ide"
                  target="_blank"
                >
                  QT Creator
                </a>
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Project Description</strong>
              <p>
                The annual competition involves building robots to complete a
                course with certain obstacles. The goal is to finish as quickly
                as possible. During my team's year (2017), the obstacles were
                turning a satellite, holding a button down for five seconds,
                flipping a switch, pulling an object out of a wall, and placing
                that object into one of two bins. To decide which bin, the robot
                would detect the color of a light and decide based on that.
              </p>
              <p>
                My team's design involved using Omni Wheels. While this made it
                very simple to navigate and code, it did limit us as there were
                few motors available that could hook up to the wheels. This took
                away from how fast our robot could go, but we still consistently
                finished the course within a minute.
              </p>
              <p>
                More information about the competition can be found{" "}
                <a href="https://eed.osu.edu/robot-competition" target="_blank">
                  here
                </a>
                .
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <figure className="figure" className="text-center">
                <img
                  src={CourseImage}
                  className="figure-img img-fluid z-depth-1"
                  alt=""
                />
                <figcaption className="figure-caption">
                  Top view of the course for my team's semester.
                </figcaption>
              </figure>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Challenges</strong>
              <p>
                The biggest challenge for most teams was pulling the object out
                of the wall. The reason for this was that the task lied in the
                "dead zone". As a result, the robot couldn't use the positioning
                system it used everywhere else. For us especially, this proved a
                challenge due to the omni-wheels coupled with our poor storage
                of the robot.
              </p>
              <p>
                We kept the robot in a cardboard box that one team member would
                just carry to and from his dorm. Looking back, probably not the
                smartest move. This causes us to start every day readjusting the
                wheels so that they would take the robot straight forward. The
                omni-wheels seemed to be causing much more trouble in that
                regard compared to other teams' wheels.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>
                Winning 1st Place in Outstanding Achievment in Innovation
              </strong>
              <p>
                As mentioned earlier, the biggest challenge for most teams was
                pulling the object from the wall. This is where we won this
                award.
              </p>
              <p>
                The object had a magnetic circle in the middle of it, so we
                approached the problem with our goal being to pull it out using
                that. We had a magnet, but we needed something to hold it in and
                attach that to our robot. One of the team members simply took a
                pen cap and put the magnet in that. We attached it to the robot,
                but still had a problem. We needed to be generous when trying to
                get the object, or else we'd miss it. So, we decided to just
                move side to side in front of it so that the magnet had the best
                chance possible of connecting. With the current setup, though,
                if we went too hard to the side, the magnet would break off of
                the object. We needed to come up with a way that would allow us
                to move enough to the side while keeping the magnet connected
                once it was on there.
              </p>
              <p>
                First, we build a field goal shaped mechanism. This would hold
                the pen cap. Between the ends of the two "goal posts", we
                drilled small holes and ran a string through them. We also
                drilled small holes in the pen cap and ran the string through
                that. So now, the pen cap was attached to the string between the
                "goal posts" with the ability to slide back and forth. That was
                the key: the pen cap could slide back and forth. And so once it
                was attached to the object, even if the robot kept moving to the
                side, the pen cap would just keep sliding, not breaking off the
                object. It was a maintainable system as well, as if it turned
                out we needed to move to the side more, we could just make the
                field goals further apart.
              </p>
              <figure className="figure" className="text-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg"
                  className="figure-img img-fluid z-depth-1"
                  alt=""
                  style={{ width: "400px" }}
                />
                <figcaption className="figure-caption">
                  Slightly hard to see, but towards the top right of the robot,
                  the wooden fork with the pen cap is what we came up with.
                </figcaption>
              </figure>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Code</strong>
              <p>
                I haven't mentioned anything from a code point of view, and I've
                saved it here for last for good reason. There really wasn't
                anything to it. With the omni-wheels, we never had to worry
                about anything other than how much power to give certain motors
                and for how long. As a result, most of the code looked like
                this.
              </p>
              <ul className="list-unstyled text-center">
                <li>
                  <code>northeastMotor.power(90);</code>
                </li>
                <li>
                  <code>northwestMotor.power(90);</code>
                </li>
                <li>
                  <code>//go for x amount of seconds</code>
                </li>
                <li>
                  <code>//stop motors. Start other ones.</code>
                </li>
              </ul>
              <p>
                On top of that, we were very new to programming. As a result,
                there simply isn't much to talk about with it.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    );
  }
}

export default RobotPage;
