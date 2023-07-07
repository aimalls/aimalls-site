import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { FC, useContext } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import UserContextProvider, { UserContext } from "../../contexts/userContext";
import { mail, menuOutline } from "ionicons/icons";
import logoFull from "../../assets/images/logo-full.png";
import { useHistory } from "react-router";
import { Logout } from "../../requests/auth.request";
import '../../styles/layouts/dashboard/DashboardLayout.scss'

export interface iProps {

}
export const DashboardLayout: FC<iProps> = (props): JSX.Element => {

    const { user } = useContext(UserContext)
    const navigation = useHistory();

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
        
        <div id="dashboard">
            <IonSplitPane when="md" contentId="dashboard-content">
                <IonMenu contentId='dashboard-content' className='dashboard-navigation-content' type='push' >
                    <div className='logo-wrap'>
                        <img src={logoFull} className='logo' />
                    </div>
                    <IonContent className='ion-padding'>
                        <IonList>
                            <IonItem lines="full" routerLink="/dashboard">
                                <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                            </IonItem>
                            <IonItem lines="full" routerLink="/dashboard/tasks">
                                <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Tasks</IonLabel>
                            </IonItem>
                            <IonItem lines='full' onClick={processLogout}>
                                <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>
                                    Log out
                                </IonLabel>
                            </IonItem>
                            <IonButton className='ion-margin-top' fill='solid' shape='round' expand="full" style={{textTransform: "lowercase"}}>
                                <IonIcon slot="start" icon={mail}></IonIcon>
                                support@aimalls.app
                            </IonButton>
                        </IonList>
                    </IonContent>
                </IonMenu>

                <IonPage id="dashboard-content">
                    {!!user?.email == false ? (
                        <IonContent>Unauthenticated!, Login first!</IonContent>
                        ): (
                        <>
                            <IonHeader className='ion-padding-horizontal'>
                                <IonToolbar style={{height: "70px", display: "flex"}}>
                                        <IonMenuToggle slot='end' >
                                            <IonButton fill='solid' color={"primary"}>
                                                <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                            </IonButton>
                                        </IonMenuToggle>
                                    <IonTitle>
                                        <img src={logoFull} className='logo'  height={50}/>
                                    </IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <IonContent>
                                <IonGrid className="ion-padding">
                                    <IonRouterOutlet>
                                        <DashboardRoutes />
                                    </IonRouterOutlet>
                                </IonGrid>
                            </IonContent>
                        </>
                    )}
                </IonPage>
            </IonSplitPane>
            {/* <IonMenu contentId='dashboard-header-content' className='dashboard-navigation-content' type='push' >
                <div className='logo-wrap'>
                    <img src={logoFull} className='logo' />
                </div>
                <IonContent className='ion-padding'>
                    <IonList>
                        <IonItem lines="full" href="/dashboard">
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                        </IonItem>
                        <IonItem lines="full" href="/dashboard">
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                        </IonItem>
                        <IonItem lines="full" href="/dashboard">
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                        </IonItem>
                        <IonItem lines='full' onClick={processLogout}>
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>
                                Log out
                            </IonLabel>
                        </IonItem>
                        <IonButton className='ion-margin-top' fill='solid' shape='round' expand="full" style={{textTransform: "lowercase"}}>
                            <IonIcon slot="start" icon={mail}></IonIcon>
                            support@aimalls.app
                        </IonButton>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonPage id="dashboard-header-content">
                {!!user?.email == false ? (
                    <IonContent>Unauthenticated!, Login first!</IonContent>
                    ): (
                    <>
                        <IonHeader className='ion-padding-horizontal'>
                            <IonToolbar style={{height: "70px", display: "flex"}}>
                                    <IonMenuToggle slot='end' >
                                        <IonButton fill='solid' color={"primary"}>
                                            <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                        </IonButton>
                                    </IonMenuToggle>
                                <IonTitle>
                                    <img src={logoFull} className='logo'  height={50}/>
                                </IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonRouterOutlet>
                                <DashboardRoutes />
                            </IonRouterOutlet>
                        </IonContent>
                    </>
                )}
            </IonPage> */}
            
        </div>
    )
};
export default DashboardLayout;