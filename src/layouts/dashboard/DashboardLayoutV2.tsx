import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import { homeOutline, list, logOut, mail, menuOutline, people } from "ionicons/icons";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Logout } from "../../requests/auth.request";
import { useHistory } from "react-router";
import { UserContext } from "../../contexts/userContext";
import { Clipboard } from '@capacitor/clipboard';

import logoFull from "../../assets/images/logo-full.png";
import '../../styles/layouts/dashboard/DashboardLayoutV2.scss'
import DashboardRoutes from "../../routes/DashboardRoutes";
import UserPanel from "./parts/UserPanel";

export interface iProps {}
export const DashboardLayoutV2: FC<iProps> = (props): JSX.Element => {
    const navigation = useHistory();
    const { user } = useContext(UserContext)
    const [presentAlert] = useIonAlert();


    

    const processLogout = async () => {
        try {
            const logoutRequest = await Logout()
            localStorage.removeItem("authToken")
            navigation.push("/login")

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="dashboard-layout">
            <IonSplitPane when="md" contentId="dashboard-content">
                <IonMenu contentId='dashboard-content' className='dashboard-navigation-content' type='push'>
                    
                    
                    <IonList style={{ background: 'none', padding: '20px 0px 20px 20px' }} lines="none" id="dashboard-list-menu">
                        <IonItem>
                            <div className='logo-wrap'>
                                <img src={logoFull} className='logo' />
                            </div>
                        </IonItem>
                        <IonItem lines="full" routerLink="/dashboard" detail={false} 
                            className={ navigation.location.pathname == "/dashboard" ? "active" : ""}>
                            <div></div>
                            <div></div>
                            <IonIcon slot="start" icon={ homeOutline } color={"#FFF"}></IonIcon>
                            <IonLabel className='dashboard-navigation-link'>Dashboard</IonLabel>
                        </IonItem>
                        <IonItem lines="full" routerLink="/dashboard/tasks" detail={false} 
                            className={ navigation.location.pathname == "/dashboard/tasks" ? "active" : ""}>
                            <div></div>
                            <div></div>
                            <IonIcon slot="start" icon={ list } color={"#FFF"}></IonIcon>
                            <IonLabel className='dashboard-navigation-link'>Tasks</IonLabel>
                        </IonItem>
                        <IonItem lines="full" routerLink="/dashboard/referrals" detail={false} 
                            className={ navigation.location.pathname == "/dashboard/referrals" ? "active" : ""}>
                            <div></div>
                            <div></div>
                            <IonIcon slot="start" icon={ people } color={"#FFF"}></IonIcon>
                            <IonLabel className='dashboard-navigation-link'>Referrals</IonLabel>
                        </IonItem>
                        <IonItem lines='full' onClick={processLogout} detail={false}>
                            <IonIcon slot="start" icon={ logOut } color={"#FFF"}></IonIcon>
                            <IonLabel className='dashboard-navigation-link'>
                                Log out
                            </IonLabel>
                        </IonItem>
                       
                    </IonList>
                    <div className="ion-padding">
                         <IonButton className='ion-margin-top' fill='outline' color={"light"} shape='round' expand="full" style={{textTransform: "lowercase"}}>
                            <IonIcon slot="start" icon={mail} color="#FFF"></IonIcon>
                            support@aimalls.app
                        </IonButton>
                    </div>
                </IonMenu>
                <IonPage id="dashboard-content">
                    {!!user?.email == false ? (
                        <IonContent>Unauthenticated!, Login first!</IonContent>
                        ): (
                        <>
                            {/* <IonHeader className='ion-padding-horizontal ion-hide-md-up' style={{ boxShadow: 'none' }}>
                                <IonToolbar style={{height: "70px", display: "flex", boxShadow: 'none'}}>
                                        <IonMenuToggle slot='end' >
                                            <IonButton fill='outline' color={"primary"}>
                                                <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                            </IonButton>
                                        </IonMenuToggle>
                                    <IonTitle>
                                        <img src={logoFull} className='logo'  height={50}/>
                                    </IonTitle>
                                </IonToolbar>
                            </IonHeader> */}
                            <IonContent>
                                <IonRouterOutlet>
                                    <DashboardRoutes />
                                </IonRouterOutlet>
                            </IonContent>
                        </>
                    )}
                </IonPage>
            </IonSplitPane>
        </div>
    )
};
export default DashboardLayoutV2;