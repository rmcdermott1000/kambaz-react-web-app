
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa";
import {BiImport} from "react-icons/bi";
import { RiFileCopyLine } from "react-icons/ri";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="d-flex mb-3">
        <Button variant="secondary" size="sm" className="w-50 text-nowrap me-2">
          <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
        </Button>
        <Button variant="success" size="sm" className="w-50 text-nowrap">
          <FaCheckCircle className="me-2 fs-5" /> Publish
        </Button>
      </div>

      <div className="d-flex flex-column">
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content
        </Button>
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <RiFileCopyLine className="me-2 fs-5" /> Import from Commons
        </Button>
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <FaHome className="me-2 fs-5" /> Choose Home Page
        </Button>
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <FaStream className="me-2 fs-5" /> View Course Stream
        </Button>
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <FaBullhorn className="me-2 fs-5" /> New Announcement
        </Button>
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <FaChartBar className="me-2 fs-5" /> New Analytics
        </Button>
        <Button variant="secondary" size="sm" className="w-100 mt-1 text-start">
          <FaBell className="me-2 fs-5" /> View Course Notifications
        </Button>
      </div>
    </div>
  );
}