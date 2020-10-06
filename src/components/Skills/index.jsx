import React from "react";
import { Container } from "react-bootstrap";
import {
  bgColorDark,
  textColorPrimary,
  textColorSecondary,
} from "../../constants";
import Hyphen from "../Hyphen";
import SkillList from "./components/skillList";

const technologies = [
  {
    path: "js",
    name: "JavaScript",
  },
  {
    path: "reactjs",
    name: "React.js",
  },
  {
    path: "redux",
    name: "Redux",
  },
  {
    path: "nodejs",
    name: "Node.js",
  },
  {
    path: "graphql",
    name: "GraphQL",
  },
  {
    path: "reactNative",
    name: "ReactNative",
  },
  {
    path: "nextjs",
    name: "Next.js",
  },
  {
    path: "angular",
    name: "Angular",
  },
  {
    path: "vue",
    name: "Vue.js",
  },
  {
    path: "ts",
    name: "TypeScript",
  },
  {
    path: "webgl",
    name: "WebGL",
  },
  {
    path: "threejs",
    name: "Three.js",
  },
  {
    path: "socketio",
    name: "Socket.io",
  },
  {
    path: "html",
    name: "HTML5",
  },
  {
    path: "css",
    name: "CSS3",
  },
  {
    path: "bootstrap",
    name: "Bootstrap",
  },
  {
    path: "antd",
    name: "Ant Design",
  },
  {
    path: "jquery",
    name: "jQuery",
  },
  {
    path: "mongo",
    name: "Mongo DB",
  },
  {
    path: "python",
    name: "Python",
  },
  {
    path: "c++",
    name: "C++",
  },
];

const miscellaneous = [
  {
    path: "git",
    name: "Git",
  },
  {
    path: "vscode",
    name: "VS Code",
  },
  {
    path: "webpack",
    name: "Webpack",
  },
  {
    path: "docker",
    name: "Docker",
  },
  {
    path: "tensorflow",
    name: "Tensorflow",
  },
  {
    path: "opencv",
    name: "Open CV",
  },
  {
    path: "blender",
    name: "Blender",
  },
  {
    path: "ps",
    name: "Photoshop",
  },
  {
    path: "raspberryPi",
    name: "Raspberry Pi",
  },
  {
    path: "arduino",
    name: "Arduino",
  },
];

const Skills = () => {
  return (
    <div
      style={{
        color: textColorSecondary,
        padding: "50px 0 50px 0",
        backgroundColor: bgColorDark,
      }}
    >
      <Container>
        <div style={{ fontSize: 15, color: textColorPrimary }}>
          <Hyphen /> MY SKILLS
        </div>
        <div
          style={{ fontSize: 35, marginBottom: 25, color: textColorPrimary }}
        >
          Technologies
        </div>
        <SkillList items={technologies} />
        <div
          style={{ fontSize: 35, marginBottom: 25, color: textColorPrimary }}
        >
          Miscellaneous
        </div>
        <SkillList items={miscellaneous} />
      </Container>
    </div>
  );
};

export default Skills;
