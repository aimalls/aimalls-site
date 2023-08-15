import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react"

import heroBg from "../../assets/images/hero-bg.png"
import heroBgPlaceholder from "../../assets/images/hero-bg-lazy.png"
import { useProgressiveImage } from "../../hooks/ProgressiveImage"
import { SocialButtons } from "../../components/SocialButtons"
import { useScreen } from "../../hooks/ScreenSize"
import { useEffect, useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroSlider from "./HeroSlider"

gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {

    const loaded_bg = useProgressiveImage(heroBg);
    const { screenWidth } = useScreen();

    const hero = useRef(null);
    const tl = useRef<any>();

    useEffect(() => {
        if (hero.current) {
            if (!tl.current) {
                tl.current = gsap.timeline()
                    .from(" .hero-tagline", {
                        opacity: 0,
                        y: -80,
                        duration: 0.5
                    })
                    .from(" .hero-caption", {
                        opacity: 0,
                        y: 80,
                        duration: 0.5
                    })
                // .from(" .started-btn", {
                //     opacity: 0,
                //     x: -80,
                //     duration: 0.4
                // })

                // .from(" .whitepaper-btn", {
                //     opacity: 0,
                //     x: 80,
                //     duration: 0.4
                // })
            }
        }
    }, [])

    return (
        <div id="hero-section" ref={hero} style={{ backgroundImage: `url(${loaded_bg || heroBgPlaceholder})` }}>
            <div className="social-buttons ion-hide-md-down">
                <SocialButtons />
            </div>
            {/* <HeroSlider /> */}
            <IonGrid className="container" style={{ alignSelf: "center" }}>
                <IonRow className={screenWidth <= 768 ? `ion-justify-content-center` : 'ion-align-items-center'}>
                    <IonCol size="10" sizeMd="5" sizeLg="5" pushMd="1">
                        <div className="hero-tagline">Experience the <span>Future of Shopping </span> with <span>AI</span></div>
                        <div className="hero-caption">It is an AI-powered online mall, a platform and an app that uses intelligent algorithms.</div>
                        <div className="hero-action-buttons">
                            <IonButton color="primary" shape="round" href="#about-section">Get Started</IonButton>
                            <IonButton color="primary" shape="round" href="https://cdn.aimalls.app/whitepaper.pdf" target="_blank">Whitepaper</IonButton>
                        </div>
                    </IonCol>
                    <IonCol size="10" sizeMd="5" pushMd="1">
                        <iframe id="ytplayer" width="720" height="405"
                            style={{ aspectRatio: '16 / 9', width: '100%' }}
                            src="https://www.youtube.com/embed/6PxUtby8l8s?autoplay=1&controls=1"
                            frameBorder="0" allowFullScreen>
                        </iframe>
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