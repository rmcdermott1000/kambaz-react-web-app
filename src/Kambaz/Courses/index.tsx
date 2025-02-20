import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table.tsx";

import { FaAlignJustify } from "react-icons/fa6";
import { Route, Routes, useLocation, useParams } from "react-router";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams(); 
  const course = courses.find((course) => course._id === cid); // Find course
  const { pathname } = useLocation(); // Get current route

  // Extract and clean section name from the URL
  let section = pathname.split("/")[4] || "Home";
  if (section.startsWith("Assignments")) section = "Assignments"; // Handles `/Assignments/:aid`

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course"} &gt; {section}
      </h2>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}