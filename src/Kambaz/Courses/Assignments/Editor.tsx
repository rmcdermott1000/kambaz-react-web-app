import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { addAssignment, updateAssignment } from "./reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  availableDate: string;
  untilDate: string;
  dueDate: string;
  points: number;
  description: string;
  assignmentGroup: string;
  displayGradeAs: string;
  submissionType: string;
  onlineEntryOptions: {
    textEntry: boolean;
    websiteUrl: boolean;
    mediaRecordings: boolean;
    studentAnnotation: boolean;
    fileUpload: boolean;
  };
}

type OnlineEntryOptions = {
  textEntry: boolean;
  websiteUrl: boolean;
  mediaRecordings: boolean;
  studentAnnotation: boolean;
  fileUpload: boolean;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get assignment from Redux store if it exists
  const existingAssignment = useSelector((state: any) =>
    state.assignmentReducer.assignments.find(
      (assignment: Assignment) => assignment._id === aid
    )
  );

  // State to store form values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [assignmentGroup, setAssignmentGroup] = useState("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] = useState("percentage");
  const [submissionType, setSubmissionType] = useState("online");
  const [onlineEntryOptions, setOnlineEntryOptions] = useState({
    textEntry: false,
    websiteUrl: false,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUpload: false,
  });

  // Populate form when editing an existing assignment
  useEffect(() => {
    if (existingAssignment) {
      setTitle(existingAssignment.title);
      setDescription(existingAssignment.description);
      setPoints(existingAssignment.points);
      setDueDate(existingAssignment.dueDate);
      setAvailableFrom(existingAssignment.availableDate);
      setAvailableUntil(existingAssignment.untilDate);
      setAssignmentGroup(existingAssignment.assignmentGroup);
      setDisplayGradeAs(existingAssignment.displayGradeAs);
      setSubmissionType(existingAssignment.submissionType);
      setOnlineEntryOptions(existingAssignment.onlineEntryOptions);
    }
  }, [existingAssignment]);

  // Handle Save
  const handleSave = () => {
    const newAssignment = {
      _id: aid || uuidv4(), // Use existing ID if editing
      title,
      description,
      points,
      dueDate,
      availableDate: availableFrom,
      untilDate: availableUntil,
      assignmentGroup,
      displayGradeAs,
      submissionType,
      onlineEntryOptions,
      course: cid, // Associate with the course ID
    };

    if (aid) {
      // Update existing assignment
      dispatch(updateAssignment(newAssignment));
    } else {
      // Create new assignment
      dispatch(addAssignment(newAssignment));
    }

    // Navigate back to the assignments screen
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  // Handle Cancel
  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`); // Go back to the assignments screen without saving
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOnlineEntryOptions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  return (
    <div id="wd-assignments-editor">
      <Container>
        <h2>Create/Edit Assignment</h2>
        <Form>
          <Form.Group className="mb-3" controlId="wd-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter assignment name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-group">
              <Form.Label>Assignment Groups</Form.Label>
              <Form.Control
                as="select"
                value={assignmentGroup}
                onChange={(e) => setAssignmentGroup(e.target.value)}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-display-grade-as">
              <Form.Label>Display Grade As</Form.Label>
              <Form.Control
                as="select"
                value={displayGradeAs}
                onChange={(e) => setDisplayGradeAs(e.target.value)}
              >
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-submission-type">
              <Form.Label>Submission Type</Form.Label>
              <Form.Control
                as="select"
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <fieldset className="mb-3">
      <Form.Label>Online Entry Options</Form.Label>
      <Form.Group controlId="wd-online-entry-options">
        {Object.keys(onlineEntryOptions ?? {}).map((option) => (
          <Form.Check
            key={option}
            type="checkbox"
            label={option.replace(/([A-Z])/g, " $1").trim()}
            name={option}
            checked={onlineEntryOptions?.[option as keyof OnlineEntryOptions] ?? false}
            onChange={handleCheckboxChange}
          />
        ))}
      </Form.Group>
    </fieldset>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-assign-to">
              <Form.Label>Assign To</Form.Label>
              <Form.Control type="text" value="Everyone" disabled />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md={4} controlId="wd-due-date">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md={4} controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md={4} controlId="wd-available-until">
              <Form.Label>Available Until</Form.Label>
              <Form.Control
                type="date"
                value={availableUntil}
                onChange={(e) => setAvailableUntil(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleCancel} className="me-2">
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
