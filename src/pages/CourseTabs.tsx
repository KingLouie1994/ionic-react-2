import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import { Route, Redirect, Switch } from "react-router-dom";

import Courses from "./Courses";
import CourseGoals from "./CourseGoals";
import AllGoals from "./AllGoals";

import { list, trophyOutline } from "ionicons/icons";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/courses" to="/courses/all-goals" />
        <Switch>
          <Route exact path="/courses/list">
            <Courses />
          </Route>
          <Route exact path="/courses/all-goals">
            <AllGoals />
          </Route>
          <Route path="/courses/:courseId">
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="/courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
