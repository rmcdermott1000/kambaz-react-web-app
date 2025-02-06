import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams(); 
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => {
        // Convert link to match path format
        const formattedLink = link;
        const isActive = pathname.includes(`/kambaz/courses/${cid}/${formattedLink}`);

        return (
          <Link
            key={index}
            to={`/kambaz/courses/${cid}/${formattedLink}`}
            id={`wd-course-${formattedLink}-link`}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}