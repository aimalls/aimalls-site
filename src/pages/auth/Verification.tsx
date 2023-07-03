import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React, { useEffect, useRef } from 'react'
import '../../styles/auth/Verification.scss'
import verifiedIcon from '../../assets/images/verified-icon.png'

const Verification: React.FC<{navigation: any}> = ({navigation}) => {

    const dataFetch = useRef(false)

    useEffect(() => {
        const VerificationRegistration = async () => {
            const url_string = window.location.href
            const url = new URL(url_string)
            const verification_link = url.searchParams.get("c")

            try {
            } catch (error: any) {
                alert(error.message)
            }
        }
        if(dataFetch.current) {
            VerificationRegistration()
            dataFetch.current = true
        }
    }, [navigation])

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
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Verification
