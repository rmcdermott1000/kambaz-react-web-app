import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollemntsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {

  app.delete("/api/courses/:courseId/enrollments/:userId", async (req, res) => {
    const { courseId, userId } = req.params;
    const status = await enrollemntsDao.deleteEnrollment(userId, courseId);
    res.send(status);
 });
 

  app.post("/api/courses/:courseId/enrollments/:userId", (req, res) => {
    const { courseId, userId } = req.params;
    const newModule = enrollemntsDao.enrollUserInCourse(userId, courseId);
    res.send(newModule);
  });


  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollemntsDao.findEnrollments();
    res.json(enrollments);
  });


  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    console.log(newAssignment);
    res.send(newAssignment);
  });


  app.get("/api/courses/:courseId/assingments", (req, res) => {
    const { courseId } = req.params;
    const assingments = assignmentsDao.findAssingmentsForCourse(courseId);
    res.json(assingments);
  });

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const status = dao.deleteCourse(courseId);
    res.send(status);
  });
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });

}
