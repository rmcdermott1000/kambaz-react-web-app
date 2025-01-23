import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Signin() {
  return (
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4">Sign in</h3>

            <Form>
              <Form.Group className="mb-3" controlId="wd-username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Link
                  id="wd-signin-btn"
                  to="/Kambaz/Dashboard"
                  className="btn btn-primary"
                >
                  Sign in
                </Link>
              </div>

              <div className="text-center mt-3">
                <Link
                  id="wd-signup-link"
                  to="/Kambaz/Account/Signup"
                  className="text-secondary"
                >
                  Don't have an account? Sign up
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
  );
}