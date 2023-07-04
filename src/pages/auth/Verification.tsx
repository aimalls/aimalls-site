import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React, { useEffect, useRef, useState } from 'react'
import '../../styles/auth/Verification.scss'
import verifiedIcon from '../../assets/images/verified-icon.png'
import { VerifyRegistration } from '../../requests/auth.request'

const Verification: React.FC<{navigation: any}> = ({navigation}) => {

    const [isActivated, setIsActivated] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const processRegistrationVerification = async (verificationLink: string) => {
        try {
            setIsLoading(true)
            const registrationVerification = await VerifyRegistration(verificationLink)
            // console.log(registrationVerification)
            setIsActivated(true)
        } catch (error: any) {
            alert(error.response.data.error)
            // alert(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
       
        const url_string = window.location.href
        const url = new URL(url_string)
        const verification_link = url.searchParams.get("c")
        processRegistrationVerification(verification_link!)
       
    }, [])

    return (
        <div id="verification">
            <IonPage>
                <IonContent>
                    <div id="verification-content">
                        <IonGrid full-screen>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size='12'>
                                    <div className="icon">
                                        <div className="icon-img">
                                            <img src={verifiedIcon} alt="Verified Icon" />
                                        </div>
                                    </div>
                                </IonCol>
                                { isLoading ? (
                                    <>
                                        <IonCol size='12' >
                                            <div className="title">
                                                Activating Account
                                            </div>
                                            <div className="description">
                                                Please wait while we activate your account!
                                            </div>
                                        </IonCol>
                                    </>
                                ): (
                                    <>
                                    {(!isLoading && !isActivated) ? (
                                        <>
                                            <IonCol size='12' >
                                            <div className="title">
                                                
                                                Activation Failed!
                                            </div>
                                            <div className="description">
                                                Your account was not successfully activated, please check the link sent to your email.
                                            </div>
                                        </IonCol>
                                        </>
                                    ) : (
                                        <>
                                            <IonCol size='12' >
                                                <div className="title">
                                                    Account Activated
                                                </div>
                                                <div className="description">
                                                    Thank you, your email has been verified. Your account is now active. <br />
                                                    Please use the link below to login to your account.
                                                </div>
                                            </IonCol>
                                            <IonCol size='12' sizeMd='4' className='ion-margin-top'>
                                                <IonButton expand='block' size='large' href='/login' shape='round' color={'light'}>
                                                    <div className='login-text'>Login to your Account</div>
                                                </IonButton>
                                            </IonCol>
                                        </>
                                    )}
                                    </>
                                )}
                                
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Verification
