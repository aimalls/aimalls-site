import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonToolbar } from "@ionic/react";
import { FC, useContext } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import UserContextProvider, { UserContext } from "../../contexts/userContext";

export interface iProps {

}
export const DashboardLayout: FC<iProps> = (props): JSX.Element => {

    const { user } = useContext(UserContext)

    return (
            
            <IonPage id="dashboard">
                {!!user?.email == false ? (
                    <IonContent>Unauthenticated!, Login first!</IonContent>
                ): (
                    <>
                        <IonHeader>
                            <IonToolbar></IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonRouterOutlet>
                                <DashboardRoutes />
                            </IonRouterOutlet>
                        </IonContent>
                    </>
                )}
                
            </IonPage>
    )
};
export default DashboardLayout;