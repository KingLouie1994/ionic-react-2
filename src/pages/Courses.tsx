import React, { useState, useContext } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  isPlatform,
  IonFab,
  IonFabButton,
} from "@ionic/react";

// import { useHistory } from "react-router-dom";

import { addOutline } from "ionicons/icons";

import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";

import CourseContext from "../data/course-context";

const Courses: React.FC = () => {
  //   const history = useHistory();
  //   const changePageHandler = () => {
  //     history.push("/course-goals");
  //   };

  const coursesCtx = useContext(CourseContext);

  const [isAdding, setIsAdding] = useState(false);

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  const addCourseHandler = (title: string, date: Date) => {
    coursesCtx.addCourse(title, date);
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <AddCourseModal
        show={isAdding}
        onCancel={cancelAddCourseHandler}
        onSave={addCourseHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {coursesCtx.courses.map((course) => {
              return (
                <IonRow key={course.id}>
                  <IonCol size-md="4" offset-md="4">
                    <CourseItem
                      title={course.title}
                      enrolementDate={course.enrolled}
                      id={course.id}
                    />
                  </IonCol>
                </IonRow>
              );
            })}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;
