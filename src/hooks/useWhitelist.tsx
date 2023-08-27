import { useQuery } from "@tanstack/react-query"
import { getWhitelistApplicationFromAPI } from "../requests/whitelist.request"
import { useAddress } from "@thirdweb-dev/react"
import { useEffect } from "react";

export const useWhitelist = () => {

    const address = useAddress() as string;

    const { data: whitelistApplications, isLoading: isWhitelistApplicationLoading, refetch: refetchWhitelistApplications } = useQuery(["whitelist-application"], () => getWhitelistApplicationFromAPI(address))


    useEffect(() => {
        refetchWhitelistApplications()
    }, [address])

    return {
        whitelistApplications, isWhitelistApplicationLoading
    }
}