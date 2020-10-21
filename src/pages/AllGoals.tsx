import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const AllGoals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>AllGoals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - AllGoals Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
