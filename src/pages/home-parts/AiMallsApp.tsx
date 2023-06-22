import { IonCol, IonGrid, IonRow } from "@ionic/react"

import mockup from "../../assets/images/mockup.png"

export const AiMallsApp: React.FC = () => {
    return (
        <div id="aimalls-app">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol size="12" sizeSm="12" sizeMd="12">
                        <div className="title">
                            AiMalls App
                        </div>
                        <div className="sub-title">Features</div>
                        <div className="content">
                            <ul>
                                <li>Intelligent algorithms to provide personalized shopping experiences</li>
                                <li>User friendly</li>
                                <li>Shopping made easier and efficient</li>
                                <li>Suggest what the customer wants</li>
                                <li>Give insights what products are best to buy/sell</li>
                                <li>Safe and secure platform</li>
                                <li>Transparency and clarity in transactions</li>
                                <li>Good customer service</li>
                            </ul>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}