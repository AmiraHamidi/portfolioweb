import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 
  SiVisualstudiocode,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiNetlify,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiAdobeillustrator />
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiAdobephotoshop />
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiAdobexd />
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiNetlify />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
