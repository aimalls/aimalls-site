import React, { useState } from 'react'
import "../../styles/auth/Login.scss"
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonButton, IonLabel } from '@ionic/react'
import Logo from '../../assets/images/logo-full.png'

import gmailIcon from '../../assets/images/google.png'
// import facebook from '../../assets/images/facebook-logo.png'
// import telegram from '../../assets/images/telegram-logo.png'
// import twitter from '../../assets/images/twitter-logo.png'


const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const processLogin = () => {
        let loginData ={
            email,
            password
        }
    }
 
    return (
        <div id='login'>
            <IonPage>
                <IonContent>
                    <div className="login-content">
                        <IonGrid className='ion-no-padding'>
                            <IonRow className='ion-justify-content-between'>
                                <IonCol size='12' sizeSm='6' sizeMd='8'>
                                    <div className="login-column">
                                        <IonRow className='ion-justify-content-center'>
                                            <IonCol size='12'>
                                                <div className="login-title">Login to Your Account</div>
                                                <div className='login-description'>Welcome back</div>
                                                {/* <div className="login-social-media">
                                                    <a href="">
                                                        <img src={facebook} alt="" />
                                                    </a>
                                                    <a href="">
                                                        <img src={twitter} alt="" />
                                                    </a>
                                                    <a href="">
                                                        <img src={telegram} alt="" />
                                                    </a>
                                                </div> */}
                                            </IonCol>
                                            <IonCol size='12' sizeSm='9' sizeMd='7'>
                                                <IonButton expand='block' color={'light'}>
                                                    <img src={gmailIcon} alt="Google Icon" height={25} />
                                                    <div className='sign-up-title'>Sign up with Google</div>
                                                </IonButton>
                                                <div className='line-break'>or</div>
                                            </IonCol>
                                            <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                <IonInput 
                                                    label='Email' 
                                                    className='inputs'
                                                    type='email'
                                                    required
                                                    labelPlacement="floating" 
                                                    placeholder='Enter your Email' 
                                                    value={email}
                                                    onIonChange={(val) => setEmail(val.detail.value!)}
                                                />
                                            </IonCol>
                                            <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                <IonInput 
                                                    label='Password' 
                                                    className='inputs' 
                                                    labelPlacement="floating"
                                                    placeholder='Enter your Password'
                                                    value={password}
                                                    required
                                                    onIonChange={(val) => setPassword(val.detail.value!)}
                                                />
                                                
                                            </IonCol>
                                            <IonCol size='12' sizeMd='7'>
                                                <div className="forgot-password">
                                                <IonButton href='/forgot-password' fill='clear'>
                                                    <div className='forgot-password-title'>forgot password?</div>
                                                </IonButton>
                                                </div>
                                            </IonCol>
                                            <IonCol size='12' sizeMd='7'>
                                                <div className='login-btn'>
                                                    <a href="" onClick={processLogin}>Login</a>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                </IonCol>
                                <IonCol size='12' sizeSm='6' sizeMd='4' >
                                    <div className="register-column">
                                        <IonRow className='ion-justify-content-center'>
                                            <IonCol size='12'>
                                                <div className="register-title">New Here?</div>
                                                <div className="register-description">
                                                    Welcome to the future of shopping, where AI takes you on a personalized retail journey like never before. Sign up today and discover the extraordinary convenience, tailored experiences, and endless possibilities of AI malls.
                                                </div>
                                            </IonCol>
                                            <IonCol size='12' sizeMd='8'>
                                                <IonButton expand='block' shape='round' href='/register' color={'light'}>Register</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                    </IonContent>
            </IonPage>
        </div>
    )
}

export default Login
