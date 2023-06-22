import { IonCol, IonGrid, IonRow } from "@ionic/react"

import TokenomicsBG from "../../assets/images/tokenomics.png"
import TokenomicsBGPlaceholder from "../../assets/images/tokenomics-placeholder.png"
import { useProgressiveImage } from "../../hooks/ProgressiveImage";

export const TokenomicsSection: React.FC = () => {

    const loaded_tokenomics = useProgressiveImage(TokenomicsBG);

    return (
        <div id="tokenomics-section">
            <IonGrid className="container">
                <IonRow>
                    <IonCol size="12">
                        <div className="title">
                            Tokenomics
                        </div>
                    </IonCol>
                    <IonCol size="12">
                        <img src={loaded_tokenomics || TokenomicsBGPlaceholder} alt="Tokenomics" />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}