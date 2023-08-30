import { useAddress, useBalance, useContract, useContractRead } from "@thirdweb-dev/react";
import minAbi from "../configs/min-abi";

export const useTokenBalance = (contractAddress: string) => {

    const balance = useBalance(contractAddress)

    return balance
}

export default useTokenBalance;