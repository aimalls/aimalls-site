import { IonButton, IonCol, IonContent, IonGrid, IonLoading, IonRow, useIonLoading } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { FC, useCallback, useState } from "react";
import { useParams } from "react-router";
import { getTaskByIdFromAPI } from "../../../requests/task.request";
import { iTask } from "../../../hooks/useTask";
import DynamicFormField from "../../../components/dynamic-form-field/DynamicFormField";
import { saveUserTaskToAPI } from "../../../requests/user-task.request";
import { Toast } from "@capacitor/toast";

export interface iProps {}

export const Task: FC<iProps> = (props): JSX.Element => {
    const params: { id: string } = useParams();
    
    const [present, dismiss] = useIonLoading();

    const taskQuery = useQuery(
        ["task", params.id],
        () => getTaskByIdFromAPI(params.id)
    )

    const task = taskQuery.data as iTask;
    const taskIsLoading = taskQuery.isLoading;
    

    const [formField, setFormField] = useState<object>({})

    const handleTaskFormSubmit = async () => {
        await present()
        try {
            let form = {
                taskId: params.id,
                ...formField
            }
            await saveUserTaskToAPI(form)
            
            await Toast.show({
                text: "Task successfully submited!",
                duration: 'long',
                position: 'top'
            })
        } catch (err: any) {
            await Toast.show({
                text: err.message,
                duration: 'long',
                position: 'top'
            })
        } finally {
            await dismiss()
        }
    }

    const handleFormChange = (formControlName: string, value: any) => {
        setFormField((current: any) => {
            console.log(current)
            current[formControlName] = value
            return current;
        })
    }

    return (
        <IonContent>
            <IonLoading  message="Loading..." duration={3000} spinner="circles" />
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
                            <DynamicFormField field={field} onFormFieldChange={(value) => handleFormChange(field?.formControlName!, value)} />
                        </IonCol>
                    ))}
                    <IonCol size="12" sizeMd="4" pushMd="8">
                        <IonButton expand="block" onClick={() => handleTaskFormSubmit()}>Submit</IonButton>
                    </IonCol>
                </IonRow>
                ) : null}
            </IonGrid>
        </IonContent>
    )
};
export default Task;