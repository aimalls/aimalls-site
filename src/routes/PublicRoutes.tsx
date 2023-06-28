import { Route } from "react-router"
import { Registration } from "../pages/Register"
import { IonRouterOutlet } from "@ionic/react"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import TermsAndConditions from "../pages/TermsAndConditions"

export const PublicPagesRoutes = () => {
    return (
        <IonRouterOutlet>
            <Route exact path="/public/register">
                <Registration />
            </Route>
            <Route exact path="/public/privacy-policy">
                <PrivacyPolicy />
            </Route>
            <Route exact path="/public/terms-and-conditions">
                <TermsAndConditions />
            </Route>
        </IonRouterOutlet>
    )
}