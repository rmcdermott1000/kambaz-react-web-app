import { ListGroup } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import * as db from "../../Database"; // Import the database to access assignments

export default function Assignments() {
  const { cid } = useParams(); // Retrieve the course ID from the URL

  // Filter assignments based on the selected course ID
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex align-items-center">
          <FaSearch className="me-2 text-secondary fs-5" />
          <input
            type="text"
            placeholder="Search for Assignments"
            className="form-control"
            id="wd-search-assignment"
            style={{ width: "300px" }}
          />
        </div>
        <div className="d-flex">
          <button
            id="wd-add-assignment-group"
            className="btn btn-primary btn-sm me-2"
          >
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-success btn-sm">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroup.Item className="p-3 bg-light d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <AiOutlineArrowDown className="me-2 fs-4 text-secondary" />
            <h5 className="mb-0 me-3">Assignments</h5>
          </div>
          <div className="d-flex align-items-center">
            <span
              className="text-muted fs-6 border border-secondary p-2 rounded"
              style={{
                marginRight: "1rem",
                borderColor: "#ccc",
                borderWidth: "1px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              40% of Total
            </span>
            <button className="btn btn-success btn-sm me-3">
              <FaPlus className="me-1" /> Add
            </button>
            <IoEllipsisVertical className="fs-4" />
          </div>
        </ListGroup.Item>

        {assignments.map((assignment) => (
          <ListGroup.Item
            key={assignment._id}
            className="wd-lesson p-3 d-flex justify-content-between align-items-start"
          >
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <a
                href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                className="text-decoration-none"
              >
                {assignment.title}
              </a>
              <div className="text-muted small mt-1">
              Multiple Modules | <b>Not Available until</b> {new Date(assignment.availableDate).toLocaleString()}
              <br />
              <b>Due:</b> {new Date(assignment.dueDate).toLocaleString()} | {assignment.points} pts
            </div>
            </div>
            <AssignmentControlButtons />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}