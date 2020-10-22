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
} from "@ionic/react";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";
import { create, trash } from "ionicons/icons";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  const deleteGoalHandler = () => {
    console.log("Deleted...");
  };

  const editGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Edit...");
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
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && (
          <IonList>
            {selectedCourse.goals.map((goal) => {
              return (
                <IonItemSliding key={goal.id}>
                  <IonItemOptions side="start">
                    <IonItemOption onClick={deleteGoalHandler} color="danger">
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
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
