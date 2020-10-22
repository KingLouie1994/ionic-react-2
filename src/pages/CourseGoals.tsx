import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  isPlatform,
} from "@ionic/react";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";
import { addOutline, create, trash } from "ionicons/icons";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  const startDeleteGoalHandler = () => {
    console.log("Deleted...");
  };

  const editGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Edit...");
  };

  const addGoalHandler = () => {
    console.log("Adding...");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses/list" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "No course found!"}
          </IonTitle>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton onClick={addGoalHandler}>
                <IonIcon slot="icon-only" icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && (
          <IonList>
            {selectedCourse.goals.map((goal) => {
              return (
                <IonItemSliding key={goal.id}>
                  <IonItemOptions side="start">
                    <IonItemOption onClick={startDeleteGoalHandler} color="danger">
                      <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem
                    lines="full"
                    // button
                    // onClick={deleteItemHandler}
                  >
                    <IonLabel> {goal.text}</IonLabel>
                    {/* <IonButton
                      slot="end"
                      fill="clear"
                      color="dark"
                      onClick={editGoalHandler}
                    >
                      <IonIcon slot="icon-only" icon={create}></IonIcon>
                    </IonButton> */}
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={editGoalHandler}>
                      <IonIcon slot="icon-only" icon={create} />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              );
            })}
          </IonList>
        )}
        {isPlatform("android") && (
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="secondary" onClick={addGoalHandler}>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
