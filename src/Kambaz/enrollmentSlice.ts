import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { enrollments} from "./Database";

const initialState = {
  enrollments: enrollments
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload }) => {
        const existingEnrollment = state.enrollments.find(
          (e) => e.user === payload.userId && e.course === payload.courseId
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
        (e) => e.user !== payload.userId || e.course !== payload.courseId
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;