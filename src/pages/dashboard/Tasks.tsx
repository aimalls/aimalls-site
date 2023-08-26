import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonRow } from "@ionic/react";
import { FC } from "react";
import useTask from "../../hooks/useTask";
import { iTask } from "../../hooks/useTask";
import PageHeader from "../../layouts/dashboard/parts/PageHeader";
import UserPanel from "../../layouts/dashboard/parts/UserPanel";

import "../../styles/pages/dashboard/Tasks.scss"

export interface iProps {}
export const Tasks: FC<iProps> = (props): JSX.Element => {

    const { tasks, isTasksLoading } = useTask();

    

    return (
        <IonContent id="tasks">
            <div className="ion-hide-lg-up">
                <PageHeader/>
            </div>
            <div className="ion-hide-lg-down">
                <UserPanel/>
            </div>
            <IonGrid className="tasks-content">
                <IonRow>
                    <IonCol size="12" className="page-title">
                        Tasks
                    </IonCol>
                    <IonCol size="12">
                        <IonList>
                            {!isTasksLoading ? tasks.map((task: iTask) => (
                            <IonItem disabled={["Approved", "Checking"].includes(task.userCompletionStatus!)} routerLink={`/dashboard/tasks/${task._id}`} key={task._id}>
                                <IonCheckbox checked={ task.userCompletionStatus == 'Approved' } slot="start">
                                    +{ `${task.taskReward.amount.$numberDecimal} ${task.taskReward.currency}` }
                                </IonCheckbox>
                                <IonLabel>{ task.taskTitle }</IonLabel>
                                { !task.userCompletionStatus || task.userCompletionStatus == 'Rejected' ? (
                                    <IonButton routerLink={`/dashboard/tasks/${task._id}`} slot="end">Go</IonButton>
                                ): (    
                                    <IonButton disabled slot="end">{ task.userCompletionStatus } + { `${task.taskReward.amount.$numberDecimal} ${task.taskReward.currency}` }</IonButton>
                                )}
                            </IonItem>
                            )): null}
                        </IonList>
                    </IonCol>
                    
                </IonRow>
            </IonGrid>
        </IonContent>
    )
};
export default Tasks;