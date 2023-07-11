import { Route, useHistory } from "react-router"
import Home from "../pages/Home"
import { PublicPagesLayout } from "../layouts/PublicPages"
import { IonRouterOutlet } from "@ionic/react"
import PrivacyPolicy from "../pages/auth/PrivacyPolicy"
import TermsAndConditions from "../pages/auth/TermsAndConditions"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ForgotPassword from "../pages/auth/ForgotPassword"
import Verification from "../pages/auth/Verification"
import ChangePassword from "../pages/auth/ChangePassword"

export const PublicRoutes = () => {
    
    const navigation = useHistory()
    const publicRoutesProps ={
        navigation
    }
    return(
        
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/public/:id" component={PublicPagesLayout}></Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/privacy-policy">
                <PrivacyPolicy />
            </Route>
            <Route exact path="/terms-and-conditions">
                <TermsAndConditions />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/verify">
                <Verification { ...publicRoutesProps } />
            </Route>
            <Route exact path="/forgot-password">
                <ForgotPassword />
            </Route>
            <Route exact path="/change-password">
                <ChangePassword />
            </Route>
        </>
        
    )
}
