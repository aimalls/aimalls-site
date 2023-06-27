import { Route } from "react-router"
import Home from "../pages/Home"
import { PublicPagesLayout } from "../layouts/PublicPages"
import { IonRouterOutlet } from "@ionic/react"

export const PublicRoutes = () => {
    return (

        <IonRouterOutlet>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/public/:id" component={PublicPagesLayout}></Route>
        </IonRouterOutlet>
        
    )
}