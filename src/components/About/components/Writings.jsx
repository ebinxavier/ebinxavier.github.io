/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { textColorPrimary, textColorSecondary } from "../../../constants";
import Hyphen from "../../Hyphen";
import * as Scroll from "react-scroll";
import DownloadCV from "../../DownloadCV";

const Writings = () => {
  return (
    <Scroll.Element name="knowMore" offset={100}>
      <div style={{ color: textColorSecondary }}>
        <div style={{ fontSize: 15, color: textColorPrimary }}>
          <Hyphen /> ABOUT ME
        </div>
        <div
          style={{ fontSize: 35, marginBottom: 25, color: textColorPrimary }}
        >
          Who Am I
        </div>
        <div>
          <p>
            I am a Software Engineer from Kochi, India. I am having{" "}
            {new Date().getFullYear() - 2016}+ years of experience in the
            software industry. I have a bachelor's degree in{" "}
            <b>Computer Science and Engineering</b> from{" "}
            <b>Cochin University of Science and Technologies</b>. My area of
            expertise is web development. I am interested in both frontend and
            backend technologies but most of my experience lies on frontend
            development.
          </p>
          <p>
            I started my career as a programmer analyst (an entry level
            engineer) at <b>Cognizant</b>. From there I got an industrial
            exposure to software development especially to web development. I
            worked there on
            <b> Angular.js, HTML and CSS</b>. Then I got some projects in{" "}
            <b>Node.js</b> and it opened the world of server side programming to
            me. After a couple of years I moved to another company <b>QBurst</b>{" "}
            as an intermediate level frontend engineer. There I worked on{" "}
            <b>Angular 2+ and Material UI</b>, also I got a chance to work with
            Selenium web driver using Node.js to automate some tasks.
            Fortunately I got an opportunity to work with
            <b> React.js</b> which made me fall in love with React. I did a
            bunch of projects on this awesome tech.
          </p>
          <p>
            After a year I got a job offer from <b>Datalkz</b>, a Dubai based
            start-up company. I am currently working here. They hired me not
            only because I am a React developer, but I knew <b>Three.js</b>{" "}
            which is an awesome javascript library to visualize 3D models on the
            web. From Datalkz I learned a lot. This is the first time I am
            working for a start-up. The work culture, attitude to time
            constrained product delivery everything was different for me. I
            learned <b>GraphQL, Next.js, Docker, Redis</b> and much more from
            Datalkz. Still continuing my journey on Datalkz.
          </p>
          <p>
            I am always interested in making things, sometimes it may not be
            software at all. I love music production, making different cuisines,
            making games, I always keep an eye on theoretical physics and
            science, making electronic projects using microcontrollers like
            ESP32, Arduino, Raspberry Pi (which is not a microcontroller by the
            way ) and my life is an experiment <span role="img">🤯</span>.
          </p>
        </div>
        <DownloadCV />
      </div>
    </Scroll.Element>
  );
};

export default Writings;
