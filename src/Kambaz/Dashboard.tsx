import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {  setEnrollments } from "./enrollmentSlice";
import * as coursesClient from "./Courses/client";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse , enrolling, setEnrolling, updateEnrollment  }
  : {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void })
 {

  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchEnrollments = async () => {
    const modules = await coursesClient.findEnrollments();
    console.log(enrolling);
    setEnrolling(enrolling);
    dispatch(setEnrollments(modules));
  };
  useEffect(() => {
    fetchEnrollments();
  }, []);

  // Toggle function for showing all or enrolled courses
  const toggleCourseView = () => {
    setShowAllCourses((prevState: boolean) => !prevState);
    
  };

  const toggleEnrollments= (courseid:any, bool:boolean) => {
    updateEnrollment(courseid, bool)
    fetchEnrollments();
    fetchEnrollments();
    fetchEnrollments();
    fetchEnrollments();
  }
  const dispatch = useDispatch();

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      
      {currentUser && currentUser.role === "FACULTY" && (
      <>
      <h5>New Course
  
      <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click">
        Update
      </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
          </>
    
      )}
      
      {currentUser && currentUser.role === "STUDENT" && (
        <>
          <button
            className="btn btn-primary float-end"
            id="wd-enrollments-button"
            onClick={toggleCourseView}
          >
            {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </>
      )}


      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        {courses.filter((course) => course !== null).filter((course) =>
          currentUser.role === "STUDENT"
            ? showAllCourses
              ? true
              : enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
            : true
        )

            
            .map((course) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Card.Img variant="top" src="/images/blue.jpg" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </Card.Text>

                    {currentUser.role === "STUDENT" && (
                      <>
                        {enrollments.some(
                          (enrollment:any) =>
                            enrollment.user === currentUser._id && enrollment.course === course._id
                        ) ? (
                          <button
                            className="btn btn-danger"
                            onClick={() => toggleEnrollments(course._id, false) }
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={() => toggleEnrollments(course._id, true)}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}

                    <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go
                    </Link>
                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}