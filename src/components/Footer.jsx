import {
  Container,
  Row,
  Col,
  Button,
  Form
} from "react-bootstrap";
function Footer() {
  return (
    <footer className="text-center text-white bg-dark">
      <Container className="p-4">

        <section className="mb-4">
          <Button variant="outline-light" className="m-1">
            Facebook
          </Button>

          <Button variant="outline-light" className="m-1">
            Twitter
          </Button>

          <Button variant="outline-light" className="m-1">
            Instagram
          </Button>

          <Button variant="outline-light" className="m-1">
            GitHub
          </Button>
        </section>

        <section className="mb-4">
          <Form>
            <Row className="justify-content-center">
              <Col xs="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Col>

              <Col md={5}>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  className="mb-4"
                />
              </Col>

              <Col xs="auto">
                <Button variant="outline-light" type="submit">
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Form>
        </section>

      </Container>

      <div className="text-center p-3">
        © 2026 Copyright
      </div>
    </footer>
  );
}

export default Footer;