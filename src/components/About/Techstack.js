import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiBootstrap,
  DiHtml5,
  DiGit,
  DiCss3,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
