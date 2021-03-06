import React from "react";
import {
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import BasicPage from "../components/BasicPage";

/**
 * sets the `title` and property hasMenu = false so  the menu for the side
 * drawer is NOT displayed.
 *
 * sets the `backAction` property so the back button appears
 *
 * sets the `renderContent` propety to render the contents of the page
 */
const PageOneDetail = () => {
    return (
      <BasicPage
        title="Page One Detail"
        backAction={(e, history) => {}}
        renderContent={history => {
          return (
            <>
              <IonItem lines="none">
                <IonLabel>In Page One Detail</IonLabel>
              </IonItem>
              <IonButton
                expand="full"
                onClick={e => {
                  e.preventDefault();
                  history.push("/page-one");
                }}
              >
                GO BACK
              </IonButton>
            </>
          );
        }}
      />
    );
  };
  

  export default PageOneDetail