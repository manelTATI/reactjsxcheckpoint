import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Navigation from "./components/Navigation";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgAvatar from './assets/avatar.png'
function App() {
  const firstName = "";
  return (
    <>
      <Navigation />
      <h1 className="text-center py-2">Hello,{firstName ? firstName : "there"}</h1>
      {firstName &&<img src={imgAvatar} style={{ width: "100px" }} className="d-block m-auto" />}
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
      </Container>
   

    </>
  );
}


export default App;