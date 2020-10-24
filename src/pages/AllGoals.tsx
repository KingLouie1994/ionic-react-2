import React, { useContext } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import CourseContext from "../data/course-context";

const AllGoals: React.FC = () => {
  const courseCtx = useContext(CourseContext);

  const goals = courseCtx.courses
    .filter((course) => {
      return course.included;
    })
    .map((course) => {
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };
      });
    })
    .reduce((goalArr, nestedGoals) => {
      let updatedGoalArray = goalArr;
      for (const goal of nestedGoals) {
        updatedGoalArray = updatedGoalArray.concat(goal);
      }
      return updatedGoalArray;
    }, []);

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
        {goals.length <= 0 ? (
          <IonText className="ion-text-center" color="dark">
            <h3>You've got no goals at the moment!</h3>
          </IonText>
        ) : (
          <IonList lines="full">
            {goals.map((goal) => {
              return (
                <IonItem key={goal.id}>
                  <IonLabel>
                    <h2>{goal.text}</h2>
                    <p>{goal.courseTitle}</p>
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
