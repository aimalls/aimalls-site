import { FC, useEffect, useMemo, useState } from "react";
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRange, IonRow, useIonAlert, useIonLoading } from "@ionic/react";
import { useHistory } from "react-router";

// import { useAccount, useConnect, useDisconnect, useContractRead  } from 'wagmi'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import minAbi from "../../configs/min-abi";
import {
    ThirdwebProvider,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    trustWallet,
    useAddress,
    useContract,
    useContractRead,
  } from "@thirdweb-dev/react";
import useTokenBalance from "../../hooks/useTokenBalance";
import { RangeValue } from "@ionic/core";

import "../../styles/pages/whitelist/Whitelist.scss"
  

export interface iProps {}
export const Whitelist: FC<iProps> = (props): JSX.Element => {


    const navigation = useHistory();
    const [present, dismiss] = useIonLoading();
    const [presentAlert] = useIonAlert();


    const address = useAddress();

    const oreTokenBalance = useTokenBalance("0x91f006ee672f8f39c6e63ca75b1ca14067b3c366");
    const bcpayTokenBalance = useTokenBalance("0x21f1ce0FCf1E9E39F8e79B7762801E8096d9f6CD");
    const teteTokenBalance = useTokenBalance("0x057bad39378b5970c5c8a68b6829544e7578dc01");

    const truncate = (text: `0x${string}` | undefined, length: number, clamp: string) => {
        clamp = clamp || '...';
        if (!text) return
        var first = text.slice(0, 5);
        var last = text.slice(text.length - 4, text.length);
        return text.length > length ? first + clamp + last : text;
    }

    const [allocationAmount, setAllocationAmount] = useState<RangeValue>(100);

    const handleAllocationAmountChange = (value: RangeValue) => {
        setAllocationAmount(value)
    }


    const [applicationSubmitted, setApplicationSubmitted] = useState(false);

    const handleApplicationSubmit = () => {
        setApplicationSubmitted(true)
    }

    const handleApplicationReset = () => {
        
        setApplicationSubmitted(false)
    }

    const tasks = [
        {
            title: "Follow AIMalls on Twitter",
            links: [
                {
                    text: "Follow",
                    link: "https://twitter.com/ai_malls"
                }
            ]
        },
        {
            title: "Subscribe and Join to AIMalls Telegram Channels",
            links: [
                {
                    text: "Subscribe",
                    link: "https://t.me/AiMallsAnnouncement"
                },
                {
                    text: "Join",
                    link: "https://t.me/+n-KIBgWOaB04MGU1"
                }
                
            ]
        },
        {
            title: "Follow AIMalls on Facebook",
            links: [
                {
                    text: "Follow",
                    link: "https://www.facebook.com/aimallsapp"
                }
            ]
        }
    ]

    return (
        <IonPage id="whitelist-page">
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" className="page-title">
                            Join the Whitelist
                        </IonCol>
                        <IonCol size="12">
                            <span className="sub-page-title">1. Task</span>
                            <div className="sub-page-title-description">Please complete the social media tasks below.</div>
                            <IonList lines="full">
                                { tasks.map((task, index) => (
                                    <IonItem key={`task-${index}`}>
                                        { task.title }
                                        { task.links.map((link, index) => (
                                            <IonButton key={`task-link-${index}`} href={link.link} slot="end" target="_blank">{ link.text }</IonButton>
                                        )) }
                                    </IonItem>
                                )) }
                            </IonList>
                            <IonInput
                                type="text"
                                fill="outline"
                                labelPlacement="floating"
                                label="Twitter Handle"
                                placeholder="Please input your Twitter Handle/Username"
                                style={{ marginBottom: '10px' }}
                            ></IonInput>
                            <IonInput
                                type="text"
                                fill="outline"
                                labelPlacement="floating"
                                label="Telegram Handle"
                                placeholder="Please input your Telegram Handle/Username"
                                style={{ marginBottom: '10px' }}
                            ></IonInput>
                            <IonInput
                                type="text"
                                fill="outline"
                                labelPlacement="floating"
                                label="Facebook Handle"
                                placeholder="Please input your Facebook Handle/Username"
                                style={{ marginBottom: '10px' }}
                            ></IonInput>
                        </IonCol>
                        <IonCol size="12">
                            <span className="sub-page-title">2. Basic Details</span>
                            <div className="sub-page-title-description">Kindly share your essential information with us so that we can keep you informed.</div>
                        </IonCol>
                        <IonCol size="12">
                            
                            <IonInput
                                type="text"
                                fill="outline"
                                labelPlacement="floating"
                                label="Full Name"
                                placeholder="Please type your Full Name"
                                style={{ marginBottom: '10px' }}
                            ></IonInput>
                            <IonInput
                                type="email"
                                fill="outline"
                                labelPlacement="floating"
                                label="Email Address"
                                placeholder="Please type your email address"
                            ></IonInput>
                        </IonCol>
                        <IonCol size="12">
                            <span className="sub-page-title">3. Connect Wallet</span>
                            <div className="sub-page-title-description">Please connect your wallet.</div>
                        </IonCol>
                        <IonCol size="12">
                            <ConnectWallet style={{ width: '100%' }} />
                        </IonCol>
                        
                        <IonCol size="12" style={{ margin: '10px 0px' }}>
                            <span className="sub-page-title">4. Required Token Holdings</span>
                            <div className="sub-page-title-description">Wallet address should have the required holdings of tokens</div>
                        </IonCol>
                        { address ? (
                        <>
                            <IonCol size="12">
                                <IonInput 
                                    type="text"
                                    label="Wallet Address"
                                    readonly
                                    placeholder="Wallet Address"
                                    labelPlacement="floating"
                                    fill="outline"
                                    value={address}
                                >   
                                </IonInput>
                            </IonCol>
                            <IonCol size="12">
                                ORE Balance: { oreTokenBalance.data?.displayValue }
                                {/* { oreBalanceA.toString() } */}
                            </IonCol>
                            <IonCol size="12">
                                BCPay Balance: { bcpayTokenBalance.data?.displayValue }
                            </IonCol>
                            <IonCol size="12">
                                TeteAI Balance: { teteTokenBalance.data?.displayValue }
                            </IonCol>
                        </>
                        ): null }
                        <IonCol size="12" style={{ margin: '10px 0px' }}>
                            <span className="sub-page-title">5. Allocation Amount</span>
                            <div className="sub-page-title-description">Choose your desired allocation amount.</div>
                        </IonCol>
                        <IonCol size="12">
                            Allocation: ${ allocationAmount.toString() }
                        </IonCol>
                        <IonCol size="12">
                            <IonRange 
                                aria-label="Allocation" 
                                onIonChange={({detail}) => handleAllocationAmountChange(detail.value)}
                                min={100} 
                                max={10000} 
                                step={100} 
                                value={allocationAmount} 
                                pin={true} 
                                ticks={true} 
                                snaps={true}>
                            </IonRange>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{ marginTop: '30px' }}>
                        <IonCol size="12" sizeMd="4" pushMd="8">
                            <IonButton expand="block" onClick={() => handleApplicationSubmit()}>Submit</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonModal isOpen={applicationSubmitted}>
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        <IonGrid>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="10" className="ion-text-center">
                                    Whitelisting Application Submitted Successfully!, Please check your email.
                                </IonCol>
                                <IonCol size="8">
                                    <IonButton expand="block" onClick={() => handleApplicationReset()}>Finish</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonModal>
            </IonContent>
        </IonPage>
    )
};
export default Whitelist;