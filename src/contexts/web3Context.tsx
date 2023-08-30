import { ReactNode, createContext } from "react"
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { bsc } from "wagmi/chains"
import { createPublicClient, http } from 'viem'

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: bsc,
      transport: http()
    }),
  })

const defaultState = {
    connected: false,
    wallet_address: ''
} 


export const Web3Context = createContext(defaultState)

type Web3ContextProviderProps = {
    children: ReactNode
}


export const Web3ContextProvider = ({ children }: Web3ContextProviderProps) => {
    
    return (
        <Web3Context.Provider value={{ connected: false, wallet_address: ''}}>
            <WagmiConfig config={config}>
                { children }
            </WagmiConfig>
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider;