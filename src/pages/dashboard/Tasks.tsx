import { IonContent } from "@ionic/react";
import { FC } from "react";

export interface iProps {}
export const Tasks: FC<iProps> = (props): JSX.Element => {
    return (
        <IonContent fullscreen>
            {"Tasks"}
        </IonContent>
    )
};
export default Tasks;