import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput, IonLabel, IonCheckbox, IonRouterLink, useIonAlert, IonItem, IonIcon } from '@ionic/react'
import React, { useEffect, useMemo, useState } from 'react'
import '../../styles/auth/Register.scss'
import Logo from '../../assets/images/logo-full.png'


import registerBg from '../../assets/images/auth-bg4.jpg'
import registerBgPlaceholder from '../../assets/images/auth-bg4-placeholder.jpg'


// import facebook from '../../assets/images/facebook-logo.png'
// import twitter from '../../assets/images/twitter-logo.png'
// import telegram from '../../assets/images/telegram-logo.png'
import verifiedIcon from '../../assets/images/verified.png'
import gmailIcon from '../../assets/images/google.png'

import { Register as RegisterRequest } from '../../requests/auth.request'
import { useLocalStorage } from 'usehooks-ts'
import getGoogleAuthURL from '../../helpers/googleAuth'
import { lockClosed, mail } from 'ionicons/icons'
import { useProgressiveImage } from '../../hooks/ProgressiveImage'

const Register: React.FC = () => {
    
    const [verified, setVerified] = useState(false)
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [termsandConditions, setTermsandConditions] = useState(false);
    const [referrer, setReferrer] = useLocalStorage("referrer", '')
    
    const loaded_bg = useProgressiveImage(registerBg);

    

    const [presentAlert] = useIonAlert();

    const [registrationForm, setRegistrationForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
        referrer: !!referrer ? referrer : ''
    });

    const [isGmail, setIsGmail] = useState<boolean>(false)

    useEffect(() => {
        const url_string = window.location.href
        const url = new URL(url_string)
        const mode = url.searchParams.get("mode")
        const mail = url.searchParams.get("mail")
        if (mail) {
            handleFormChange("email", {value: mail})
            setIsGmail(true)
        }
    }, [])

    const handleFormChange = (prop: any, { value }: any) => {
        let prev_reg: any = {...registrationForm};
        prev_reg[prop] = value

        setRegistrationForm((r) => {
            return r = prev_reg;
        })
    }

    const processRegistration = async () => {
        try {
            // console.log(registrationForm)
            await RegisterRequest(registrationForm.email, registrationForm.password, registrationForm.confirm_password, registrationForm.referrer)
            setVerified(true)
        } catch (error: any) {
            presentAlert(error.response.data.error)
        }
        
    }

    
    
    return (
        <div id='register'>
            <IonPage>
                <IonContent>
                    { !verified ? (
                            <div id="register-content">
                                <IonGrid className='ion-no-padding'>
                                    <IonRow className='ion-justify-content-between'>
                                        <IonCol size='12' sizeSm='12' sizeMd='8'>
                                            <div className="register-column" style={{ backgroundImage: `url(${ loaded_bg || registerBgPlaceholder })` }}>
                                                <IonRow className='ion-justify-content-center ion-padding'>
                                                    <IonCol size='12'>
                                                        <div className='logo-mobile'>
                                                            <IonRouterLink routerLink='/'>
                                                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "30px" }}>
                                                                    <img src={ Logo } alt='aimalls' />
                                                                </div>
                                                            </IonRouterLink>
                                                        </div>
                                                        <div className="register-title" style={{ marginBottom: '30px' }}>Sign up to add an Account</div>
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7'>
                                                        <IonButton expand='block' size='large' color={'light'} href={getGoogleAuthURL(import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URL)}>
                                                            <img src={gmailIcon} alt="Google Icon" height={25} />
                                                            <div className='sign-up-title'>Sign In with Google</div>
                                                        </IonButton>
                                                        <div className='line-break'>or</div>
                                                    </IonCol>
                                                    <IonCol size='12' sizeSm='9' sizeMd='7'>
                                                        <IonItem className=' inputs ion-margin-bottom'>
                                                            <IonInput 
                                                                label='Email' 
                                                                aria-label='Email'
                                                                labelPlacement="floating" 
                                                                placeholder='Enter your Email' 
                                                                type='email'
                                                                value={registrationForm.email}
                                                                disabled={ isGmail }
                                                                onIonChange={(val) => handleFormChange('email', val.detail)}
                                                            />
                                                            <IonIcon icon={mail} color='light' slot='end' size='large'></IonIcon>
                                                        </IonItem>
                                                        <IonItem className=' inputs ion-margin-bottom'>
                                                            <IonInput 
                                                                label='Password' 
                                                                aria-label='Password'
                                                                labelPlacement="floating" 
                                                                placeholder='Enter your Password'
                                                                type='password'
                                                                onIonChange={(val) => handleFormChange('password', val.detail)}
                                                            />
                                                            <IonIcon icon={lockClosed} color='light' slot='end' size='large'></IonIcon>
                                                        </IonItem>
                                                        <IonItem className=' inputs ion-margin-bottom'>
                                                            <IonInput 
                                                                label='Confirm Password'
                                                                aria-label='Confirm Password'
                                                                labelPlacement="floating" 
                                                                className='inputs-content'
                                                                placeholder='Enter your Confirm Password'
                                                                type="password"
                                                                onIonChange={(val) => handleFormChange('confirm_password', val.detail)} 
                                                            />
                                                            <IonIcon icon={lockClosed} color='light' slot='end' size='large'></IonIcon>
                                                        </IonItem>
                                                        <div className="terms-and-conditions">
                                                            <IonCheckbox labelPlacement='end'  onIonChange={(val) => setTermsandConditions(val.detail.checked)}>
                                                                I accept the
                                                            </IonCheckbox>
                                                            <a href="/terms-and-conditions" target='_blank'>Terms and Conditions</a>
                                                        </div>
                                                        <div className='privacy-policy'>
                                                            <IonCheckbox labelPlacement='end'  onIonChange={(val) => setPrivacyPolicy(val.detail.checked)}>
                                                                I agree to the
                                                            </IonCheckbox>
                                                            <a href="/privacy-policy" target='_blank'>Privacy Policy</a>
                                                        </div>
                                                        <IonButton 
                                                            onClick={processRegistration} 
                                                            disabled={ (!privacyPolicy || !termsandConditions) } 
                                                            expand='block' 
                                                            size='large' 
                                                            shape='round'
                                                            style={{textTransform: "capitalize", fontFamily: "WorkSans-Regular"}}
                                                        >
                                                            Register
                                                        </IonButton>
                                                        <div className='login-button-mobile'>
                                                            <div className="login-button-mobile-content">
                                                                <div>Already Have an Account?</div>
                                                                <IonButton routerLink='/login' size='small' style={{ textTransform: "capitalize", fontSize: "17px", fontFamily: "WorkSans-Regular" }} fill='clear'>Login</IonButton>
                                                            </div>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>    
                                            </div>
                                        </IonCol>
                                        <IonCol  size='12' sizeMd='4' >
                                            <div className="login-column">
                                                <IonRow className='ion-justify-content-center al'>
                                                    <IonCol size='12'>
                                                        <IonRouterLink routerLink='/'><div style={{ display: 'flex', justifyContent: 'center', marginBottom: "30px" }} ><img src={ Logo } alt='aimalls' /></div></IonRouterLink>
                                                        <div className="login-title">Welcome Back!</div>
                                                        <div className="login-description">
                                                            Rediscover the wonders of AI malls. Log in today and immerse yourself in a world of seamless shopping, intelligent recommendations, and delightful surprises. Your AI-powered retail adventure awaits!
                                                        </div>
                                                    </IonCol>
                                                    <IonCol size='12' sizeMd='7'>
                                                        <IonButton routerLink='/login' expand='block' size='large' shape='round' color={'light'}>
                                                            <div className="login-btn-txt">Login</div>
                                                        </IonButton>
                                                    </IonCol>
                                                </IonRow>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </div>
                    ): ( 
                        <div id='verified'>
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size='12'>
                                        <div className="icon">
                                            <div className="icon-img">
                                                <img src={verifiedIcon} alt="verified icon" />
                                            </div>
                                        </div>
                                    </IonCol>
                                    <IonCol size='12' sizeMd='8'>
                                        <div className="verified-title">Yehey!</div>
                                        { isGmail ? (
                                            <div className="verified-description">
                                                Your registration is almost done, You can now login using your google account!
                                            </div>
                                        ): (
                                            <div className="verified-description">
                                                Your registration is almost done, please check your email to complete the verification of your account!
                                            </div>
                                        )}
                                        
                                        
                                    </IonCol>
                                    <IonCol size='12' sizeMd='6' className='ion-marigin-top'>
                                        <IonButton expand='block' shape='round' size='large' color={'light'} href='/login'>
                                            <div className='got-it-button'>
                                                Got it
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                        </div> 
                    ) }
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Register
