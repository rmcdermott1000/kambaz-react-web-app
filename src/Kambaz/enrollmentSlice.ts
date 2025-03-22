import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// interface Enrollment {
//   _id: string;
//   user: string;
//   course: string;
// }

interface EnrollmentState {
  enrollments: any[];
}

const initialState:EnrollmentState = {
  enrollments: []
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },

    enrollInCourse: (state, { payload }) => {
        const existingEnrollment = state.enrollments.find(
          (e:any) => e.user === payload.userId && e.course === payload.courseId
        );
  
        if (!existingEnrollment) {
          state.enrollments.push({
            _id: uuidv4(),
            user: payload.userId,
            course: payload.courseId,
          });
        }
      },
    unenrollFromCourse: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (e:any) => e.user !== payload.userId || e.course !== payload.courseId
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;