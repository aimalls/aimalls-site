import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react'
import React, { useState } from 'react'
import '../../styles/auth/Register.scss'

import facebook from '../../assets/images/facebook-logo.png'
import twitter from '../../assets/images/twitter-logo.png'
import telegram from '../../assets/images/telegram-logo.png'
import verifiedIcon from '../../assets/images/verified.png'

const Register: React.FC = () => {
    
    const [verified, setVerified] = useState(true)
    
    return (
        <div id='register'>
            <IonPage>
                <IonContent>
                    { verified ? (
                        
                            
                            <div id="register-content">
                                {/* <IonGrid className='ion-no-padding'> */}
                                    <IonRow className='ion-justify-content-between'>
                                        <IonCol size='12' sizeSm='6' sizeMd='8'>
                                            <div className="register-column">
                                                <IonRow className='ion-justify-content-center'>
                                                    <IonCol size='12'>
                                                        <div className="register-title">Create Your Account</div>
                                                        <div className="register-description">Create account using social networks</div>
                                                        <div className="register-social-media">
                                                            <a href="">
                                                                <img src={facebook} alt="" />
                                                            </a>
                                                            <a href="">
                                                                <img src={twitter} alt="" />
                                                            </a>
                                                            <a href="">
                                                                <img src={telegram} alt="" />
                                                            </a>
                                                        </div>
                                                        <div className='line-break'>or</div>
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                        <IonInput 
                                                            label='Username' 
                                                            className='inputs'
                                                            labelPlacement="floating" 
                                                            placeholder='Enter your Username' 
                                                            />
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                        <IonInput 
                                                            label='Email' 
                                                            className='inputs'
                                                            labelPlacement="floating" 
                                                            placeholder='Enter your Email' 
                                                        />
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                        <IonInput 
                                                            label='Password' 
                                                            className='inputs'
                                                            labelPlacement="floating" 
                                                            placeholder='Enter your Password' 
                                                            />
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                        <IonInput 
                                                            label='Confirm Password' 
                                                            className='inputs'
                                                            labelPlacement="floating" 
                                                            placeholder='Enter your Confirm Password' 
                                                            />
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7'>
                                                        <div className='register-btn'>
                                                            <a href="/register">Register</a>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>    
                                            </div>
                                        </IonCol>
                                        <IonCol  size='12' sizeSm='6' sizeMd='4' >
                                            <div className="login-column">
                                                <IonRow className='ion-justify-content-center al'>
                                                    <IonCol size='12'>
                                                        <div className="login-title">Welcome Back!</div>
                                                        <div className="login-description">
                                                            Rediscover the wonders of AI malls. Log in today and immerse yourself in a world of seamless shopping, intelligent recommendations, and delightful surprises. Your AI-powered retail adventure awaits!
                                                        </div>
                                                    </IonCol>
                                                    <IonCol size='12' sizeMd='7'>
                                                        <IonButton expand='block' shape='round' href='/login' color={'light'}>Login</IonButton>
                                                    </IonCol>
                                                </IonRow>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                {/* </IonGrid> */}
                            </div>
                    ): ( 
                        <div id='verified'>
                            {/* <IonGrid> */}
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size='12'>
                                        <div className="icon">
                                            <div className="icon-img">
                                                <img src={verifiedIcon} alt="verified icon" />
                                            </div>
                                        </div>
                                    </IonCol>
                                    <IonCol size='12'>

                                        <div className="verified-title">Yehey!</div>
                                        <div className="verified-description">
                                            Your registration is almost done, please check your email to complete the verification of your account!
                                        </div>
                                    </IonCol>
                                    <IonCol size='12' sizeMd='4'>
                                        <div className='verified-btn'>
                                            <a href="/register">Got it</a>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            {/* </IonGrid> */}
                        </div> 
                    ) }
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Register
