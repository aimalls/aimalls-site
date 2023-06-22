import { IonCol, IonGrid, IonRow } from "@ionic/react"

import logoFull from "../../assets/images/logo-full.png";
import { SocialButtons } from "../../components/SocialButtons";
export const FooterSection: React.FC = () => {
    return (
        <div id="footer-section">
            <IonGrid className="container">
                <IonRow className='container ion-align-items-center ion-justify-content-between'>
                    <IonCol size='12' sizeMd='3' style={{ display: 'flex', justifyContent: 'start' }} className="logo">
                        <img src={logoFull} className='logo' />
                    </IonCol>
                    <IonCol size='12' sizeMd='6' className='copyright' style={{ display: 'flex', justifyContent: 'center' }}>
                        <span>&copy; AIMalls All Rights Reserve</span>
                    </IonCol>
                    <IonCol size='12' sizeMd='3' style={{ display: 'flex', justifyContent: 'end' }} className='social-buttons'>
                        <SocialButtons />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}