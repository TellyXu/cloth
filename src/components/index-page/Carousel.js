import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

// Core Components
const items = [
  {
    src: require("assets/img/example/example1.png"),
    altText: "Slide 1",
    caption: "",
    key: "key-1",
  },
  {
    src: require("assets/img/example/example2.png"),
    altText: "Slide 2",
    caption: "",
    key: "key-2",
  },
  {
    src: require("assets/img/example/example3.png"),
    altText: "Slide 3",
    caption: "",
    key: "key-3",
  },
];

function CarouselSection() {
  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/1.svg") + ")",
        }}
      >
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded overflow-hidden transform-perspective-left">
                <UncontrolledCarousel items={items} />
              </div>
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="font-weight-light">Example</h1>
              <p className="lead mt-4">
                Aicloth comes with advanced prebuilt model to
                help you get started faster. You can change the parameter and images
                and you're good to go.
              </p>
              <Button
                className="btn-white mt-4"
                color="default"
                href="https://www.google.com/"
              >
                See all examples
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
