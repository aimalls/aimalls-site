import { HTTP_API } from "../helpers/http"

export type iWhitelistTask = {
    title: string;
    links: Link[];
}

export interface Link {
    text: string;
    link: string;
  }

export const getWhitelistTasksFromAPI = () => {
    return HTTP_API().get("whitelist/get-whitelist-social-tasks")
        .then(response => response.data)
        .catch(err => Promise.reject(err.response))
}

export const getRequiredTokenHoldingsFromAPI = () => {
    return HTTP_API().get("whitelist/get-token-holdings-requirements")
        .then(response => response.data)
        .catch(err => Promise.reject(err.response))
}

export const saveWhitelistApplicationToAPI = (application: any) => {
    return HTTP_API().post("whitelist/save-whitelist-application", application)
        .then(response => response.data)
        .catch(err => Promise.reject(err))
}