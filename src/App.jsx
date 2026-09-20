import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Navigation from "./components/Navigation";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./components/Footer";
import profileImage from "./assets/profileImage.jpg"
<source />

const firstName = "Manel";

function App() {
  return (
    <>
      <Navigation />
      <Container className="text-center p-3">
        <Row className="g-4 justify-content-center">

          <Col xs={12} sm={6} lg={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Image />
              <Card.Body className="text-center">
                <Name />
                <Price />
                <Description />

                <button className="btn btn-dark rounded-pill px-4">
                  Buy Now
                </button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Image />
              <Card.Body className="text-center">
                <Name />
                <Price />
                <Description />

                <button className="btn btn-dark rounded-pill px-4">
                  Buy Now
                </button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Image />
              <Card.Body className="text-center">
                <Name />
                <Price />
                <Description />

                <button className="btn btn-dark rounded-pill px-4">
                  Buy Now
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">

          <Col xs={12} sm={6} lg={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Image />
              <Card.Body className="text-center">
                <Name />
                <Price />
                <Description />

                <button className="btn btn-dark rounded-pill px-4">
                  Buy Now
                </button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Image />
              <Card.Body className="text-center">
                <Name />
                <Price />
                <Description />

                <button className="btn btn-dark rounded-pill px-4">
                  Buy Now
                </button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Image />
              <Card.Body className="text-center">
                <Name />
                <Price />
                <Description />

                <button className="btn btn-dark rounded-pill px-4">
                  Buy Now
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {firstName && (
      <img
          src={profileImage}
        style={{
          width: "22rem",
          borderRadius: "20px",
          textAlign:"center"
        }}
        alt="Profile"
        className="img-fluid mt-3"
      />
      )}
      <h3 className="mt-3">
      {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
    </h3>
      </Container>
      
    <Footer></Footer>

    </>
  );
}


export default App;