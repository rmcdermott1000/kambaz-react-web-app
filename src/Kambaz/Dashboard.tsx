import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img variant="top" src="/images/reactjs.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    {course.name}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                    {course.description}
                  </Card.Text>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}