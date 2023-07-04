import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonToolbar } from "@ionic/react";
import { FC } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import UserContextProvider from "../../contexts/userContext";

export interface iProps {

}
export const DashboardLayout: FC<iProps> = (props): JSX.Element => {
    return (
        <UserContextProvider>
            <IonPage id="dashboard">
                <IonHeader>
                    <IonToolbar>asdsad</IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRouterOutlet>
                        <DashboardRoutes />
                    </IonRouterOutlet>
                </IonContent>
            </IonPage>
        </UserContextProvider>
    )
};
export default DashboardLayout;