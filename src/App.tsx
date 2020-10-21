import React from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import { list, options, trophyOutline } from "ionicons/icons";

import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";
import AllGoals from "./pages/AllGoals";
import Filter from "./pages/Filter";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Course Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/filter" routerDirection="none">
                <IonIcon slot="start" icon={options} />
                <IonLabel>Filter</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/all-goals" routerDirection="none">
                <IonIcon slot="start" icon={list} />
                <IonLabel>All Goals</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/courses/:courseId">
            <CourseGoals />
          </Route>
          <Route exact path="/all-goals">
            <AllGoals />
          </Route>
          <Route exact path="/filter">
            <Filter />
          </Route>
          <Redirect to="/courses" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="all-goals" href="/all-goals">
            <IonIcon icon={list} />
            <IonLabel>All Goals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="courses" href="/courses">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
