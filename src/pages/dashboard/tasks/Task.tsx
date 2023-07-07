import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useParams } from "react-router";
import { getTaskByIdFromAPI } from "../../../requests/task.request";
import { iTask } from "../../../hooks/useTask";

export interface iProps {}
export const Task: FC<iProps> = (props): JSX.Element => {
    const params: { id: string } = useParams();
    

    const taskQuery = useQuery(
        ["task", params.id],
        () => getTaskByIdFromAPI(params.id)
    )

    const task = taskQuery.data as iTask;

    

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size="12" className="page-title">
                        { task.taskTitle } Task
                    </IonCol>
                    <IonCol size="12">
                        <div dangerouslySetInnerHTML={{ __html: task.taskDescription }}></div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
};
export default Task;