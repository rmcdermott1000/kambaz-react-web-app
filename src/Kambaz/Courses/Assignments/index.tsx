import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
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

        <ListGroup.Item className="wd-lesson p-3 d-flex justify-content-between align-items-start">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none">
              Assignment 1 - ENV + HTML
            </a>
            <div className="text-muted small mt-1">
              Multiple Modules | <b>Not Available until</b> May 6 at 12:00 AM
              <br />
              <b>Due:</b> May 13 at 11:59 PM | 100 pts
            </div>
          </div>
          <AssignmentControlButtons />
        </ListGroup.Item>

        <ListGroup.Item className="wd-lesson p-3 d-flex justify-content-between align-items-start">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            <a href="#/Kambaz/Courses/1234/Assignments/124" className="text-decoration-none">
              Assignment 2 - CSS + BOOTSTRAP
            </a>
            <div className="text-muted small mt-1">
              Multiple Modules | <b>Not Available until</b> May 13 at 12:00 AM
              <br />
              <b>Due:</b> May 20 at 11:59 PM | 100 pts
            </div>
          </div>
          <AssignmentControlButtons />
        </ListGroup.Item>

        <ListGroup.Item className="wd-lesson p-3 d-flex justify-content-between align-items-start">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            <a href="#/Kambaz/Courses/1234/Assignments/125" className="text-decoration-none">
              Assignment 3 - JAVASCRIPT + REACT
            </a>
            <div className="text-muted small mt-1">
              Multiple Modules | <b>Not Available until</b> May 20 at 12:00 AM
              <br />
              <b>Due:</b> May 27 at 11:59 PM | 100 pts
            </div>
          </div>
          <AssignmentControlButtons />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}