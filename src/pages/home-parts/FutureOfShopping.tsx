import { IonCol, IonGrid, IonRow } from "@ionic/react"
import { useProgressiveImage } from "../../hooks/ProgressiveImage";

import FutureOfShoppingBG from "../../assets/images/future-of-shopping-bg.png"
import FutureOfShoppingBGPlaceholder from "../../assets/images/future-of-shopping-bg-placeholder.png"

import secureFeature from "../../assets/images/secure.png"
import realTimeFeature from "../../assets/images/real-time.png"
import personalizedFeature from "../../assets/images/personalized.png"
import benefitFeature from "../../assets/images/benefit.png"

export const FutureOfShoppingSection: React.FC = () => {

    const loaded_bg = useProgressiveImage(FutureOfShoppingBG);

    return (
        <div id="future-of-shopping-section" style={{ backgroundImage: `url(${ loaded_bg || FutureOfShoppingBGPlaceholder })` }}>
            <IonGrid className="container">
                <IonRow className="ion-justify-content-between">
                    <IonCol size="12" sizeMd="12" sizeLg="5" style={{ padding: "0px 30px" }}>
                        <div className="header-title">
                            Welcome to the <span>future of shopping</span>
                        </div>
                        <div className="content">
                            AiMalls is an AI-powered online mall that offers a personalized, secure and hassle-free shopping experience. With intelligent algorithms, you get faster and more accurate search results and product recommendations, plus pricing strategy and 24/7 customer service for both customers and merchants.
                        </div>
                    </IonCol>
                    <IonCol size="12" sizeMd="12" sizeLg="7">
                        <IonRow className="features">
                            <IonCol size="12" sizeSm="6">
                                <div className="thumb">
                                    <img src={ personalizedFeature } alt="Personalized" />
                                </div>
                                <div className="title">
                                    Experience personalized shopping
                                </div>
                                <div className="content">
                                    AiMalls uses intelligent algorithms to provide you with a personalized shopping experience. Get tailored product recommendations, faster search results, and more accurate pricing strategies that are designed to help you save time and money.
                                </div>
                            </IonCol>
                            <IonCol size="12" sizeSm="6">
                                <div className="thumb">
                                    <img src={ secureFeature } alt="Secure" />
                                </div>
                                <div className="title">
                                    Secure your purchases
                                </div>
                                <div className="content">
                                    We use advanced security measures to detect fraudulent activity and protect your data. AiMalls also offers efficient inventory management so you can rest assured that your purchases are safe.
                                </div>
                            </IonCol>
                            <IonCol size="12" sizeSm="6">
                                <div className="thumb">
                                    <img src={ realTimeFeature } alt="Real-time" />
                                </div>
                                <div className="title">
                                    Gain real-time insights
                                </div>
                                <div className="content">
                                    Our real-time analytics insights give you the power to make informed decisions quickly. You'll have access to data-drived insights so you can take advantage of every opportunity that comes your way.
                                </div>
                            </IonCol>
                            <IonCol size="12" sizeSm="6">
                                <div className="thumb">
                                    <img src={ benefitFeature } alt="Benefit" />
                                </div>
                                <div className="title">
                                    Benefit from our platform
                                </div>
                                <div className="content">
                                    AiMalls offers benefits for both customers and merchants. Customers enjoy a secure online shopping experience while merchants benefit from access to powerful tools like market segmentation, pricing optimization, customer data tracking, customer loyalty programs.
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}