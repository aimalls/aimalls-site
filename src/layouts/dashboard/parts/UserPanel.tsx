import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonMenuToggle, IonRow, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import { logOut, menuOutline, notifications } from "ionicons/icons";
import { FC, useContext, useMemo } from "react";

import defaultUserImage from "../../../assets/images/user.png"
import { UserContext } from "../../../contexts/userContext";
import { Logout } from "../../../requests/auth.request";
import { useHistory } from "react-router";
import { getUserRewardsFromAPI } from "../../../requests/reward.request";
import { useQuery } from "@tanstack/react-query";
import { getUserReferralsCount } from "../../../requests/user.request";
import { getTaskCompletedCountFromAPI } from "../../../requests/user-task.request";

import "../../../styles/layouts/dashboard/parts/UserPanel.scss"

import logoFull from "../../../assets/images/logo-full.png";

import { Clipboard } from '@capacitor/clipboard';
import { Share } from '@capacitor/share';

export interface iProps {}
export const UserPanel: FC<iProps> = (props): JSX.Element => {
    
    const { user } = useContext(UserContext);

    
    const navigation = useHistory();
    const [presentAlert] = useIonAlert();
    

    const referralCountQuery = useQuery(
        ["referral_count"],
        () => getUserReferralsCount(user._id)
    )

    const taskCompletedCountQuery = useQuery(
        ["task_completed"],
        () => getTaskCompletedCountFromAPI()
    )

    const referralLink = useMemo(() => {
        if (user) {
            const url_string = window.location.href
            const url = new URL(url_string)
            return `${url.origin}/register?ref=${user._id}`
        }
    }, [user])

    

    const processLogout = async () => {
        try {
            const logoutRequest = await Logout()
            localStorage.removeItem("authToken")
            navigation.push("/login")

        } catch (err) {
            console.log(err)
        }
    }

    const copyReferalLink = async () => {
        try {
            await Clipboard.write({
                string: referralLink
            });
            
            presentAlert("Referrel Link Copied!")
        } catch (error) {
            presentAlert("Cannot Copy Referral Link!")
        }
    }

    const shareAIMalls = async () => {
        await Share.share({
            title: 'Join AIMalls Now!',
            text: 'Magregister at gawin ang mga task, at magipon ng $0.3 AIT worth ₱336 pesos',
            url: referralLink,
            dialogTitle: 'Share with buddies',
          });
    }
    
    return (
        <div id="user-info-wrap">
            <IonToolbar color="clear" style={{height: "70px", display: "flex", boxShadow: 'none'}} className="ion-hide-md-up">
                    <IonMenuToggle slot='end' >
                        <IonButton fill='clear' color={"primary"}>
                            <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                        </IonButton>
                    </IonMenuToggle>
                <IonTitle>
                    <img src={logoFull} className='logo'  height={50}/>
                </IonTitle>
            </IonToolbar>
            <div className="action-buttons ion-hide-md-down">
                
                <IonButton fill="clear" onClick={() => processLogout()}>
                    <IonIcon slot="end" icon={ logOut }></IonIcon>
                    <IonLabel>Logout</IonLabel>
                </IonButton>
                <IonButton fill="clear">
                    <IonIcon icon={ notifications }></IonIcon>
                </IonButton>
            </div>
            <IonGrid>
                <IonRow>
                    <IonCol size="12" sizeSm="6" sizeMd="12">
                    <div className="user-info">
                        <div className="profile-picture">
                            <img src={ defaultUserImage } alt={ user?.email } />
                        </div>
                        <div className="user-name">
                            { user.email }
                        </div>
                        <div className="user-role">
                            Member
                        </div>
                    </div>
                    </IonCol>
                    <IonCol size="12" sizeSm="6" sizeMd="12">
                    <div className="earnings">
                        <div className="earning-wrap">
                            <div className="value">
                                {referralCountQuery.data ? referralCountQuery.data : 0}
                            </div>
                                <IonButton fill="clear" size="small" routerLink="/dashboard/referrals">
                                    <IonLabel style={{ textTransform: 'capitalize', }}>
                                        Referrals
                                    </IonLabel>
                                </IonButton>
                        </div>
                        <div className="earning-wrap">
                            <div className="value">
                                {taskCompletedCountQuery.data ? taskCompletedCountQuery.data : 0}
                            </div>
                            <IonButton fill="clear" size="small" routerLink="/dashboard/tasks">
                                <IonLabel style={{ textTransform: 'capitalize', }}>
                                    Task Completed
                                </IonLabel>
                            </IonButton>
                        </div>
                        
                    </div>
                    </IonCol>
                    <IonCol size="12" style={{ display: 'flex', justifyContent: 'center' }}>
                        <IonButton fill="clear" size="small" onClick={() => shareAIMalls()}>Share</IonButton>
                        <IonButton fill="clear" size="small" onClick={() => copyReferalLink()}>Copy Referral Link</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            
            
            <div className="border-right ion-hide-lg-down"></div>
        </div>
    )
};
export default UserPanel;