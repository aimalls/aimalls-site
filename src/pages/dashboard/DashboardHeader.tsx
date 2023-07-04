import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import '../../styles/dashboard/DashboardHeader.scss'
import { mail, menuOutline } from 'ionicons/icons'
import logoFull from "../../assets/images/logo-full.png";
import { useHistory } from 'react-router';
import { Logout } from '../../requests/auth.request';

const DashboardHeader: React.FC = () => {
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
        <div id='dashboard-header'>
            <IonMenu contentId='dashboard-header-content' className='dashboard-navigation-content'>
                <div className='logo-wrap'>
                    <img src={logoFull} className='logo' />
                </div>
                <IonContent className='ion-padding'>
                    <IonList>
                        <IonItem lines="full" href="/dashboard">
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Dashboard</IonLabel>
                        </IonItem>
                        <IonItem lines="full" href="/dashboard">
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Tasks</IonLabel>
                        </IonItem>
                        <IonItem lines="full" href="/dashboard">
                            <IonLabel slot='end' color={'primary'} className='dashboard-navigation-link'>Rewards</IonLabel>
                        </IonItem>
                        <IonItem lines='full'>
                            <IonButton slot='end' fill='clear' onClick={() => processLogout()}>Logout</IonButton>
                        </IonItem>
                        <IonButton className='ion-margin-top' fill='solid' shape='round' expand="full" style={{textTransform: "lowercase"}}>
                            <IonIcon slot="start" icon={mail}></IonIcon>
                            support@aimalls.app
                        </IonButton>
                    </IonList>
                </IonContent>
            </IonMenu>
                <IonHeader id='dashboard-header-content' className='ion-padding-horizontal'>
                    <IonToolbar style={{height: "70px", display: "flex"}}>
                        {/* <IonButtons slot="end"> */}
                            <IonMenuToggle slot='end' >
                                <IonButton fill='solid' color={"primary"}>
                                    <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                </IonButton>
                            </IonMenuToggle>
                        {/* </IonButtons> */}
                        <IonTitle>
                            <img src={logoFull} className='logo'  height={50}/>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
        </div>
    )
}

export default DashboardHeader
