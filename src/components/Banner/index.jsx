import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileImage from "./components/ProfileImage";
import Writings from "./components/Writings";

const Banner = () => {
  return (
    <div
      style={{
        padding: "50px 0 50px 0",
        background:
          "linear-gradient(90deg, rgba(8,9,11,1) 0%, rgba(28,29,32,1) 50%, rgba(53,55,60,1) 100%)",
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <ProfileImage />
          </Col>
          <Col md={6}>
            <Writings />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
