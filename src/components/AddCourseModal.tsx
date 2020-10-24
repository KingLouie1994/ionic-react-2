import React, { useRef, useState } from "react";

import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const [error, setError] = useState("");

  const saveCourseHandler = () => {
    const enteredTitle = titleRef.current!.value;
    const selectedDate = dateRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0 ||
      selectedDate.trim().length === 0
    ) {
      setError("Please enter valid inputs!");
      props.onSave(enteredTitle!.toString(), new Date(selectedDate!));
    }

    setError("");
    props.onSave(enteredTitle!.toString(), new Date(selectedDate!.toString()));
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Course Title</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Enrolment Date:</IonLabel>
                <IonDatetime
                  displayFormat="MM / DD / YYYY"
                  placeholder="01 / 01 / 2020"
                  color="secondary"
                  ref={dateRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow>
              <IonCol>
                <IonText color="danger" className="ion-text-center">
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                color="secondary"
                onClick={saveCourseHandler}
              >
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCourseModal;
