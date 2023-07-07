import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { FC } from "react";
import useTask from "../../hooks/useTask";
import { iTask } from "../../hooks/useTask";

export interface iProps {}
export const Tasks: FC<iProps> = (props): JSX.Element => {

    const { tasks, isTasksLoading } = useTask();

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size="12" className="page-title">
                        Tasks
                    </IonCol>
                    {!isTasksLoading ? tasks.map((task: iTask) => (
                        <IonCol size="12" sizeLg="3" sizeMd="4" sizeSm="6" key={task._id}>
                            <IonCard>
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
                                        <IonButton routerLink={`/dashboard/tasks/${task._id}`}>Go</IonButton>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    )) : null}
                    
                </IonRow>
            </IonGrid>
        </IonContent>
    )
};
export default Tasks;