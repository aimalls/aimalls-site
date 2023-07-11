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
                    {/* {!isTasksLoading ? tasks.map((task: iTask) => (
                        <IonCol size="12" sizeMd="4" sizeSm="6" key={task._id} style={{ display: 'flex' }}>
                            <IonCard style={{ width: '100%' }}>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        { task.taskTitle }
                                    </IonCardTitle>
                                </IonCardHeader>
                                
                                <IonCardContent>
                                    <div dangerouslySetInnerHTML={{ __html: task.taskDescription }}></div>
                                    <IonCardSubtitle>
                                        Reward: { `${task.taskReward.amount.$numberDecimal} ${task.taskReward.currency}` }
                                    </IonCardSubtitle>
                                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                                        { !task.userCompletionStatus || task.userCompletionStatus == 'Rejected' ? (
                                            <IonButton routerLink={`/dashboard/tasks/${task._id}`}>Go</IonButton>
                                        ): (    
                                            <IonButton disabled>{ task.userCompletionStatus }</IonButton>
                                        )}
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    )) : null} */}
                    
                </IonRow>
            </IonGrid>
        </IonContent>
    )
};
export default Tasks;