import React, { useEffect, useState } from "react";
import ModulesControls from "./ModulesControls";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControlButtons from "./ModulesControlsButton";
import { useParams } from "react-router";

import { setModules,addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
 
  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
 


  
  const addModuleHandler = async () => {
    const newModule = await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };
 
  const fetchModulesForCourse = async () => {
    const modules = await coursesClient.findModulesForCourse(cid!);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);
 

  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName}  addModule={addModuleHandler} />
      <br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module:any) => (
          <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {/* Show input field if editing, otherwise show the name */}
              {!module.editing && module.name}
       {module.editing && (
         <input onChange={(e) =>
                  updateModuleHandler({ ...module, name: e.target.value }) }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateModuleHandler({ ...module, editing: false });
                  }
                }}
                value={module.name}/>
        )}


              {/* Module control buttons */}
              <ModulesControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
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