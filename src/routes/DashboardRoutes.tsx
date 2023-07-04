import { FC } from "react";
import { Route } from "react-router";

import Dashboard from "../pages/dashboard/Dashboard";
import Tasks from "../pages/dashboard/Tasks";

export interface iProps {}
export const DashboardRoutes: FC<iProps> = (props): JSX.Element => {
    return (
        <>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/dashboard/tasks">
                <Tasks />
            </Route>
        </>
    )
};
export default DashboardRoutes;