import { IonGrid, IonRow, IonCol, IonContent, IonPage } from '@ionic/react'
import React from 'react'

import '../../styles/auth/PrivacyPolicy.scss'

const PrivacyPolicy: React.FC = () => {
    return (
        <div id='privacy-policy'>
            <IonPage>
                <IonContent>
                    <IonGrid className="container">
                        <IonRow className='ion-justify-content-center'>
                            <IonCol size='12' sizeMd='8'>
                                <div className='title'>Privacy Policy</div>
                                <div className="revised-date">
                                    <em>This Privacy Policy was last revised on 16 August, 2023.</em>
                                </div>
                                <div className='description'>
                                    At Aimalls, we value your privacy and are committed to protecting it. This Privacy Policy outlines how we access, use, store, and share Google user data in connection with our website, mobile application, and other related services (collectively referred to as "Services"). By using our Services and agreeing to this Privacy Policy, you consent to our practices described herein.
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">1. Information We Collect</div>
                                    <div className="content-sub-title">
                                        1.1 Personal Information
                                    </div>
                                    <div className="content-description">
                                        We may collect information that you provide to us when interacting with our Services, including but not limited to your name, email address, postal address, and phone number.
                                    </div>
                                    <div className="content-sub-title">
                                        1.2 Google User Data
                                    </div>
                                    <div className="content-description">
                                        When you authorize our app through Google OAuth, we may access, use, and store the Google user data described in the OAuth consent screen. This may include data related to your Google profile, email, and other information that is necessary for the provision of our Services.
                                    </div>

                                    <div className="content-sub-title">
                                        1.3 Usage Information
                                    </div>
                                    <div className="content-description">
                                        We automatically collect information related to your use of our Services, such as IP address, browser type, and other related data.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        2. How We Use Your Information
                                    </div>
                                    <div className="content-sub-title">
                                        2.1 Provide and Improve Services
                                    </div>
                                    <div className="content-description">
                                        We use the information we collect to offer, maintain, and enhance our Services, including processing transactions, responding to inquiries, and customizing your experience.
                                    </div>
                                    <div className="content-sub-title">
                                        2.2 Marketing and Promotions
                                    </div>
                                    <div className="content-description">
                                        With your consent, we may send promotional materials and other marketing-related communications. You may opt-out at any time.
                                    </div>
                                    <div className="content-sub-title">
                                        2.3 Legal Compliance
                                    </div>
                                    <div className="content-description">
                                        We may use your information to comply with legal obligations and to enforce our terms and agreements.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        3. Information Sharing and Disclosure
                                    </div>
                                    <div className="content-sub-title">
                                        3.1 Third-Party Service Providers
                                    </div>
                                    <div className="content-description">
                                        We may share information with trusted third-party providers who assist us in providing our Services. Such providers are obligated to safeguard your information.
                                    </div>
                                    <div className="content-sub-title">
                                        3.2 Legal Requirements
                                    </div>
                                    <div className="content-description">
                                        We may disclose information if legally required to do so by authorities or court orders.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        4. Data Security
                                    </div>
                                    <div className="content-description">
                                        We implement industry-standard security measures to protect your information. While we strive to ensure security, we cannot guarantee absolute safety.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        5. Children's Privacy
                                    </div>
                                    <div className="content-description">
                                        Our Services are not designed for individuals under 16, and we do not knowingly collect personal information from children under 16.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        6. Your Rights
                                    </div>
                                    <div className="content-description">
                                        You may access, update, or delete your personal information according to applicable laws. Please contact us to exercise these rights.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        7. Links to Google API User Data Policy
                                    </div>
                                    <div className="content-description">
                                        This Privacy Policy complies with the Google API Service: User Data Policy, which governs how we access, use, store, and share Google user data. The privacy policy is linked to the OAuth Consent Screen on the Google API Console and can be accessed directly from our app’s home page.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        8. Changes to this Privacy Policy
                                    </div>
                                    <div className="content-description">
                                        We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy.
                                    </div>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default PrivacyPolicy
