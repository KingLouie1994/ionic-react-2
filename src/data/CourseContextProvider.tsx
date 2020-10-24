import React, { useState } from "react";

import CourseContext, { Course, Goal } from "./course-context";

const CourseContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "Ionic + React",
      enrolled: new Date("10/02/2020"),
      goals: [
        { id: "c1g1", text: "Finish the course" },
        { id: "c1g2", text: "Learn a lot" },
      ],
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      enrolled: date,
      goals: [],
    };
    setCourses((curCourses) => {
      return curCourses.concat(newCourse);
    });
  };

  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text,
    };
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCoursesIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updatedCoursesIndex
      ].goals.concat(newGoal);
      const updatedCourse = { ...updatedCourses[updatedCoursesIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCoursesIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  const updateGoal = () => {};

  const deleteGoal = () => {};

  return (
    <CourseContext.Provider
      value={{
        courses: courses,
        addGoal: addGoal,
        addCourse: addCourse,
        updateGoal: updateGoal,
        deleteGoal: deleteGoal,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
