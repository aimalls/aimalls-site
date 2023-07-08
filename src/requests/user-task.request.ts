import { HTTP_API } from "../helpers/http";

export const saveUserTaskToAPI = (task: any) => {
    const headers = { 'Content-Type': 'multipart/form-data' };
    return HTTP_API({ headers }).post("/user-task/save-user-task", task)
        .then(response => response.data)
        .catch(err => Promise.reject(err.response.data))
}