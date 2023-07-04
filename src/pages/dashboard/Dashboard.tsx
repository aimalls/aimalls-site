import { IonButton, IonContent } from "@ionic/react";
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
            <IonButton onClick={processLogout}>Logout</IonButton>
            {JSON.stringify(user)}
        </IonContent>
    )
};
export default Dashboard;