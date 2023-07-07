import { FC } from "react";
import { Route } from "react-router";

import Dashboard from "../pages/dashboard/Dashboard";
import Tasks from "../pages/dashboard/Tasks";
import Task from "../pages/dashboard/tasks/Task";

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
            <Route exact path="/dashboard/tasks/:id">
                <Task />
            </Route>
        </>
    )
};
export default DashboardRoutes;