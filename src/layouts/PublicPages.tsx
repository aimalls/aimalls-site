import { IonContent, IonPage } from "@ionic/react"
import { Header } from "./public-pages-layout-parts/Header"
import { PublicPagesRoutes } from "../routes/PublicRoutes"
import "../styles/PublicPages.scss"

export const PublicPagesLayout: React.FC = () => {
    return (
        <IonPage id="public-pages">
            <Header />
            <IonContent>
                <PublicPagesRoutes />
            </IonContent>
        </IonPage>
    )
}