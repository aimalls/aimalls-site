import { IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { PublicRoutes } from "./Public"

export const Routes: React.FC = () => {
    return (
        <IonReactRouter>
            <PublicRoutes />
        </IonReactRouter>
    )
}