import { Redirect, Route } from "react-router"
import Home from "../pages/Home"

export const PublicRoutes = () => {
    return (
        <>
            
            <Route exact path="/">
                <Home />
            </Route>
        </>
        
    )
}