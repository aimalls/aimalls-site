import { HTTP_API } from "../helpers/http";
export interface iReward {
  _id: string;
  total: Total;
}

interface Total {
  '$numberDecimal': string;
}
export const getUserRewardsFromAPI = () => {
    return HTTP_API().get("reward/get-user-rewards")
        .then(response => response.data)
        .catch(err => Promise.reject(err.response))
}