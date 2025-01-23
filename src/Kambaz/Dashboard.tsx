import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1235 AI</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1236 Machine Learning</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1237 PDP</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1238 Advanced AI</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1239 Algorithms</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1240 Web Design</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/blue.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1241 Cloud Computing</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </Row>
</div></div>

);}
