import { IonCol, IonGrid, IonRow } from "@ionic/react"
import AboutFeatureImage from "../../assets/images/about-feature-image.png"

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


export const AboutSection: React.FC = () => {

    const about_section = useRef(null)
    const tl = useRef<any>()

    useEffect(() => {
        gsap.to("#image", {
            scrollTrigger: {
                trigger: ".container",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            yPercent: 50,
            opacity: 0,
        })


        // if(about_section.current) {
        //     if(!tl.current) {
        //         tl.current = gsap.timeline()
        //             .from(".row .header-title", {
        //                 scrollTrigger: {
        //                     trigger: ".row .header-title",
        //                     start: "top 80%",
        //                     end: "bottom bottom",
        //                 },
        //                 opacity: 0, duration: 1, y: 80
        //             })

        //     }
        // }
    }, [])

    return (
        <div id="about-section">
            <IonGrid className="container">
                <IonRow className="row" ref={about_section}>
                    <IonCol size="12" sizeMd="6" className="about-feature-image-wrap">
                        <img src={AboutFeatureImage}  alt="About Feature Image" id="image" />
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