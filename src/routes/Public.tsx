import { Route } from "react-router"
import Home from "../pages/Home"
import { PublicPagesLayout } from "../layouts/PublicPages"
import { IonRouterOutlet } from "@ionic/react"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

export const PublicRoutes = () => (

    <IonRouterOutlet>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/public/:id" component={PublicPagesLayout}></Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/register">
            <Register />
        </Route>
    </IonRouterOutlet>

)