import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedCourseRoute = () => {
  const  courseId = useParams();
  
  // Use RootState to type the Redux state
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const isEnrolled = enrollments.some(
    (e:any) => e.user === currentUser._id && e.course === courseId.cid
  );

  console.log(courseId);
  console.log(isEnrolled)
  return isEnrolled ? <Outlet /> : <Navigate to="/Kambaz/Dashboard" />;
};

export default ProtectedCourseRoute;
