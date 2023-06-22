import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react"

import heroBg from "../../assets/images/hero-bg.png"
import heroBgPlaceholder from "../../assets/images/hero-bg-lazy.png"
import { useProgressiveImage } from "../../hooks/ProgressiveImage"
import { SocialButtons } from "../../components/SocialButtons"
import { useScreen } from "../../hooks/ScreenSize"



export const HeroSection = () => {

    const loaded_bg = useProgressiveImage(heroBg);
    const {screenWidth} = useScreen();

    return (
        <div id="hero-section" style={{ backgroundImage: `url(${ loaded_bg || heroBgPlaceholder })` }}>
            <div className="social-buttons ion-hide-md-down">
                <SocialButtons />
            </div>
            <IonGrid className="container" style={{ alignSelf: "center" }}>
                <IonRow className={screenWidth <= 768 ? `ion-justify-content-center`: ''}>
                    <IonCol size="10" sizeMd="5" sizeLg="4" pushMd="1">
                        <div className="hero-tagline">Experience the <span>Future of Shopping</span> with <span>AI</span></div>
                        <div className="hero-caption">It is an AI-powered online mall, a platform and an app that uses intelligent algorithms.</div>
                        <div className="hero-action-buttons">
                            <IonButton color="tertiary" shape="round">Get Started</IonButton>
                            <IonButton color="tertiary" shape="round">Whitepaper</IonButton>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-hide-md-up">
                    <IonCol size="10" pushMd="1" className="hero-social-buttons">
                        <SocialButtons />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}