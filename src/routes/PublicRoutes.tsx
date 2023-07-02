import { Route } from "react-router"
import { Registration } from "../pages/Register"
import { IonRouterOutlet } from "@ionic/react"

export const PublicPagesRoutes = () => {
    return (
        <IonRouterOutlet>
            <Route exact path="/public/register">
                <Registration />
            </Route>
        </IonRouterOutlet>
    )
}