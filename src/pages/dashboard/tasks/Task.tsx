import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useParams } from "react-router";
import { getTaskByIdFromAPI } from "../../../requests/task.request";
import { iTask } from "../../../hooks/useTask";
import DynamicFormField from "../../../components/DynamicFormField";

export interface iProps {}
export const Task: FC<iProps> = (props): JSX.Element => {
    const params: { id: string } = useParams();
    

    const taskQuery = useQuery(
        ["task", params.id],
        () => getTaskByIdFromAPI(params.id)
    )

    const task = taskQuery.data as iTask;
    const taskIsLoading = taskQuery.isLoading;
    

    return (
        <IonContent>
            <IonGrid>
                { !taskIsLoading ? (
                <IonRow>
                    <IonCol size="12" className="page-title">
                        { task.taskTitle } Task
                    </IonCol>
                    <IonCol size="12">
                        <div dangerouslySetInnerHTML={{ __html: task.taskDescription }}></div>
                    </IonCol>
                    { task.customFields.map((field, index) => (
                        <IonCol size="12" key={`custom-field-${index}`}>
                            <DynamicFormField field={field} />
                        </IonCol>
                    ))}
                </IonRow>
                ) : null}
            </IonGrid>
        </IonContent>
    )
};
export default Task;