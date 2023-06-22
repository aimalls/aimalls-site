import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react"

import aim from '../../assets/images/aim.png'
import { useProgressiveImage } from "../../hooks/ProgressiveImage";

import TechnologyAndTargetMarketBG from "../../assets/images/bg-3.png"
import TechnologyAndTargetMarketBGPlaceholder from "../../assets/images/bg-3-placeholder.png"

export const TechnologyAndTargetMarket: React.FC = () => {

    const technologyAndTargetContent = [
        {
            icon: aim,
            content: "AiMalls incorporating AI technologies like personalized recommendations, chatbots, and image recognition. It offers a better user experience, lower fees for sellers, and unique AI-powered features."
        },
        {
            icon: aim,
            content: "Our target audience is broad, but we plan to focus on millennial and Gen Z shoppers who are tech-savvy and value convenience and personalization in their shopping experience."
        },
        {
            icon: aim,
            content: "AiMalls is to implement an AI powered verification process in place for sellers to ensure that only legitimate businesses or individuals are selling products on the platform. It also have a system for managing product listings to prevent duplicates or inaccurate listings."
        },
        {
            icon: aim,
            content: "AiMalls will use secure payment processing systems to handle transactions and implement SSL encryption to protect user data. We will also add options to shop and pay using cryptocurrency."
        },
        {
            icon: aim,
            content: "AiMalls will be using social media, influemcer marketing, and search engine optimization to attract and retain customers. It also offers incentives like loyalty programs and discounts to encourage repeat business."
        },
    ]

    
    const loaded_bg = useProgressiveImage(TechnologyAndTargetMarketBG);

    return (
        <div id="technology-and-target-market">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center" >
                    <IonCol size="11" sizeMd="10">
                        <div className="content" style={{ backgroundImage: `url(${ loaded_bg || TechnologyAndTargetMarketBGPlaceholder })` }}>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="12" sizeMd="8">
                                    <div className="content-title">
                                        <span>AiMalls Technology</span> & Target Market 
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonCol size="12" sizeSm="12" sizeMd="8" sizeLg="6">
                                    { technologyAndTargetContent.map((content, index) => (
                                        <div key={index}>
                                            <div  className="tech-and-target-market-content">

                                                <div className="icon">
                                                    <img src={content.icon} alt=""/>
                                                </div>
                                                <div className="details">
                                                    { content.content }
                                                </div>
                                            </div>
                                        </div>
                                    )) }
                                </IonCol>
                            </IonRow>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}