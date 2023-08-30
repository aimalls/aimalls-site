import { HTTP_API } from "../helpers/http"

export interface iWhitelistApplication {
  _id: string;
  walletAddress: string;
  fullName: string;
  email: string;
  twitterHandle: string;
  telegramHandle: string;
  facebookHandle: string;
  allocationAmount: AllocationAmount;
  mappedLoadedTokenHoldings: MappedLoadedTokenHolding[];
  status: string;
  __v: number;
  remarks?: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface MappedLoadedTokenHolding {
  token: string;
  tokenName: string;
  holding: string;
  sufficient: boolean;
}

export interface AllocationAmount {
  '$numberDecimal': string;
}

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

export const getWhitelistApplicationFromAPI = (wallet_address: string) => {
    return HTTP_API().get("whitelist/get-whitelist-application-by-address", { params: {wallet_address} })
        .then(response => response.data)
        .catch(err => Promise.reject(err.response))
}