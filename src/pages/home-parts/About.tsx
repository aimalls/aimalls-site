import { IonCol, IonGrid, IonRow } from "@ionic/react"
import AboutFeatureImage from "../../assets/images/about-feature-image.png"

export const AboutSection: React.FC = () => {
    return (
        <div id="about-section">
            <IonGrid className="container">
                <IonRow>
                    <IonCol size="12" sizeMd="6" className="about-feature-image-wrap">
                        <img src={AboutFeatureImage} alt="About Feature Image" />
                    </IonCol>
                    <IonCol size="12" sizeMd="6" class="about-section-content-wrap">
                        <div className="header-title">
                            About <span>AiMalls</span>
                        </div>
                        <div className="content">
                            <ul>
                                <li>AIMalls is an AI-powered online mall or store, a platform and an app that uses intelligent algorithms to provide personalized shopping experiences.</li>
                                <li>It can recognize a consumer's preferences and past purchase history, enabling it to suggest products that are more likely to appeal to them.</li>
                                <li>The AI technology can also analyze consumer behavior and provide insights into how to optimize the user experience. This innovative technology aims to make shopping easier, more efficient, and tailored to the individual customer.</li>
                            </ul>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}