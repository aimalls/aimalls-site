import { Redirect, Route } from "react-router"
import Home from "../pages/Home"

export const PublicRoutes = () => {
    return (
        <>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </>
        
    )
}