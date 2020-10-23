import React, { useState, useRef } from "react";
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
  IonAlert,
  IonToast,
} from "@ionic/react";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";
import { addOutline, create, trash } from "ionicons/icons";

import EditModal from "../components/EditModal";

const CourseGoals: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<any>();

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  const startDeleteGoalHandler = () => {
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    setToastMessage("Goal deleted!");
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    slidingOptionsRef.current?.closeOpened();
    if (!goal) {
      return;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
  };

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };

  const addGoalHandler = () => {
    setIsEditing(true);
    setSelectedGoal(null);
  };

  return (
    <React.Fragment>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => {
          setToastMessage("");
        }}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you really want to delete this goal?"
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartedDeleting(false);
            },
          },
          {
            text: "Yes",
            handler: deleteGoalHandler,
          },
        ]}
      />
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
                  <IonItemSliding key={goal.id} ref={slidingOptionsRef}>
                    <IonItemOptions side="start">
                      <IonItemOption
                        onClick={startDeleteGoalHandler}
                        color="danger"
                      >
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
                      <IonItemOption
                        onClick={startEditGoalHandler.bind(null, goal.id)}
                      >
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
    </React.Fragment>
  );
};

export default CourseGoals;
