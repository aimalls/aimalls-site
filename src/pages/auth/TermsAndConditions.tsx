import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'
import React from 'react'
import '../../styles/auth/TermsAndCondition.scss'

const TermsAndConditions: React.FC = () => {
    return (
        <div id='terms-and-conditions'>
            <IonPage>
                <IonContent>
                    <IonGrid className='container'>
                        <IonRow className='ion-justify-content-center'>
                            <IonCol size='12' sizeMd='8'>
                                <div className="title">Terms And Conditions</div>
                                <div className="description">
                                    These Terms and Conditions ("Agreement") govern your access to and use of the Aimalls website, mobile application, and any related services (collectively referred to as the "Services"). By accessing or using the Services, you agree to be bound by this Agreement. If you do not agree with any part of this Agreement, you must not use the Services.
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">1. Use of Services</div>
                                    <div className="content-sub-title">
                                        1.1 Eligibility
                                    </div>
                                    <div className="content-description">
                                        You must be at least 18 years old and have the legal capacity to enter into a contract to use the Services. By using the Services, you represent and warrant that you meet these eligibility requirements.
                                    </div>
                                    <div className="content-sub-title">
                                        1.2 Account Registration
                                    </div>
                                    <div className="content-description">
                                        To access certain features or areas of the Services, you may be required to create an account. You are responsible for providing accurate and complete information during the registration process and maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.
                                    </div>
                                    <div className="content-sub-title">
                                        1.3 Prohibited Conduct
                                    </div>
                                    <div className="content-description">
                                        <div className='ion-padding-bottom'>You agree not to engage in any of the following activities in connection with the Services:</div>
                                        <div>a. Violating any applicable laws, regulations, or third-party rights.</div>
                                        <div>b. Using the Services for any unlawful, fraudulent, or unauthorized purpose.</div>
                                        <div>c. Interfering with or disrupting the integrity or performance of the Services.</div>
                                        <div>d. Uploading or transmitting viruses, malware, or other harmful content.</div>
                                        <div>e. Collecting or harvesting any information from the Services without our prior written consent.</div>
                                        <div>f. Impersonating any person or entity or falsely representing your affiliation with any person or entity.</div>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">2. Intellectual Property Rights</div>
                                    <div className="content-sub-title">
                                        2.1 Ownership
                                    </div>
                                    <div className="content-description">
                                        The Services, including all content, features, and functionality, are owned by Aimalls or its licensors and are protected by intellectual property laws. You acknowledge and agree that all rights, title, and interest in and to the Services belong to Aimalls.
                                    </div>
                                    <div className="content-sub-title">
                                        2.2 Limited License
                                    </div>
                                    <div className="content-description">
                                        Subject to your compliance with this Agreement, Aimalls grants you a limited, non-exclusive, non-transferable license to access and use the Services for your personal, non-commercial use. You may not modify, reproduce, distribute, or create derivative works based on the Services, in whole or in part, unless expressly authorized by Aimalls.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">3. User Content</div>
                                    <div className="content-sub-title">3.1 User Responsibility</div>
                                    <div className="content-description">
                                        You are solely responsible for any content you upload, post, transmit, or otherwise make available through the Services ("User Content"). You represent and warrant that you have all necessary rights to your User Content and that it does not infringe upon the rights of any third party.
                                    </div>
                                    <div className="content-sub-title">3.2 License Grant</div>
                                    <div className="content-description">
                                        By submitting User Content, you grant Aimalls a worldwide, royalty-free, sublicensable, transferable license to use, reproduce, distribute, modify, adapt, display, and perform the User Content in connection with providing the Services.
                                    </div>
                                    <div className="content-sub-title">3.3 Monitoring and Removal</div>
                                    <div className="content-description">
                                        Aimalls reserves the right to monitor User Content and remove any content that violates this Agreement or is deemed inappropriate, in its sole discretion. However, Aimalls does not guarantee the monitoring or removal of all User Content.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">4. Disclaimer of Warranties</div>
                                    <div className="content-sub-title">4.1 As-Is Basis</div>
                                    <div className="content-description">
                                        The Services are provided on an "as-is" and "as available" basis, without warranties of any kind, whether express or implied. Aimalls disclaims all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                                    </div>
                                    <div className="content-sub-title">4.2 Accuracy and Completeness</div>
                                    <div className="content-description">
                                        While Aimalls strives to provide accurate and up-to-date information, we do not warrant or guarantee the accuracy, reliability, completeness, or timeliness of any information on the Services. You acknowledge that any reliance on such information is at your own risk.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">5. Limitation of Liability</div>
                                    <div className="content-sub-title">5.1 Exclusion of Damages</div>
                                    <div className="content-description">
                                        To the maximum extent permitted by applicable law, Aimalls and its affiliates, officers, directors, employees, agents, and partners shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to, loss of profits, data, or use, arising out of or in connection with the Services.
                                    </div>
                                    <div className="content-sub-title">5.2 Cap on Liability</div>
                                    <div className="content-description">
                                        In no event shall Aimalls' total liability to you for all claims arising out of or in connection with this Agreement exceed the amount paid by you, if any, for accessing or using the Services during the six (6) months preceding the claim.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">6. Indemnification</div>
                                    <div className="content-description">
                                        You agree to indemnify and hold Aimalls and its affiliates, officers, directors, employees, agents, and partners harmless from any claim or demand, including reasonable attorneys' fees, arising out of or in connection with your use of the Services, your User Content, or your violation of this Agreement or any applicable laws.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">7. Modification and Termination</div>
                                    <div className="content-description">
                                        Aimalls reserves the right to modify or terminate the Services or this Agreement at any time, for any reason, without prior notice. You agree that Aimalls shall not be liable to you or any third party for any modification or termination of the Services or this Agreement.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">8. Governing Law and Dispute Resolution</div>
                                    <div className="content-description">
                                        This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or in connection with this Agreement shall be resolved through binding arbitration in accordance with the rules of [Arbitration Institution], held in [Jurisdiction]. The language of the arbitration shall be [Language]. The decision of the arbitrator shall be final and binding on the parties.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">9. Severability</div>
                                    <div className="content-description">
                                        If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that most closely reflects the intent of the original provision.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">10. Entire Agreement</div>
                                    <div className="content-description">
                                        This Agreement constitutes the entire agreement between you and Aimalls regarding the Services and supersedes any prior or contemporaneous agreements, understandings, or representations, whether oral or written.
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size='12' sizeMd='8'>
                                <div className="content">
                                    <div className="content-title">11. Contact Information</div>
                                    <div className="content-description">
                                        If you have any questions or concerns regarding this Agreement, please contact us at <a href="/public/terms-and-conditions" style={{color: "var(--ion-color-tertiary)"}}>support@aimalls.app</a>.
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

export default TermsAndConditions
