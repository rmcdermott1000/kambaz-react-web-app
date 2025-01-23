import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="wd-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control
              type="text"
              value="A1 - ENV + HTML"
              placeholder="Enter assignment name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value="The assignment is available online. Submit a link to the landing page of"
              placeholder="Enter description"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" value={100} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-group">
              <Form.Label>Assignment Groups</Form.Label>
              <Form.Control as="select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-display-grade-as">
              <Form.Label>Display Grade As</Form.Label>
              <Form.Control as="select">
                <option value="percentage">Percentage</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-submission-type">
              <Form.Label>Submission Type</Form.Label>
              <Form.Control as="select">
                <option value="online">Online</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <fieldset className="mb-3">
            <Form.Label>Online Entry Options</Form.Label>
            <Form.Group controlId="wd-online-entry-options">
              <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
              <Form.Check type="checkbox" label="Website URL" id="wd-website-url" />
              <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
              <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
              <Form.Check type="checkbox" label="File Upload" id="wd-file-upload" />
            </Form.Group>
          </fieldset>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-assign-to">
              <Form.Label>Assign To</Form.Label>
              <Form.Control type="text" value="Everyone" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-due-date">
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" value="2024-05-13" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="date" value="2024-05-13" />
            </Form.Group>
            <Form.Group as={Col} md={4} controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" value="2024-05-20" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2">
                Cancel
              </Button>
              <Button variant="primary">Save</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}