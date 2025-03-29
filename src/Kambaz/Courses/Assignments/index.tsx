import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editAssignment, updateAssignment, deleteAssignment, setAssignments } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";  // Import client functions

// Define Assignment Type
interface Assignment {
  _id: string;
  title: string;
  course: string;
  availableDate: string;
  untilDate: string
  dueDate: string;
  points: number;
  description: string;
  editing?: boolean;
}

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // Ensure cid is a string
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<Assignment | null>(null);
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();


  const handleDelete = (assignment: Assignment) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (assignmentToDelete) {
      await assignmentsClient.deleteAssignment(assignmentToDelete._id);
      dispatch(deleteAssignment(assignmentToDelete._id));
    }
    setShowDeleteDialog(false);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);



  return (
    <div className="wd-assignments p-4">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="New Assignment Title"
          value={assignmentTitle}
          onChange={(e) => setAssignmentTitle(e.target.value)}
          className="form-control me-2"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            // Navigate to the AssignmentEditor screen to add a new assignment
            navigate(`/kambaz/courses/${cid}/assignments/Editor`);
          }}
        >
          Add Assignment
        </button>
      </div>

      {/* Assignments List */}
      <ListGroup className="rounded-0" id="wd-assignments-list">
        {assignments
          .map((assignment: Assignment) => (
            <ListGroup.Item
              key={assignment._id}
              className="wd-assignment p-3 d-flex justify-content-between align-items-start"
            >
              <div>
                <BsGripVertical className="me-2 fs-3" />
                {assignment.editing ? (
                  <input
                    type="text"
                    className="form-control d-inline-block"
                    defaultValue={assignment.title}
                    onBlur={(e) => {
                      dispatch(updateAssignment({ ...assignment, title: e.target.value, editing: false }));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateAssignment({ ...assignment, title: e.currentTarget.value, editing: false }));
                      }
                    }}
                  />
                ) : (
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-decoration-none"
                  >
                    {assignment.title}
                  </a>
                )}
                <div className="text-muted small mt-1">
                  <b>Due:</b> {new Date(assignment.dueDate).toLocaleString()} | {assignment.points} pts
                </div>
              </div>

              {/* Assignment Control Buttons */}
              <div className="d-flex align-items-center">
                <AssignmentControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={() => handleDelete(assignment)}
                  editAssignment={(id) => dispatch(editAssignment(id))}
                />
                {/* Trash Icon Button */}
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDelete(assignment)}
                >
                  <BsTrash />
                </button>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cancelDelete}
                />
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cancelDelete}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}