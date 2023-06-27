
import { IonButton, IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonToolbar } from "@ionic/react";
import logoFull from "../../assets/images/logo-full.png";
import { mail } from "ionicons/icons";

export const Header: React.FC = () => {
    return (
        <IonHeader id="main-header">
            <IonToolbar>
                <IonGrid>
                    <IonRow className='container ion-align-items-center ion-justify-content-between'>
                        <IonCol size='6' sizeMd='2' style={{ display: 'flex', justifyContent: 'start' }}>
                            <img src={logoFull} className='logo' />
                        </IonCol>
                        <IonCol size='auto' sizeMd='7' className='ion-hide-md-down'>
                            {/* <div id='main-navigation'>
                                <NavigationList />
                            </div> */}
                        </IonCol>
                        <IonCol size='auto' sizeMd='3' style={{ display: 'flex', justifyContent: 'end' }}>
                            <IonButton fill='solid' shape='round'>
                                Login
                            </IonButton>
                            {/* <IonMenuToggle className='ion-hide-md-up'>
                                <IonButton fill='solid'>
                                    <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                </IonButton>
                            </IonMenuToggle> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    )
}