import { HTTP_API } from "../helpers/http";

export const getActiveTasksFromAPI = () => {
    return HTTP_API().get("/task/get-active-tasks")
        .then(response => response.data)
        .catch(error => Promise.reject(error.response.data))
}

export const getTaskByIdFromAPI = (id: string) => {
    return HTTP_API().get('/task/get-task-by-id', {params: {id}})
        .then(response => response.data)
        .catch(error => Promise.reject(error.response.data))
}

