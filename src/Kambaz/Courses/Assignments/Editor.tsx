import { useParams, Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import * as db from "../../Database"; // Import your database (assignments.json)

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from the URL

  // Find the assignment by ID
  const assignment = db.assignments.find((a) => a._id === aid);

  // If the assignment is not found, return a message (can also show a 404 page)
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="wd-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control
              type="text"
              value={assignment.title}
              placeholder="Enter assignment name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={assignment.description}
              placeholder="Enter description"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" value={assignment.points} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-group">
              <Form.Label>Assignment Groups</Form.Label>
              <Form.Control as="select" value="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-display-grade-as">
              <Form.Label>Display Grade As</Form.Label>
              <Form.Control as="select" value="percentage">
                <option value="percentage">Percentage</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-submission-type">
              <Form.Label>Submission Type</Form.Label>
              <Form.Control as="select" value="online">
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
              <Form.Control type="date" value={assignment.dueDate} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="date" value={assignment.availableDate} />
            </Form.Group>
            <Form.Group as={Col} md={4} controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" value={assignment.untilDate} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
                Cancel
              </Link>
              <Button variant="primary">Save</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}