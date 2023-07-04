import { Route } from "react-router"
import { DashboardLayout } from "../layouts/dashboard/DashboardLayout"

export const PrivateRoutes = () => {
    return (
        <>
            <Route path="/dashboard">
                <DashboardLayout />
            </Route>
        </>
    )
}