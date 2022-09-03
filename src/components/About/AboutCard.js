import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Amirah Hamidi </span>
            from <span className="purple"> Perak, Malaysia.</span>
            <br />I'm a self-taught UI/UX Designer and Frontend Developer.
            <br />
            <br />
            I design delightful, minimal experience your users will love.
            <br />
            I love designing products that makes people's lives easier. 
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great design solves a real problem."{" "}
          </p>
          <footer className="blockquote-footer">Amirah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
