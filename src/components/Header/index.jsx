import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import { primaryColor } from "../../constants";
import Menu from "./components/menu";

const Header = () => {
  return (
    <div style={styles.gradient}>
      {!isMobile ? (
        <Container>
          <Row>
            <Col md="6" style={{padding:20}}>
              <span
                style={{
                  color: primaryColor,
                  fontSize: 25,
                }}
              >
                Portfolio
              </span>
            </Col>
            <Col md="6" style={{ padding: isMobile ? "15px 0" : 20 }}>
              <Menu />
            </Col>
          </Row>
        </Container>
      ) : (
        <Menu />
      )}
    </div>
  );
};

const styles = {
  gradient: {
    background:
      "linear-gradient(90deg, rgba(13,13,14,1) 0%, rgba(28,29,30,1) 35%, rgba(40,41,42,1) 100%)",
  },
};
export default Header;
