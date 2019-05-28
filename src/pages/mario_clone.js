import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Layout from "../components/layout";
import SEO from "../components/seo";

class MarioClonePage extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <SEO title="MarioClone" />
        <MDBContainer>
          <MDBRow around style={{ marginBottom: "2rem" }}>
            <MDBCol md="5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/VKNOURaNKcs"
                />
              </div>
            </MDBCol>
            <MDBCol md="5" className="align-self-center">
              <p>
                <strong>Source Code: </strong>
                <a
                  href="https://github.com/deanhaleem/mario-clone"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
              <p>
                <strong>Language(s):</strong> C#
              </p>
              <p>
                <strong>Tools:</strong> Visual Studio 2017,{" "}
                <a href="http://www.monogame.net/" target="_blank">
                  MonoGame
                </a>
                , Azure Devops
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Project Description</strong>
              <p>
                This is very straightforward. The goal was the make a clone of
                the first level of the original Super Mario Bros. The class put
                us in teams of four and split the project up into four sprints.
                We used Agile SCRUM methodologies. There was a decent amount of
                independence when it came to the project, but instructors and
                graders provided a lot of feedback on the quality of the code.
                This helped us gear our code more towards building a game engine
                and then using that to make Mario Bros, rather than just making
                the game itself.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Challenges</strong>
              <p>
                Maybe putting the challenge on ourselves, but our team really
                took seriously the goal of making a game engine that is the used
                to play Mario. This created the challenge of making most thing
                in our project reusable for other games. And to be honest, our
                team during that semester weren't exactly successful. If we even
                wanted to do something simple such as swap out the art for Mario
                with Super Mario Bros 3's art, it would've involved a lot of
                work.
              </p>
              <p>
                Now that I grade for the class, I've had the chance to redo the
                project a few times. I've made much more progress on my team's
                original work by going with a data driven approach. MonoGame is
                very code heavy, with a "code first" way of making games. But I
                instead went with a more "give me data and I'll put what you
                want on the screen" approach. The sprites are a good example of
                that. I have just one sprites class that basically takes in info
                from a file and uses that to draw the correct image to the
                screen. The enemies are another decent example. I have just one
                enemy class that takes in things like color and sprite name.
                That helps the correct thing be drawn to the screen, and it also
                still allows for a system where different enemies can interact
                differently with Mario.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <strong>Sprints</strong>
              <p>A quickdown of the sprints:</p>
              <strong>Sprint 1</strong>
              <p>
                Sprint 1 was focused on setting up our game objects and giving
                them states. The main design pattern in use was the State
                Pattern as a result. Our team used states for pretty much
                everything. Players, Enemies, Blocks, Items. It may have been
                overkill, but it definitely drilled into us what the state
                pattern was and how it works.
              </p>
              <strong>Sprint 2</strong>
              <p>
                Sprint 2 was all about collisions. We didn't introduce actual
                physics here, just Pokemon or original Legend of Zelda type
                movement. The big lesson here wasn't necessarily a design
                pattern, but more what it means to go into a task trying to
                envision an overall system. In the first iteration of this, I
                couldn't tell you how we actually set up our collision detection
                and response system. We would detect the collision, and then
                we'd start on this long journey through classes before finally
                landing at the spot where we actually deal with the collision.
                There was no symmetry or system to that chain of classes. Each
                object was different. This alone displayed how important it is
                to write maintainable and reusable code.
              </p>
              <p>
                We never made a second version during class, but I myself have
                done the project a few times on my own now. This is mainly
                because I grade for the class, and so I need to know how to do
                every aspect of the project, and how to do them well. In my
                third iteration, I finally had a setup where I could tell you
                how it actually works for every object. I first loop through the
                game objects and detect collisions using simple AABB (MonoGame
                actually has it built into their Rectangle type). Then I figure
                out the type of the two objects using .NET's type system. Third,
                I pass it off to a class that has a big dictionary. The
                dictionary takes in tuples of types and spits out a command
                (Command Pattern here) object whose Execute is called. Fourth,
                the Execute will call a class that handles collisions for the
                two types of objects colliding. The Execute of the command knows
                exactly which method to call as well.
              </p>
              <p>
                A quick example: Big Mario collides with a moving Koopa Shell. I
                detect the collision, figure out it's Mario and a Koopa, pass in
                Mario's powerup type (Big), the fact it's Mario, the fact it's a
                Koopa, and the Koopa's movement state (moving), and that gives
                me a command. This command's Execute will call a method along
                the lines of HandleNonSmallMarioMovingShellCollision (maybe need
                to work on the length of the name), and that method will handle
                the details for resolving the collision. And this setup is how
                it works for every collision type. It's very easy to read, and
                it's also very easy to expand.
              </p>
              <strong>Sprint 4</strong>
              <p>
                Sprint 4 was all about physics. This taught great lessons in the
                amount of research needed to make a good feeling game. We found
                a lot of resources in terms of Mario physics, and we spent a lot
                of time playing with magic numbers and such until we were happy
                with how it felt. This also demonstrated the importance of
                having a small test area project that you can use without having
                to build the actual project.
              </p>
              <strong>Sprint 5</strong>
              <p>
                The main task was to implement sound, but I always tell students
                this is really the "do everything you haven't done yet" sprint.
                This involves cleaning up things such as magic numbers or string
                literals.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    );
  }
}

export default MarioClonePage;
