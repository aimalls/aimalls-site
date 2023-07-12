import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonPage, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import '../../styles/auth/ForgotPassword.scss'
import Key from '../../assets/images/key.png'
import { arrowBackOutline } from 'ionicons/icons'

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>('')

    const handleSubmit = () => {
        

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
