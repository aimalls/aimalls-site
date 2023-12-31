import { IonButton, IonCol, IonContent, IonGrid, IonLoading, IonRow, useIonAlert, useIonLoading } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getTaskByIdFromAPI } from "../../../requests/task.request";
import { iTask } from "../../../hooks/useTask";
import DynamicFormField from "../../../components/dynamic-form-field/DynamicFormField";
import { saveUserTaskToAPI } from "../../../requests/user-task.request";
import { Toast } from "@capacitor/toast";
import PageHeader from "../../../layouts/dashboard/parts/PageHeader";
import UserPanel from "../../../layouts/dashboard/parts/UserPanel";

export interface iProps {}

export const Task: FC<iProps> = (props): JSX.Element => {
    const params: { id: string } = useParams();
    
    const [present, dismiss] = useIonLoading();

    const [presentAlert] = useIonAlert();

    
    const navigation = useHistory();

    const taskQuery = useQuery(
        ["task", params.id],
        () => getTaskByIdFromAPI(params.id)
    )

    const task = taskQuery.data as iTask;
    const taskIsLoading = taskQuery.isLoading;
    

    const [formField, setFormField] = useState<object>({})


    const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

    useEffect(() => {
        const url_string = window.location.href
        const url = new URL(url_string)
        const redirect = url.searchParams.get("redirect")
        if (redirect) {
            setRedirectUrl(redirect)
        }
    }, [])

    const handleTaskFormSubmit = async () => {
        await present({ message: 'Saving task..' })
        try {
            let form = {
                taskId: params.id,
                ...formField
            }
            await saveUserTaskToAPI(form)
            presentAlert("Task Saved.")
            if (redirectUrl) {
                navigation.push(`/dashboard/${redirectUrl}`)
            } else {
                navigation.push("/dashboard/tasks")
            }
        } catch (err: any) {
            presentAlert(err.error)
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
            <div className="ion-hide-lg-up">
                <PageHeader/>
            </div>
            <div className="ion-hide-lg-down">
                <UserPanel/>
            </div>
            <IonGrid className="responsive-grid">
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
                    <IonCol size="12" sizeMd="3" pushMd="6" style={{ padding: '0px' }}>
                        <IonButton expand="block" routerLink={ redirectUrl ? `/dashboard/${redirectUrl}` : 'dashboard/tasks' }>Do Later</IonButton>
                        
                    </IonCol>
                    <IonCol size="12" sizeMd="3" pushMd="6" style={{ padding: '0px' }}>
                        <IonButton expand="block" onClick={() => handleTaskFormSubmit()}>Submit</IonButton>
                    </IonCol>
                    
                </IonRow>
                ) : null}
            </IonGrid>
        </IonContent>
    )
};
export default Task;