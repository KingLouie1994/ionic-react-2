import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
} from "@ionic/react";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "No course found!"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - Course goals page</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
