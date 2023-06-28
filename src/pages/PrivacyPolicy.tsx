import { IonGrid, IonRow, IonCol, IonContent, IonPage } from '@ionic/react'
import React from 'react'

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
                                    <em>This Privacy Policy was last revised on 28 June, 2023.</em>
                                </div>
                                <div className='description'>
                                    At Aimalls, we value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website, mobile application, and any related services (collectively referred to as "Services"). By using our Services, you consent to the practices described in this policy.
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">1. Information We Collect</div>
                                    <div className="content-sub-title">
                                        1.1 Personal Information
                                    </div>
                                    <div className="content-description">
                                        We may collect personal information that you provide directly to us when you use our Services. This may include your name, email address, postal address, phone number, and other information that can identify you personally.
                                    </div>
                                    <div className="content-sub-title">
                                        1.2 Usage Information
                                    </div>
                                    <div className="content-description">
                                        We automatically collect certain information about your use of our Services, including your IP address, browser type, operating system, device information, pages visited, and the dates and times of your interactions with our Services.
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
                                        We use the information we collect to provide and improve our Services, customize your user experience, communicate with you, and fulfill your requests. This includes processing transactions, sending notifications, and responding to your inquiries.
                                    </div>
                                    <div className="content-sub-title">
                                        2.2 Marketing and Promotions
                                    </div>
                                    <div className="content-description">
                                        With your consent, we may use your contact information to send you promotional materials, newsletters, and other marketing communications. You can opt-out of receiving these communications at any time by following the instructions provided in the communication or contacting us directly.
                                    </div>
                                    <div className="content-sub-title">
                                        2.3 Legal Compliance
                                    </div>
                                    <div className="content-description">
                                        We may use your information to comply with applicable laws, regulations, legal processes, and enforce our terms of service or other agreements.
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
                                        We may share your personal information with trusted third-party service providers who assist us in operating our business and delivering our Services. These providers are obligated to protect your information and only use it for the purposes we specify.
                                    </div>
                                    <div className="content-sub-title">
                                        3.2 Business Transfers
                                    </div>
                                    <div className="content-description">
                                        If Aimalls undergoes a merger, acquisition, or sale of all or a portion of its assets, your personal information may be transferred to the acquiring party. We will notify you via email and/or prominent notice on our website of any change in ownership or the use of your personal information.
                                    </div>
                                    <div className="content-sub-title">
                                        3.3 Legal Requirements
                                    </div>
                                    <div className="content-description">
                                        We may disclose your information if required to do so by law or in response to a valid request from government authorities, such as a court order or subpoena.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        4. Data Security
                                    </div>
                                    <div className="content-description">
                                        We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        5. Children's Privacy
                                    </div>
                                    <div className="content-description">
                                        Our Services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 16, we will promptly delete it from our records.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        6. Your Rights and Choices
                                    </div>
                                    <div className="content-description">
                                        You have the right to access, update, correct, and delete your personal information in accordance with applicable laws. You may also request the restriction or cessation of the processing of your personal information. To exercise these rights or for any privacy-related inquiries, please contact us using the information provided at the end of this policy.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">
                                        7. Changes to this Privacy Policy
                                    </div>
                                    <div className="content-description">
                                        We reserve the right to modify this Privacy Policy at any time. If we make material changes, we will notify you by posting the updated
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
