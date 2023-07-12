import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon, IonItem, useIonAlert, useIonLoading } from '@ionic/react'
import React, { useMemo, useState } from 'react'
import '../../styles/auth/ChangePassword.scss'
import changePasswordIcon from '../../assets/images/change-password.png'
import errorIcon from '../../assets/images/error.png'
import { checkmark, checkmarkDone, chevronBack, lockClosed } from 'ionicons/icons'
import { processForgotPasswordChangeToAPI } from '../../requests/auth.request'

const ChangePassword: React.FC = () => {

    const [succeedChangePassword, setSucceedChangePassword] = useState<boolean>(false)
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const change_password_token = useMemo(() => {
        const url_string = window.location.href
        const url = new URL(url_string)
        const token = url.searchParams.get("token")
        if (token) {
            return token
        }
        return undefined
    }, [])

    const [presentAlert] = useIonAlert();
    const [present, dismiss] = useIonLoading();

    

    const handleNSaveNewPassword = async () => {
        if (newPassword !== confirmNewPassword) {
            presentAlert("Password did not match!");
            return
        }

        if (!change_password_token) {
            presentAlert("Cannot change password without token!, please check your email.");
            return
        }
        try {
            await present()
            const request = await processForgotPasswordChangeToAPI(newPassword, change_password_token)
            setSucceedChangePassword(true)
            presentAlert(request.data.message)
        } catch (error: any) {
            presentAlert(error.response.data.error)
        } finally {
            await dismiss();
        }
    }
    return (
        <div id='change-password'>
            <IonPage>
                <IonContent fullscreen>
                    {!!change_password_token && !succeedChangePassword ? (
                        <div id="change-password-content">
                            <IonGrid className='container'>
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size='12'>
                                        <div className="icon">
                                            <div className="icon-img">
                                                <img src={changePasswordIcon} alt="change password icon" height={50} width={50} />
                                            </div>
                                        </div>
                                    </IonCol>
                                    <IonCol size='12'>
                                        <div className="title">Set new Password</div>
                                    </IonCol>
                                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                                            <IonInput 
                                                label='New Password' 
                                                className='inputs' 
                                                labelPlacement="floating"
                                                placeholder='Enter New Password' 
                                                counter={true}
                                                value={newPassword}
                                                type='password'
                                                keyboard-attach
                                                onIonChange={(val) => setNewPassword(val.detail.value!)}
                                            />
                                            <IonInput 
                                                label='Confirm New Password' 
                                                className='inputs' 
                                                labelPlacement="floating"
                                                placeholder='Confirm New Password' 
                                                counter={true}
                                                value={confirmNewPassword}
                                                type='password'
                                                keyboard-attach
                                                onIonChange={(val) => setConfirmNewPassword(val.detail.value!)}
                                            />
                                    </IonCol>
                                </IonRow>
                                <IonRow className='ion-justify-content-center'>
                                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                                        <IonButton expand='block'shape='round' size='large' onClick={handleNSaveNewPassword}>Save</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    ) : succeedChangePassword ? (
                        <div id='change-password-invalid'>
                            <IonGrid className="container">
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size='12' style={{ display: 'flex', justifyContent: 'center', fontSize: '100px' }}>
                                        <IonIcon icon={ checkmarkDone } color='white'></IonIcon>
                                    </IonCol>
                                    <IonCol size='12'>
                                        <div className="error-title">Change Password Success!</div>
                                        <div className="error-description">
                                            You have changed your password successfully!, Please secure your password all the time and don't let anyone know!.
                                        </div>
                                    </IonCol>
                                    <IonCol size='12' sizeMd='6'>
                                        <IonButton expand='full' shape='round' routerLink='/login' size='large'>
                                            <IonIcon slot='start' icon={ chevronBack }></IonIcon>
                                            Back to Login
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    ) : (
                        <div id='change-password-invalid'>
                            <IonGrid className="container">
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size='12'>
                                        <div className="error-icon">
                                            <div className="icon-img">
                                                <img src={errorIcon} alt="change password icon" height={50} width={50} />
                                            </div>
                                        </div>
                                    </IonCol>
                                    <IonCol size='12'>
                                        <div className="error-title">Error!</div>
                                        <div className="error-description">
                                            Invalid Request, Please check your email and click the correct link provided for changing your password.
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    ) }
                </IonContent>
            </IonPage>
        </div>
    )
}

export default ChangePassword;
