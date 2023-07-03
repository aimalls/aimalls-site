import { HTTP_API } from "../helpers/http"

export const Register = (email: string, password: string, confirm_password: string) => {
    return HTTP_API().post("/auth/register", { email, password, confirm_password })
        .then(response => {
            return response
        })
        .catch(err => {
            return Promise.reject(err)
        })
}