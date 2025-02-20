import React from "react";
import { FaEdit } from "react-icons/fa";

interface AssignmentControlButtonsProps {
  assignmentId: string;
  deleteAssignment: (id: string) => void;
  editAssignment: (id: string) => void;
}

const AssignmentControlButtons: React.FC<AssignmentControlButtonsProps> = ({ 
  assignmentId, 
  editAssignment 
}) => {
  return (
    <div className="d-flex">
      <button
        className="btn btn-outline-secondary btn-sm me-2"
        onClick={() => editAssignment(assignmentId)}
      >
        <FaEdit />
      </button>
    </div>
  );
};

export default AssignmentControlButtons;