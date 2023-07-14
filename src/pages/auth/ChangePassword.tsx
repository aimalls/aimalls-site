import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon, IonItem, useIonAlert, useIonLoading } from '@ionic/react'
import React, { useMemo, useState } from 'react'
import '../../styles/auth/ChangePassword.scss'
import changePasswordIcon from '../../assets/images/change-password.png'
import errorIcon from '../../assets/images/error.png'
import { lockClosed } from 'ionicons/icons'
import { processForgotPasswordChangeToAPI } from '../../requests/auth.request'

const ChangePassword: React.FC = () => {

    const [succeedChangePassword, setSucceedChangePassword] = useState<boolean>(true)
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
                    {!!change_password_token ? (
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
                                        {/* <IonItem fill='outline'>
                                            <IonIcon icon={lockClosed}></IonIcon> */}
                                            
                                        <IonItem  className="inputs ion-margin-bottom">
                                            <IonIcon icon={lockClosed} color='primary' size='large' slot='end'></IonIcon>
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
                                        </IonItem>
                                        
                                        <IonItem  className="inputs ion-margin-bottom">
                                            <IonIcon icon={lockClosed} color='primary' size='large' slot='end'></IonIcon>
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
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                                <IonRow className='ion-justify-content-center'>
                                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                                        <IonButton expand='block'shape='round' size='large' onClick={handleNSaveNewPassword}>Save</IonButton>
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
                                    <IonCol size='12' sizeMd='8'>
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
