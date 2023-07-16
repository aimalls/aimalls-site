import React, { useEffect, useState } from 'react'
import "../../styles/auth/Login.scss"
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonButton, IonRouterLink, useIonAlert, IonIcon, useIonLoading } from '@ionic/react'
import Logo from '../../assets/images/logo-full.png'

import gmailIcon from '../../assets/images/google.png'
import loginBg from '../../assets/images/auth-bg4.jpg'
import loginBgPlaceholder from '../../assets/images/auth-bg4-placeholder.jpg'

import { GoogleLogin, Login as LoginRequest } from '../../requests/auth.request'
import getGoogleAuthURL from '../../helpers/googleAuth'
import { useLocalStorage } from 'usehooks-ts'
import { AxiosResponse } from 'axios'
import { useHistory } from 'react-router'
import { useProgressiveImage } from '../../hooks/ProgressiveImage'
import { lockClosed, mail } from 'ionicons/icons'

const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authToken, setAuthToken] = useLocalStorage<string | AxiosResponse>('authToken', '')
    
    const loaded_bg = useProgressiveImage(loginBg);

    const history = useHistory();

    const [presentAlert] = useIonAlert();
    const [present, dismiss] = useIonLoading();

    const processLogin = async (code?: string) => {
        try {
            await present();
            if (code) {
                await GoogleLogin(code)
            } else {
                const token = await LoginRequest(email, password)
                if (!!token) {
                    setAuthToken(token.data.authToken)
                    history.push("/dashboard")
                }
            }
        } catch (error: any) {
            presentAlert(error.response.data.error)
        } finally {
            await dismiss();
        }
    }

    var url_string = window.location.href
    var url = new URL(url_string)
    var code = url.searchParams.get("code") 
    var authParam = url.searchParams.get("token");
    var successParam = url.searchParams.get("success");

    if (code !== null) {
        processLogin(code)
    }

    useEffect(() => {
        if (!!authParam && !!successParam) {
            setAuthToken(authParam);
            history.push("/dashboard")
        }
    }, [])

 
    return (
        <div id='login'>
            <IonPage>
                <IonContent>
                    <div className="login-content">
                        <IonGrid className='ion-no-padding'>
                            <IonRow className='ion-justify-content-between'>
                                <IonCol size='12' sizeSm='12' sizeMd='8'>
                                    <div className="login-column" style={{ backgroundImage: `url(${ loaded_bg || loginBgPlaceholder })` }}>
                                        <IonRow className='ion-justify-content-center ion-padding'>
                                            <IonCol size='12'>
                                                <div className='logo-mobile'>
                                                    <IonRouterLink routerLink='/'>
                                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "30px" }}>
                                                            <img src={ Logo } alt='aimalls' />
                                                        </div>
                                                    </IonRouterLink>
                                                </div>
                                                <div className="login-title" style={{ marginBottom: '30px' }}>Login to your Account</div>
                                            </IonCol>
                                            <IonCol size='12' sizeSm='9' sizeMd='7'>
                                                <IonButton expand='block' size='large' color={'light'}  href={getGoogleAuthURL(import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URL)}>
                                                    <img src={gmailIcon} alt="Google Icon" height={20} />
                                                    <div className='sign-up-title'>Sign In with Google</div>
                                                </IonButton>
                                                <div className='line-break'>or</div>
                                            </IonCol>
                                            <IonCol size='12' sizeSm='9' sizeMd='7' className='ion-padding-top'>
                                                <div>
                                                    <IonItem className=' inputs ion-margin-bottom'>
                                                        <IonIcon icon={mail} color='light' slot='end' size='large'></IonIcon>
                                                        <IonInput 
                                                            placeholder='Enter your Email'
                                                            aria-label='Email'
                                                            label-placement='floating'
                                                            className='inputs-content'
                                                            label='Email'
                                                            required
                                                            value={email}
                                                            onIonChange={(val) => setEmail(val.detail.value!)}
                                                        />
                                                    </IonItem>
                                                </div>
                                                <div>
                                                    <IonItem  className="inputs">
                                                        <IonIcon icon={lockClosed} color='light' slot='end' size='large'></IonIcon>
                                                        <IonInput
                                                            value={password}
                                                            labelPlacement='floating'
                                                            className='inputs-content'
                                                            label='Password'
                                                            aria-label='Password'
                                                            placeholder='Enter your Password'
                                                            type='password'
                                                            required
                                                            onIonChange={(val) => setPassword(val.detail.value!)}
                                                        >
                                                            
                                                        </IonInput>
                                                    </IonItem>
                                                </div>
                                                <div className="forgot-password">
                                                    <IonButton href='/forgot-password' fill='clear' style={{textTransform: "capitalize", fontFamily: "WorkSans-Regular"}}>
                                                        <div className='forgot-password-title'>forgot password?</div>
                                                    </IonButton>
                                                </div>
                                                <IonButton 
                                                    expand='block' 
                                                    shape='round' 
                                                    size='large' 
                                                    style={{textTransform: "capitalize", fontFamily: "WorkSans-Regular"}} 
                                                    onClick={() => processLogin()}
                                                >
                                                    Login
                                                </IonButton>
                                                <div className='register-button-mobile'>
                                                    <div className="register-button-mobile-content">
                                                        <div>Don't Have an Account?</div>
                                                        <IonButton 
                                                            routerLink='/register' 
                                                            size='small' 
                                                            style={{ textTransform: "capitalize", fontSize: "17px", fontFamily: "WorkSans-Regular" }} 
                                                            fill='clear'
                                                        >
                                                            Register
                                                        </IonButton>
                                                    </div>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                </IonCol>
                                <IonCol size='12' sizeSm='6' sizeMd='4' >
                                    <div className="register-column">
                                        <IonRow className='ion-justify-content-center'>
                                            <IonCol size='12'>
                                                <IonRouterLink routerLink='/'>
                                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "30px" }}>
                                                        <img src={ Logo } alt='aimalls' />
                                                    </div>
                                                </IonRouterLink>
                                                <div className="register-title">New Here?</div>
                                                <div className="register-description">
                                                    Welcome to the future of shopping, where AI takes you on a personalized retail journey like never before. 
                                                    Sign up today and discover the extraordinary convenience, tailored experiences, 
                                                    and endless possibilities of AI malls.
                                                </div>
                                            </IonCol>
                                            <IonCol size='12' sizeMd='8'>
                                                <IonButton size='large' expand='block' shape='round' routerLink='/register' color={'light'}>
                                                    <div className="register-btn-txt">
                                                        Register
                                                    </div>
                                                </IonButton>
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
