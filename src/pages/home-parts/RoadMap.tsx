import { IonGrid, IonRow, IonCol } from "@ionic/react"

import RoadMapImage from "../../assets/images/roadmap-bg.png"

export const RoadMap: React.FC = () => {
    return (
        <div id="road-map">
            <IonGrid className="container">
                <IonRow>
                    <IonCol size="12">
                        <div className="title">
                            Road Map
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12" sizeSm="12" sizeMd="5" sizeLg="4">
                        <div className="content-title">2023</div>
                        <div className="content">
                            <div className="quarter">Q1</div>
                            <div className="quarter-details">Validity: Aimalls : Concept and Idea Research, Planning, and Design Proposal</div>
                        </div>
                        <div className="content">
                            <div className="quarter">Q2</div>
                            <div className="quarter-details">Community Building Social Media Marketing</div>
                        </div>
                        <div className="content">
                            <div className="quarter">Q3</div>
                            <div className="quarter-details">Design and Development of Aimalls Website Partnerships, Marketing Token Sale</div>
                        </div>
                        <div className="content">
                            <div className="quarter">Q4</div>
                            <div className="quarter-details">Exchange Listings, Token Audit (Safety) Marketing Development of Mobile app on iOS and Android AI Intergration</div>
                        </div>
                    </IonCol>
                    <IonCol size="12" sizeSm="12" sizeMd="5" sizeLg="4">
                        <div className="content-title">2024</div>
                        <div className="content">
                            <div className="quarter">Q1</div>
                            <div className="quarter-details">Testing AI Integration Quality Assurance</div>
                        </div>
                        <div className="content">
                            <div className="quarter">Q2</div>
                            <div className="quarter-details">Launching Marketing Partnership Scaling</div>
                        </div>
                        <div className="content">
                            <div className="quarter">Q3</div>
                            <div className="quarter-details">SEO optimization, digital advertising campaigns, Google ads, Youtube ads</div>
                        </div>
                        <div className="content">
                            <div className="quarter">Q4</div>
                            <div className="quarter-details">Maintenance and Support</div>
                        </div>
                    </IonCol>
                    <IonCol size="12">
                        <div className="image">
                            <img src={RoadMapImage} alt="" />
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}