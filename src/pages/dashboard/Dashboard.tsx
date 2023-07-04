import { IonButton, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { FC, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Logout } from "../../requests/auth.request";
import { useHistory } from "react-router";

export interface iProps {}
export const Dashboard: FC<iProps> = (props): JSX.Element => {

    const { user } = useContext(UserContext);

    const navigation = useHistory();

    const processLogout = async () => {
        try {
            const logoutRequest = await Logout()
            localStorage.removeItem("authToken")
            navigation.push("/login")

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <IonContent fullscreen>
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center">
                    <IonCol size="10">
                        <h1>Dashboard</h1>
                        {JSON.stringify(user)}
                    </IonCol>
                </IonRow>
            </IonGrid>
            {/* <IonButton onClick={processLogout}>Logout</IonButton> */}
        </IonContent>
    )
};
export default Dashboard;