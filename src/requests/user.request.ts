import { HTTP_API } from "../helpers/http"

export const getUserReferralsCount = (userId: string) => {
    return HTTP_API().get("/user/get-user-referrals-count")
        .then(response => response.data)
        .catch(error => Promise.reject(error.response.data))
}