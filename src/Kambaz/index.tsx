import KambazNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import { useEffect, useState } from "react";
import Session from "../Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedCourseRoute from "./Courses/ProtectedCourseRoute";
import { useSelector } from "react-redux";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
 
 const fetchCourses = async () => {
   try {
     const allCourses = await courseClient.fetchAllCourses();
     await userClient.findCoursesForUser(
       currentUser._id
     );
     const courses = allCourses;
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };

 const updateEnrollment = async (courseId: string, enrolled: boolean) => {
  console.log(enrolled)
   if (enrolled) {
     await userClient.enrollIntoCourse(currentUser._id, courseId);
   } else {
     await userClient.unenrollFromCourse(currentUser._id, courseId);
   }
   fetchCourses();
 };

  
  useEffect(() => {
    
      fetchCourses();
        
 
  }, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    // const newCourse = await userClient.createCourse(course);
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
 
  const updateCourse =  async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Session>

    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={<ProtectedRoute>
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              enrolling={enrolling} setEnrolling={setEnrolling}  updateEnrollment={updateEnrollment}/></ProtectedRoute>
          } />
          
          <Route path="Courses/:cid/*" element={<ProtectedRoute><ProtectedCourseRoute/><Courses courses={courses} /></ProtectedRoute>} />
        </Routes>
      </div>
    </div></Session>);}








  