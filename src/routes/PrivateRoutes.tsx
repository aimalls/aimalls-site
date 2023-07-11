import { Route } from "react-router"
import { DashboardLayoutV2 } from "../layouts/dashboard/DashboardLayoutV2"
import UserContextProvider from "../contexts/userContext"


export const PrivateRoutes = () => {


    return (
        <>
            <Route path="/dashboard">
                <UserContextProvider>
                    <DashboardLayoutV2 />
                </UserContextProvider>
            </Route>
        </>
    )
}