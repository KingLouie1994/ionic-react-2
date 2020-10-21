import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const CourseGoals: React.FC = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Course Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - Course goals page</h2>
      </IonContent>
    </React.Fragment>
  );
};

export default CourseGoals;
