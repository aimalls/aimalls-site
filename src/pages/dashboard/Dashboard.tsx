import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import { FC, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Logout } from "../../requests/auth.request";
import { useHistory } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getUserRewardsFromAPI, iReward } from "../../requests/reward.request";

export interface iProps {}
export const Dashboard: FC<iProps> = (props): JSX.Element => {

    const { user } = useContext(UserContext);

    const navigation = useHistory();

    const rewardsQuery = useQuery(
        ["rewards"],
        () => getUserRewardsFromAPI()
    )

    const rewardsData = rewardsQuery.data;
    const isRewardsLoading = rewardsQuery.isLoading;

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size="12" className="page-title">
                        Dashboard
                    </IonCol>
                    <IonCol size="12">
                        Welcome, { user.email }!
                    </IonCol>
                    { rewardsData && rewardsData.length !== 0 ?
                        rewardsData.map((reward: iReward, index: number)=> (
                            
                        <IonCol size="12" sizeMd="6" sizeLg="4" key={`reward-${index}`}>
                            <IonCard className="ion-no-margin" style={{ borderTop: "3px solid var(--ion-color-primary)" }}>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        { reward._id } Reward
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '20px' }}>{ `${reward.total.$numberDecimal} ${reward._id}` }</div>
                                    <div><IonButton routerLink="/dashboard/tasks" size="small" fill="clear">Get More Rewards</IonButton></div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        
                        ))
                    : 
                        <IonCol size="12" sizeMd="6" sizeLg="4" key={`reward-z`}>
                            <IonCard className="ion-no-margin" style={{ borderTop: "3px solid var(--ion-color-primary)" }}>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        AIT Reward
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '20px' }}>{ `0 AIT` }</div>
                                    <div><IonButton routerLink="/dashboard/tasks" size="small" fill="clear">Get More Rewards</IonButton></div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    }
                </IonRow>
            </IonGrid>
            {/* <IonButton onClick={processLogout}>Logout</IonButton> */}
        </IonContent>
    )
};
export default Dashboard;