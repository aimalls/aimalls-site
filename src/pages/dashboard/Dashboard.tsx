import { IonContent } from "@ionic/react";
import { FC, useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export interface iProps {}
export const Dashboard: FC<iProps> = (props): JSX.Element => {

    const { user } = useContext(UserContext);

    return (
        <IonContent fullscreen>
            {JSON.stringify(user)}
        </IonContent>
    )
};
export default Dashboard;