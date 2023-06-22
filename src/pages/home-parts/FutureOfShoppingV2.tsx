import { IonCol, IonGrid, IonRow } from "@ionic/react"

export const FutureOfShoppingV2Section: React.FC = () => {
    return (
        <div id="future-of-shopping-v2">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12" sizeSm="10" sizeMd="8" sizeLg="7" className="section-title">
                        The <span>Future of Shopping</span> is Here
                    </IonCol>
                    <IonCol size="12" sizeSm="10" sizeMd="8" sizeLg="7" className="section-sub-header">
                    AIMalls is the revolutionary e-commerce platform that helps merchants reach their customers more effectively. while reducing operational cost and improving security.
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}