import React, { useState } from "react";
import ModulesControls from "./ModulesControls";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControlButtons from "./ModulesControlsButton";
import { useParams } from "react-router";
import * as db from "../../Database";
import { v4 as uuidv4 } from "uuid";

import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />
      <br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module:any) => (
          <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {/* Show input field if editing, otherwise show the name */}
              {module.editing ? (
                <input
                  type="text"
                  className="form-control d-inline-block"
                  defaultValue={module.name}
                  onBlur={(e) => dispatch(updateModule({...module._id, name: e.target.value}))}  // Update on blur
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                />
              ) : (
                module.name
              )}

              {/* Module control buttons */}
              <ModulesControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => {
                  dispatch(deleteModule(moduleId));
                }}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: { _id: React.Key | null | undefined; name: string }) => (
                  <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}