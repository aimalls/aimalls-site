import { IonCol, IonGrid, IonRow } from "@ionic/react"

import TokenomicsBG from "../../assets/images/tokenomics.png"

export const TokenomicsSection: React.FC = () => {
    return (
        <div id="tokenomics-section">
            <IonGrid className="container">
                <IonRow>
                    <IonCol size="12">
                        <img src={TokenomicsBG} alt="Tokenomics" />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}