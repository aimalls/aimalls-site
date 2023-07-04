import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";
import { FC, useContext } from "react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import UserContextProvider, { UserContext } from "../../contexts/userContext";
import { mail, menuOutline } from "ionicons/icons";
import logoFull from "../../assets/images/logo-full.png";
import { useHistory } from "react-router";
import { Logout } from "../../requests/auth.request";
import '../../styles/Dashboard.scss'

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
            </IonPage>
            <IonMenu contentId='dashboard-header-content' className='dashboard-navigation-content' type='push'>
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
        </div>
    )
};
export default DashboardLayout;