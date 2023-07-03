import axios from "axios";


const authHeadersForAPI = () => {
    const tokenData = window.localStorage.getItem("auth-token");

    if (tokenData == null) {
        return {
            headers: {},
        };
    }

    let headers = {
        Accept: "application/json",
        Authorization: "Bearer " + tokenData,
    };

    return {
        headers: headers,
    };
}



export const HTTP_API = (payload?: any) => {
    // const router = useRouter();



    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers:
            payload && payload.headers
                ? { ...payload.headers, ...authHeadersForAPI().headers }
                : authHeadersForAPI().headers,
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;

        },
        (error) => {
            // if (error.response.status == 401 && !error.response.data.authorization) {
            //     eventBus.$emit('unauthorized')
            // }
            // if (error.response.status == 401 && error.response.data.authorization == 'non-verified') {
            //     eventBus.$emit('non-verified')
            // }
            // if (error.response.status == 401 && error.response.data.authorization == 'non-member') {
            //     eventBus.$emit('non-member')
            // }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
}