import { IonCol, IonGrid, IonRow } from "@ionic/react"

import AITToken from "../../assets/images/ait-coin.png"

export const TokenUtilitySection: React.FC = () => {
    return (
        <div id="token-utility-section">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12" sizeMd="5" className="token-utility-feature-image-wrap">
                        <img src={AITToken} alt="AIT Token" />
                    </IonCol>
                    <IonCol size="12" sizeMd="5" class="token-utility-section-content-wrap">
                        <div className="header-title">
                            <span>$AIT</span> Token Utility
                        </div>
                        <div className="content">
                            <p>AIT is the utility of our Global Marketplace powered by AI.</p>

                            <p>With AIT you can buy sponsored slots to promote your store and products in our marketplace.</p>

                            <p>Means of accessing exclusive content or products on the app, offering added value for users who hold the token.</p>

                            <p>Rewards or incentive for users who make purchases or complete certain actions on the app.</p>

                            <p>Payment method for purchases on the app/platform, offering an alternative to traditional payment methods and providing greater security and anonymity for users.</p>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}