import { FC } from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow, IonicSlides, useIonAlert, useIonLoading } from "@ionic/react";
export interface iProps {}

import secReg from "../../assets/images/sec-reg.jpg"



export const LicensesAcquired: FC<iProps> = (props): JSX.Element => {


    return (
        <div id="aimalls-app-overview">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol size="12" className="ion-margin-bottom">
                        <div className="header-title ion-text-center">
                            License <span>Acquired</span>
                        </div>
                    </IonCol>
                    <IonCol size="12" sizeSm="12" sizeMd="12" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={secReg} height={300} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
};
export default LicensesAcquired;