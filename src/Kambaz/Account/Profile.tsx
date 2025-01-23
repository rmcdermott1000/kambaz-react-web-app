import { Link } from "react-router-dom";
import { Form, Container, Row, Col, Card } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4">Profile</h3>

            <Form>
              <Form.Group className="mb-3" controlId="wd-username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="alice"
                  placeholder="Enter your username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  defaultValue="123"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="Alice"
                  placeholder="Enter your first name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="Wonderland"
                  placeholder="Enter your last name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue="2000-01-01"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue="alice@wonderland"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" defaultValue="FACULTY">
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </Form.Control>
              </Form.Group>

              <div className="text-center mt-4">
                <Link
                  to="/Kambaz/Account/Signin"
                  className="btn btn-danger"
                >
                  Sign out
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}