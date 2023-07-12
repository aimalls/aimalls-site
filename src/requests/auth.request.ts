import { HTTP_API } from "../helpers/http"

export const Register = async (email: string, password: string, confirm_password: string, referrer: string) => {
    try {
        return await HTTP_API().post("/auth/register", { email, password, confirm_password, referrer })
    } catch (error) {
        return Promise.reject(error)
    }
}

export const VerifyRegistration = async (verificationLink: string) => {
    try {
        return await HTTP_API().post("/auth/verify-registration", { verificationLink })
    } catch (error) {
        return Promise.reject(error)
    }
}

export const Login = async (email: string, password: string) => {
    try {
        return await HTTP_API().post("/auth/login", { email, password })
    } catch (error) {
        return Promise.reject(error)
    }
}

export const Logout = async () => {
    try {
        return await HTTP_API().post("/auth/logout")
    } catch (error) {
        return Promise.reject(error)
    }
}

export const GoogleLogin = async (code: string) => {
    try {
        return await HTTP_API().post("/auth/google", { code })
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getUserInfo = async () => {
    try {
        return await HTTP_API().get("/auth/me")
    } catch (error) {
        return Promise.reject(error)
    }
}
