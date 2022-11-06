import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import aa from "../assets/aa.png";

export const Projects = () => {
  return (
    <div id="projects" class="projects py-5">
      <Container>
        <div class="title">
          <span>Projects</span>
        </div>
        <Row class=" mb-5">
          <Col md="6" class=" mb-3">
            {/* <img src={aa} alt="project a" width="100%" /> */}
          </Col>
          <Col md="6">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                <a href="#!" target="_blank">
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="#!" target="_blank">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </Col>
        </Row>
        <Row class=" mb-5">
          <Col md="6" class="mb-3 order-md-2">
            {/* <img src={aa} alt="project a" width="100%" /> */}
          </Col>
          <Col md="6">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                <a href="" target="_blank">
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="" target="_blank">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </Col>
        </Row>
        <Row class="  mb-5">
          <Col md="6" class="  mb-3">
            {/* <img src={aa} alt="project a" width="100%" /> */}
          </Col>
          <Col md="6">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                <a href="##" target="_blank">
                  <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="##" target="_blank">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
