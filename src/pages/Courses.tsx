import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import { useHistory } from "react-router-dom";

export const COURSE_DATA = [
  { id: "c1", title: "Ionic + React" },
  { id: "c2", title: "CSS" },
  { id: "c3", title: "HTML" },
];

const Courses: React.FC = () => {
  //   const history = useHistory();
  //   const changePageHandler = () => {
  //     history.push("/course-goals");
  //   };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => {
            return (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <IonCard>
                    <IonCardContent className="ion-text-center">
                      <h2>{course.title}</h2>
                      <IonButton routerLink={`/courses/${course.id}`}>
                        View Course Goals
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
