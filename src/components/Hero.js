import React from "react";
// import my from "../assets/my.png";
import { TopNav } from "./TopNav";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero">
      <TopNav />

      <Container>
        <Row className="mt-5 py-3">
          <Col md="6" className="text-center order-md-2">
            {/* <img src={my} width="80%" alt="" /> */}
          </Col>
          <Col md="6" className="mt-3 pb-3">
            Hi 👋 i'm
            <div classname="fs-1 fw-bolder mb-5"> Manish Karki </div>
            <p>
              i love coding and dealing with code so that i will be able to develop core skill and tackle the difficult website design and formation.
            </p>
            <button variant="danger">download resume</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
