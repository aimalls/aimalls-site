import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonPage, IonRow, useIonAlert, useIonLoading } from '@ionic/react'
import React, { useState } from 'react'
import '../../styles/auth/ForgotPassword.scss'
import Key from '../../assets/images/key.png'
import { arrowBackOutline, lockClosed, mail } from 'ionicons/icons'
import { requestForgotPasswordLinkFromAPI } from '../../requests/auth.request'

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>('')
    const [emailSent, setEmailSent] = useState<boolean>(false)

    const [presentAlert] = useIonAlert();

    const [present, dismiss] = useIonLoading();

    const handleSubmit = async () => {
        await present()
        try {
            const request = await requestForgotPasswordLinkFromAPI(email);
            setEmailSent(true)
            presentAlert(request.data.message)
        } catch (error: any) {
            presentAlert(error.response.data.error)
        } finally {
            await dismiss();
        }
    }

    return (
        <div id="forgot-password">
            <IonPage>
                <IonContent fullscreen>
                    <div id="forgot-password-content">
                        <IonGrid className='container'>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size='12'>
                                    <div className="icon">
                                        <div className="icon-img">
                                            <img src={Key} alt="key icon" height={50} width={50} />
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol size='12'>
                                    <div className="title">Yo! Forgot Your Password?</div>
                                    <div className="sub-title">
                                        No worries! Enter your email and we will send you a reset.
                                    </div>
                                </IonCol>
                                <IonCol size='12' sizeMd='6' sizeLg='4'>
                                    <IonItem  className="inputs">
                                        <IonIcon icon={mail} color='primary' size='large' slot='end'></IonIcon>
                                        <IonInput 
                                            label='Email' 
                                            // className='inputs' 
                                            labelPlacement="floating"
                                            aria-label='Email'
                                            placeholder='Enter your Email'
                                            counter={true}
                                            value={email}
                                            keyboard-attach
                                            onIonChange={(val) => setEmail(val.detail.value!)}
                                        />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='6' sizeLg='4'>
                                    {/* <div className='forgot-password-btn'>
                                        <a href="/forgot-password" onClick={handleSubmit}>Send Request</a>
                                    </div> */}
                                    <IonButton size='large' shape='round' expand='block' onClick={handleSubmit}>
                                        Send Request
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            <IonCol size='12'>
                                <div className="back">
                                    <IonButton fill='clear' color={'light'} href='/login'>
                                        <IonIcon icon={arrowBackOutline}></IonIcon>
                                        <div>Back to Login</div>
                                    </IonButton>
                                    
                                </div>
                            </IonCol>
                        </IonGrid>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default ForgotPassword
