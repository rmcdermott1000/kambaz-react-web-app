import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {

    const [module, setModule] = useState({
        id: "mod-101",
        name: "Web Development",
        description: "Learn how to build web applications",
        course: "Full Stack Development",
      });

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Module Management</h4>
      <a id="wd-get-module" className="btn btn-primary"
         href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <a id="wd-get-module-name" className="btn btn-primary mx-2"
         href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>

      <h4>Editing Module</h4>
      <FormControl className="w-75 mb-2" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <a id="wd-update-module-name" className="btn btn-primary"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>

      <FormControl className="w-75 mb-2 mt-2" id="wd-module-description"
        defaultValue={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      <a id="wd-update-module-description" className="btn btn-primary"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>

      <hr />
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
    </div>
);}
