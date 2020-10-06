import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileImage from "./components/ProfileImage";
import Writings from "./components/Writings";

const Banner = () => {
  return (
    <div
      style={{
        padding: "50px 0 50px 0",
      }}
    >
      <Container>
        <Row>
          <Col md={8}>
            <Writings />
          </Col>
          <Col md={4}>
            <ProfileImage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
