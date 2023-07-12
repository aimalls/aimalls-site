import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon, IonItem } from '@ionic/react'
import React, { useState } from 'react'
import '../../styles/auth/ChangePassword.scss'
import changePasswordIcon from '../../assets/images/change-password.png'
import errorIcon from '../../assets/images/error.png'
import { lockClosed } from 'ionicons/icons'

const ChangePassword: React.FC = () => {

    const [succeedChangePassword, setSucceedChangePassword] = useState<boolean>(true)
    const [newPassword, setNewPassword] = useState("")

    const handleNSaveNewPassword = () => {

    }
    return (
        <div id='change-password'>
            <IonPage>
                <IonContent fullscreen>
                    {succeedChangePassword ? (
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
                                        {/* </IonItem> */}
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
                                    <IonCol size='12'>
                                        <div className="error-title">Error!</div>
                                        <div className="error-description">
                                            Something's wrong with your request.
                                        </div>
                                    </IonCol>
                                    <IonCol size='12' sizeSm='6' sizeMd='4'>
                                        <IonButton expand='block' size='large' href='/forgot-password' shape='round' color={'light'}>
                                            Retry
                                        </IonButton>
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
