import React, { useState } from "react";

import CourseContext, { Course } from "./course-context";

const CourseContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = () => {};

  const addGoal = () => {};

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
