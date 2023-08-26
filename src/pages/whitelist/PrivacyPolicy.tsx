import { IonGrid, IonRow, IonCol, IonContent, IonPage } from '@ionic/react'
import React from 'react'

import '../../styles/auth/PrivacyPolicy.scss'

const PrivacyPolicy: React.FC = () => {
    return (
        
        <IonPage id='privacy-policy'>
            <IonContent>
                <IonGrid className="container">
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8'>
                            <div className='title'>Whitelist Privacy Policy</div>
                            <div className="revised-date">
                                <em>This Privacy Policy was last revised on 1 September, 2023.</em>
                            </div>
                            <div className='description'>
                                Thank you for your interest in participating in our whitelisting event. This Privacy Policy outlines how we collect, use, store, and protect your personal information in connection with the whitelisting event. Please read this policy carefully to understand our practices regarding your data.
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">1. Information We Collect</div>
                                <div className="content-sub-title">
                                    1.1 Contact Information
                                </div>
                                <div className="content-description">
                                This includes your name, email address, and other relevant contact details.
                                </div>
                                <div className="content-sub-title">
                                    1.2 Wallet Address
                                </div>
                                <div className="content-description">
                                    To facilitate the whitelisting process, we may collect your cryptocurrency wallet address.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    2. Use of Information
                                </div>
                                <div className="content-sub-title">
                                    2.1 Whitelisting Process
                                </div>
                                <div className="content-description">
                                    Your contact information and wallet address will be used to verify your eligibility for participation in the whitelisting event.
                                </div>
                                <div className="content-sub-title">
                                    2.2 Communication
                                </div>
                                <div className="content-description">
                                    We may use your email address to provide you with updates, information about the event, and related communications.
                                </div>
                                <div className="content-sub-title">
                                    2.3 Event-related Activities
                                </div>
                                <div className="content-description">
                                    If you are successfully whitelisted, we will use your wallet address for the distribution of tokens or other event-related activities.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    3. Data Security
                                </div>
                                <div className="content-description">
                                    We take appropriate technical and organizational measures to ensure the security of your personal information. However, please note that no data transmission over the internet is completely secure.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    4. Children's Privacy
                                </div>
                                <div className="content-description">
                                    Our Services are not designed for individuals under 16, and we do not knowingly collect personal information from children under 16.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    5. Data Sharing
                                </div>
                                <div className="content-sub-title">
                                    5.1 Service Providers
                                </div>
                                <div className="content-description">
                                    We may engage third-party service providers to assist with the whitelisting process, event management, and communication. These providers will have access to your information solely for these purposes.
                                </div>
                                <div className="content-sub-title">
                                    5.2 Legal Obligations
                                </div>
                                <div className="content-description">
                                We may disclose your information to comply with legal obligations, enforce our terms of service, or protect our rights and the rights of others.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    6. Your Rights
                                </div>
                                <div className="content-sub-title">
                                    6.1 Access
                                </div>
                                <div className="content-description">
                                You can request a copy of the personal information we hold about you.
                                </div>
                                <div className="content-sub-title">
                                    6.2 Correction
                                </div>
                                <div className="content-description">
                                    You can request corrections to any inaccuracies in your personal information.
                                </div>
                                <div className="content-sub-title">
                                    6.3 Withdrawal of Consent
                                </div>
                                <div className="content-description">
                                    You can withdraw your consent to the processing of your personal information at any time.
                                </div>
                                <div className="content-sub-title">
                                    6.4 Deletion
                                </div>
                                <div className="content-description">
                                    You can request the deletion of your personal information, subject to legal and contractual obligations.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    7. Contact Us
                                </div>
                                <div className="content-description">
                                    If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at support@aimalls.app
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size='12' sizeMd='8'>
                            <div className="content">
                                <div className="content-title">
                                    8. Changes to this Privacy Policy
                                </div>
                                <div className="content-description">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The most recent version will always be posted on our website.

                                    <br/><br />By participating in the whitelisting event, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                                </div>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default PrivacyPolicy
