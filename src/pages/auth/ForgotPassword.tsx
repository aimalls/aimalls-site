import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonPage, IonRouterLink, IonRow, useIonAlert, useIonLoading } from '@ionic/react'
import React, { useState } from 'react'
import '../../styles/auth/ForgotPassword.scss'
import Key from '../../assets/images/key.png'
import { arrowBackOutline, lockClosed, mail } from 'ionicons/icons'
import { requestForgotPasswordLinkFromAPI } from '../../requests/auth.request'
import { useProgressiveImage } from '../../hooks/ProgressiveImage'

import changePasswordBg from '../../assets/images/auth-bg4.jpg'
import Logo from '../../assets/images/logo-full.png'
import changePasswordBgPlaceholder from '../../assets/images/auth-bg4-placeholder.jpg'

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>('')
    const [emailSent, setEmailSent] = useState<boolean>(false)
    
    const loaded_bg = useProgressiveImage(changePasswordBg);

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
                        { !emailSent ? (
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
                                        <IonInput 
                                            label='Email' 
                                            className='inputs' 
                                            labelPlacement="floating"
                                            placeholder='Enter your Email'
                                            counter={true}
                                            value={email}
                                            keyboard-attach
                                            onIonChange={(val) => setEmail(val.detail.value!)}
                                        />
                                    </IonCol>
                                </IonRow>
                                <IonRow className='ion-justify-content-center'>
                                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                                        <IonButton size='large' shape='round' expand='block' onClick={handleSubmit}>
                                            Send Request
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                                <IonCol size='12'>
                                    <div className="back">
                                        <IonButton fill='clear' color={'light'} routerLink='/login'>
                                            <IonIcon icon={arrowBackOutline}></IonIcon>
                                            <div>Back to Login</div>
                                        </IonButton>
                                        
                                    </div>
                                </IonCol>
                            </IonGrid>
                        ) : (
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
                                        <div className="title">Change Password Link Sent!</div>
                                        <div className="sub-title">
                                            Change password link was sent to your email. Please check and click the link provided.
                                        </div>
                                    </IonCol>
                                    <IonCol size='12'>
                                        <div className="back">
                                            <IonButton fill='clear' color={'light'} routerLink='/login'>
                                                <IonIcon icon={arrowBackOutline}></IonIcon>
                                                <div>Back to Login</div>
                                            </IonButton>
                                            
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        ) }
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default ForgotPassword
