import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  bgColorDarker,
  textColorPrimary,
  textColorSecondary,
} from "../constants";
import { isMobile } from "react-device-detect";
import { Col, Row } from "react-bootstrap";
import Button from "../components/Button";

const projects = [
  {
    name: "Rubik's Cube Simulator",
    desc:
      "This is a 3D simulation of NxN rubik's cube. You can scramble the cube and solve like a normal rubik's cube.",
    liveDemo: "https://ebinxavier.github.io/rubiksCube",
    repo: "https://github.com/ebinxavier/rubiksCube",
    category: "Game / Puzzle",
    technologies: ["Vanilla.js", "Three.js"],
    icon: "/images/projectIcons/rubiks.png",
  },
  {
    name: "Chain Reaction Online",
    desc:
      "This is a Multiplayer board game. It support 8 players at a time.You can create rooms and invite your friends. ",
    liveDemo: "http://chain-game.herokuapp.com/",
    repo: "https://github.com/ebinxavier/chainReactionIonic",
    category: "Multiplayer Game",
    technologies: ["React.js", "Three.js", "Ionic"],
    icon: "/images/projectIcons/chainReaction.png",
  },
  {
    name: "Sudoku Solver",
    desc:
      "This is an implementation of Backtracking algorithm to solve Sudoku. It also provide random puzzles to solve.",
    liveDemo: "https://ebinxavier.github.io/sudoku-solver/",
    repo: "https://github.com/ebinxavier/sudoku-solver",
    category: "Game / Puzzle",
    technologies: ["Vanilla.js", "Backtracking", "Dynamic Programming"],
    icon: "/images/projectIcons/sudoku.png",
  },
];

const reDirectTo = (link) => {
  window.open(link);
};

const Projects = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        swipeable
        showThumbs={false}
        infiniteLoop
        autoPlay
        dynamicHeight
        emulateTouch
        swipeScrollTolerance={10}
        style={{ paddingTop: 100 }}
      >
        {projects.map((project) => (
          <div
            style={{
              color: textColorPrimary,
              textAlign: "center",
              padding: isMobile ? "50px 20px" : 10,
              backgroundColor: bgColorDarker,
            }}
          >
            <h1>{project.name}</h1>
            <div>
              <Row>
                <Col md={4}>
                  <img
                    style={{ width: isMobile ? "100%" : "50%", float: "right" }}
                    src={project.icon}
                    alt={project.name}
                  />
                </Col>
                <Col
                  style={{ textAlign: "left", color: textColorSecondary }}
                  md={8}
                >
                  <p>
                    <span style={{ color: textColorPrimary }}>About:</span>{" "}
                    {project.desc}
                  </p>
                  <div style={{ padding: "0 0 15px 0" }}>
                    <span style={{ color: textColorPrimary }}>
                      Technologies:
                    </span>{" "}
                    {project.technologies.map((tech, i) => (
                      <>
                        <span>{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span> | </span>
                        )}
                      </>
                    ))}
                  </div>
                  <div style={{ padding: "0 0 15px 0" }}>
                    <span style={{ color: textColorPrimary }}>Category:</span>{" "}
                    <span>{project.category}</span>
                  </div>
                  <Button onClick={() => reDirectTo(project.liveDemo)}>
                    Demo
                  </Button>{" "}
                  <Button onClick={() => reDirectTo(project.repo)}>
                    Repository
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
