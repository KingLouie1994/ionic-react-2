import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
} from "@ionic/react";

import CourseContext from "../data/course-context";

const Filter: React.FC = () => {
  const courseFilterChangeHandler = (event: CustomEvent) => {
    courseCtx.changeFilter(event.detail.value, event.detail.checked);
  };

  const courseCtx = useContext(CourseContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {courseCtx.courses.map((course) => {
            return (
              <IonItem key={course.id}>
                <IonLabel>{course.title}</IonLabel>
                <IonToggle
                  checked={course.included}
                  value={course.id}
                  onIonChange={courseFilterChangeHandler}
                />
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
