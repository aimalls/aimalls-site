import { IonGrid, IonRow, IonCol } from '@ionic/react'
import React from 'react'

const ContactUs: React.FC = () => {
    return (
        <div id='contact-us'>
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center">
                    <IonCol size='12' sizeMd='5'></IonCol>
                    <IonCol size='12' sizeMd='5'></IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default ContactUs
