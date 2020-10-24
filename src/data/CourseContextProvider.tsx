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
      included: true,
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      enrolled: date,
      goals: [],
      included: true,
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

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCoursesIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updatedCoursesIndex
      ].goals.filter((goal) => goal.id !== goalId);
      const updatedCourse = { ...updatedCourses[updatedCoursesIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCoursesIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCoursesIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updatedCoursesIndex
      ].goals.slice();
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId
      );
      const updatedGoal = {
        ...updatedCourseGoals[updatedCourseGoalIndex],
        text: newText,
      };
      updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
      const updatedCourse = { ...updatedCourses[updatedCoursesIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCoursesIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  const changeFilter = (courseId: string, isIncluded: boolean) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCoursesIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourse = {
        ...updatedCourses[updatedCoursesIndex],
        included: isIncluded,
      };
      updatedCourses[updatedCoursesIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  return (
    <CourseContext.Provider
      value={{
        courses: courses,
        addGoal: addGoal,
        addCourse: addCourse,
        updateGoal: updateGoal,
        deleteGoal: deleteGoal,
        changeFilter: changeFilter,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
