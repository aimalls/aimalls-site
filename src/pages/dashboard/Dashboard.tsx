import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { FC, useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { getUserRewardsFromAPI, iReward } from "../../requests/reward.request";
import "../../styles/pages/dashboard/Dashboard.scss"
import UserPanel from "../../layouts/dashboard/parts/UserPanel";
import { UserContext } from "../../contexts/userContext";
import logoRobot from "../../assets/images/logo-robot.png"

export interface iProps {}
export const Dashboard: FC<iProps> = (props): JSX.Element => {
    const { user } = useContext(UserContext);
    const rewardsQuery = useQuery(
        ["rewards"],
        () => getUserRewardsFromAPI()
    )

    const rewardsData = rewardsQuery.data;
    const isRewardsLoading = rewardsQuery.isLoading;
    return (
        <IonContent fullscreen id="dashboard">
            <UserPanel />
            <IonGrid class="dashboard-content">
                <IonRow>
                    <IonCol size="12" className="page-title">Dashboard</IonCol>

                    <IonCol size="12" className="greetings">
                        <div className="header">Hello, { user?.email }!</div>
                        <div className="message">Welcome to AIMalls!</div>
                    </IonCol>

                    { rewardsData && rewardsData.length !== 0 ?
                        rewardsData.map((reward: iReward, index: number)=> (
                        
                        <IonCol size="12" sizeMd="12" sizeLg="6" key={`reward-${index}`}>
                            <IonCard className="ion-no-margin" color="primary">
                                <IonCardHeader>
                                    <IonCardTitle>
                                        { reward._id } Reward
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '20px' }}>{ `${reward.total.$numberDecimal} ${reward._id}` } 
                                        <span style={{ fontSize: '15px' }}>~${`${reward.usd.$numberDecimal}`}</span>
                                    </div>
                                    <div><IonButton routerLink="/dashboard/tasks" size="small" fill="clear" color="light">Get More Rewards</IonButton></div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        ))
                    :    
                        <IonCol size="12" sizeMd="6" key={`reward-z`}>
                            <IonCard className="ion-no-margin" color="primary">
                                <IonCardHeader>
                                    <IonCardTitle>
                                        AIT Reward
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '20px' }}>{ `0 AIT` } ~$0.00</div>
                                    <div><IonButton routerLink="/dashboard/tasks" size="small" fill="clear" color="tertiary">Get More Rewards</IonButton></div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    }
                   
                </IonRow>
            </IonGrid>
        </IonContent>
    )
};
export default Dashboard;