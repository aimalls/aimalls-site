import { IonButton, IonCol, IonGrid, IonHeader, IonIcon, IonMenu, IonMenuToggle, IonRow, IonToolbar } from "@ionic/react"
import { menuOutline, mail } from "ionicons/icons"

import logoFull from "../../assets/images/logo-full.png";
import { NavigationList } from '../../components/NavigationList';
export const Header = () => {
    return (
        <>
            <IonMenu contentId="main-header" className="ion-hide-md-up">
                <div id='responsive-nav'>
                    <div className='logo-wrap'>
                        <img src={logoFull} className='logo' />
                    </div>
                    <NavigationList />
                    <IonButton fill='solid' shape='round' expand="full" style={{textTransform: "lowercase"}}>
                        <IonIcon slot="start" icon={mail}></IonIcon>
                        support@aimalls.app
                    </IonButton>
                    <IonButton fill="clear">
                        sds
                    </IonButton>
                </div>
            </IonMenu>
            <IonHeader id='main-header'>
                <IonToolbar>
                    <IonGrid>
                        <IonRow className='container ion-align-items-center ion-justify-content-between'>
                            <IonCol size='6' sizeMd='2' style={{ display: 'flex', justifyContent: 'start' }}>
                                <img src={logoFull} className='logo' />
                            </IonCol>
                            <IonCol size='auto' sizeMd='7' className='ion-hide-md-down'>
                                <div id='main-navigation'>
                                    <NavigationList />
                                </div>
                            </IonCol>
                            <IonCol size='auto' sizeMd='3' style={{ display: 'flex', justifyContent: 'end' }}>
                                <IonButton fill='solid' shape='round' className='ion-hide-md-down' style={{textTransform: "lowercase"}}>
                                    <IonIcon slot="start" icon={mail}></IonIcon>
                                    support@aimalls.app
                                </IonButton>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <IonButton fill="clear" href="/login">Login</IonButton>
                                    <div>/</div>
                                    <IonButton fill="clear" href="/register">Register</IonButton>

                                </div>
                                <IonMenuToggle className='ion-hide-md-up'>
                                    <IonButton fill='solid'>
                                        <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                    </IonButton>
                                </IonMenuToggle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
        </>
    )
}