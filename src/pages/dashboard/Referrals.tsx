import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow } from "@ionic/react";
import { FC,  } from "react";

import "../../styles/pages/dashboard/Referrals.scss"
import PageHeader from "../../layouts/dashboard/parts/PageHeader";
import UserPanel from "../../layouts/dashboard/parts/UserPanel";
import { iTask } from "../../hooks/useTask";
import { useQuery } from "@tanstack/react-query";
import { getUserReferralsFromAPI } from "../../requests/user.request";
import { tUser } from "../../contexts/userContext";

export interface iProps {}
export const Referrals: FC<iProps> = (props): JSX.Element => {
    
    const userReferralsQuery = useQuery(
        ["user_referrals"],
        () => getUserReferralsFromAPI()
    )

    const userReferrals = userReferralsQuery.data
    const isUserReferralsLoading = userReferralsQuery.isLoading

    return (
        <IonContent>
            <div className="ion-hide-md-up">
                <PageHeader/>
            </div>
            <div className="ion-hide-md-down">
                <UserPanel/>
            </div>
            <IonGrid class="responsive-grid">
                <IonRow>
                    <IonCol size="12" className="page-title">Referrals</IonCol>
                    <IonCol size="12">
                        <IonList>
                            {userReferrals ? userReferrals.map((user: tUser) => (
                            <IonItem key={user._id}>
                                <IonLabel>{ user.email }</IonLabel>
                            </IonItem>
                            )): null}
                        </IonList>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
};
export default Referrals;