import { FC, useEffect, useMemo, useState } from "react";
import { CheckboxCustomEvent, IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRange, IonRow, useIonAlert, useIonLoading, useIonToast } from "@ionic/react";
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
import { useQuery } from "@tanstack/react-query";
import { getRequiredTokenHoldingsFromAPI, getWhitelistApplicationFromAPI, getWhitelistTasksFromAPI, iWhitelistApplication, iWhitelistTask, saveWhitelistApplicationToAPI } from "../../requests/whitelist.request";
import { refresh } from "ionicons/icons";

import logoRobot from "../../assets/images/logo-robot.png"
import { useWhitelist } from "../../hooks/useWhitelist";
  

export interface iProps {}

type iRequiredHolding = {
    token: string,
    required: number,
    buy_link: string
}

interface iLoadedTokenHolding {
  token: string;
  required: number;
  buy_link: string,
  name: string;
  symbol: string;
  decimals: number;
  value: Value;
  displayValue: string;
  sufficient: boolean;
  requiredFormattedValue: string,
  loading: boolean
}

interface Value {
  type: string;
  hex: string;
}

export const Whitelist: FC<iProps> = (props): JSX.Element => {


    const navigation = useHistory();
    const [present, dismiss] = useIonLoading();
    const [presentAlert] = useIonAlert();
    const [presentToast] = useIonToast();


    const address = useAddress() as string;

    const { whitelistApplications, isWhitelistApplicationLoading } = useWhitelist();

    const {
        data: oreTokenBalance, 
        isLoading: isOreTokenBalanceLoading, 
        refetch: refetchOreBalance
    } = useTokenBalance("0x91f006ee672f8f39c6e63ca75b1ca14067b3c366");
    const {
        data: bcpayTokenBalance, 
        isLoading: isBcpayTokenBalanceLoading, 
        refetch: refetchBcpayBalance
    } = useTokenBalance("0x21f1ce0FCf1E9E39F8e79B7762801E8096d9f6CD");
    const {
        data: teteAiTokenBalance, 
        isLoading: isTeteAiTokenBalanceLoading, 
        refetch: refetchTeteAiBalance
    } = useTokenBalance("0x057bad39378b5970c5c8a68b6829544e7578dc01");

    const refetchTokenBalances = () => {
        refetchOreBalance();
        refetchBcpayBalance();
        refetchTeteAiBalance();
    }

    const truncate = (text: `0x${string}` | undefined, length: number, clamp: string) => {
        clamp = clamp || '...';
        if (!text) return
        var first = text.slice(0, 5);
        var last = text.slice(text.length - 4, text.length);
        return text.length > length ? first + clamp + last : text;
    }

    const {data: tasks, isLoading: isTasksLoading} = useQuery(["get-tasks-query"], () => getWhitelistTasksFromAPI())
    const {data: requiredHoldings, isLoading: isRequiredHoldingsLoading} = useQuery(["get-required-token-holdings-query"], () => getRequiredTokenHoldingsFromAPI())

    const loadedTokenHoldings: iLoadedTokenHolding[] = useMemo(() => {
        if (requiredHoldings) {
            return requiredHoldings.map((requiredHolding: iRequiredHolding)  => {
                if (requiredHolding.token == "0x91f006ee672f8f39c6e63ca75b1ca14067b3c366") {
                    const sufficient = parseFloat(oreTokenBalance?.displayValue.toString()!) >= requiredHolding.required;
                    const requiredFormattedValue = Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1}).format(requiredHolding.required)
                    return {
                        ...requiredHolding,
                        ...oreTokenBalance,
                        sufficient,
                        requiredFormattedValue,
                        loading: isOreTokenBalanceLoading
                    }
                }
                if (requiredHolding.token == "0x21f1ce0FCf1E9E39F8e79B7762801E8096d9f6CD") {
                    const sufficient = parseFloat(bcpayTokenBalance?.displayValue.toString()!) >= requiredHolding.required;
                    const requiredFormattedValue = Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1}).format(requiredHolding.required)
                    return {
                        ...requiredHolding,
                        ...bcpayTokenBalance,
                        sufficient,
                        requiredFormattedValue,
                        loading: isBcpayTokenBalanceLoading
                    }
                }
                if (requiredHolding.token == "0x057bad39378b5970c5c8a68b6829544e7578dc01") {
                    const sufficient = parseFloat(teteAiTokenBalance?.displayValue.toString()!) >= requiredHolding.required;
                    const requiredFormattedValue = Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1}).format(requiredHolding.required)
                    return {
                        ...requiredHolding,
                        ...teteAiTokenBalance,
                        sufficient,
                        requiredFormattedValue,
                        loading: isTeteAiTokenBalanceLoading
                    }
                }
            })
        }
    }, [requiredHoldings, teteAiTokenBalance, oreTokenBalance, bcpayTokenBalance])

    const [allocationAmount, setAllocationAmount] = useState<RangeValue>(100);

    const handleAllocationAmountChange = (value: RangeValue) => {
        setAllocationAmount(value)
    }


    const [applicationSubmitted, setApplicationSubmitted] = useState(false);

    const handleApplicationReset = () => {
        
        setApplicationSubmitted(false)
    }


    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep((current) => current + 1)
    }

    const prevStep = () => {
        setCurrentStep((current) => current - 1)
    }

    const [twitterHandle, setTwitterHandle] = useState("");
    const [telegramHandle, setTelegramHandle] = useState("");
    const [facebookHandle, setFacebookHandle] = useState("");

    const handleTaskNextStep = async () => {
        if (twitterHandle == "" || telegramHandle == "" || facebookHandle == "") {
            await presentToast("Please fill-in all required fields!", 3000)
            return
        }
        nextStep();
    }

    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

    const handleBasicInfoNextStep = async () => {
        if (fullName == "" || email == "") {
            await presentToast("Please fill-in all required fields!", 3000)
            return
        }

        if (!privacyPolicyAccepted) {
            await presentToast("Please review and accept the privacy policy if you wish to continue.", 3000)
        }

        refetchTokenBalances();
        nextStep();
    }

    const handlePrivacyPolicyAccept = (e: CheckboxCustomEvent) => {
        const { checked } = e.detail;
        setPrivacyPolicyAccepted(checked)
    }

    const handleTokenHoldingsNextStep = async () => {
        const filteredHoldings = loadedTokenHoldings.filter(holding => {
            return holding.sufficient === true
        })

        if (filteredHoldings.length === 0) {
            await presentToast("You are required to meet at least one of the token holding prerequisites.", 10000)
            return
        }

        nextStep();
    }

    const handleWhitelistApplication = async () => {

        const mappedLoadedTokenHoldings = loadedTokenHoldings.map((holding) => {
            return {
                token: holding.token,
                tokenName: holding.name,
                holding: holding.displayValue,
                sufficient: holding.sufficient
            }
        })

        let params = {
            walletAddress: address,
            fullName,
            email,
            twitterHandle,
            telegramHandle,
            facebookHandle,
            allocationAmount,
            mappedLoadedTokenHoldings
        }

        try {
            await present();
            const result = await saveWhitelistApplicationToAPI(params)
            presentToast(result.message, 5000);
            setFullname("");
            setEmail("");
            setPrivacyPolicyAccepted(false)
            setTwitterHandle("");
            setTelegramHandle("");
            setFacebookHandle("");
            setAllocationAmount(100);
            setCurrentStep(1)
            setApplicationSubmitted(true)
        } catch (err: any) {
            presentToast(err, 5000)
        } finally {
            await dismiss();
        }
    }

    
    


    return (
        <IonPage id="whitelist-page">
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" className="page-title">
                            Join the Whitelist
                        </IonCol>
                            
                        <IonCol size="12" sizeMd="5" className={currentStep !== 1 ? `ion-hide`: ''}>
                            <IonRow>
                                <IonCol size="12">
                                    <span className="sub-page-title">1. Connect Wallet</span>
                                    <div className="sub-page-title-description">Please connect your wallet.</div>
                                </IonCol>
                                <IonCol size="12">
                                    <ConnectWallet className="web3-connect" style={{ width: '100%', marginTop: '50px' }} />
                                </IonCol>
                                { address ? (
                                <IonCol size="12">
                                    { whitelistApplications ? (
                                        <IonList>
                                            { whitelistApplications.map((application: iWhitelistApplication) => (
                                                <IonItem key={application._id}>
                                                    <IonLabel>
                                                        <div>
                                                            Allocation: ${ application.allocationAmount.$numberDecimal }
                                                        </div>
                                                        <p>
                                                            { application.createdAt }
                                                        </p>
                                                    </IonLabel>
                                                    <IonLabel slot="end">
                                                        { application.status }
                                                    </IonLabel>
                                                </IonItem>
                                            )) }
                                        </IonList>
                                    ): null }
                                </IonCol>
                                ): null }
                            </IonRow>
                            { address ? (
                            <IonRow className="ion-justify-content-end">
                                <IonCol size="12" sizeMd="5" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={nextStep}>Next</IonButton>
                                </IonCol>
                            </IonRow>
                            ): null }
                        </IonCol>
                        <IonCol size="12" sizeMd="5" className={currentStep !== 2 ? `ion-hide`: ''}>
                            <IonRow>
                                <IonCol size="12">
                                    <span className="sub-page-title">2. Task</span>
                                    <div className="sub-page-title-description">Please complete the social media tasks below.</div>
                                </IonCol>
                                <IonCol size="12">
                                    
                                    <IonList lines="full">
                                        { tasks ? tasks.map((task: iWhitelistTask, index: number) => (
                                            <IonItem key={`task-${index}`}>
                                                { task.title }
                                                { task.links.map((link, index) => (
                                                    <IonButton key={`task-link-${index}`} href={link.link} slot="end" target="_blank">{ link.text }</IonButton>
                                                )) }
                                            </IonItem>
                                        )): null }
                                    </IonList>
                                </IonCol>
                                <IonCol size="12">

                                    <IonInput
                                        type="text"
                                        fill="solid"
                                        labelPlacement="floating"
                                        label="Twitter Handle*"
                                        placeholder="Please input your Twitter Handle/Username"
                                        style={{ marginBottom: '10px' }}
                                        value={twitterHandle}
                                        onIonInput={({detail}) => setTwitterHandle(detail.value!)}
                                    ></IonInput>
                                    <IonInput
                                        required
                                        type="text"
                                        fill="solid"
                                        labelPlacement="floating"
                                        label="Telegram Handle*"
                                        value={telegramHandle}
                                        placeholder="Please input your Telegram Handle/Username"
                                        style={{ marginBottom: '10px' }}
                                        onIonInput={({detail}) => setTelegramHandle(detail.value!)}
                                    ></IonInput>
                                    <IonInput
                                        type="text"
                                        fill="solid"
                                        labelPlacement="floating"
                                        label="Facebook Handle*"
                                        value={facebookHandle}
                                        placeholder="Please input your Facebook Handle/Username"
                                        style={{ marginBottom: '10px' }}
                                        onIonInput={({detail}) => setFacebookHandle(detail.value!)}
                                    ></IonInput>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={prevStep}>Back</IonButton>
                                </IonCol>
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={handleTaskNextStep}>Next</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol size="12" sizeMd="5" className={currentStep !== 3 ? `ion-hide`: ''}>
                            <IonRow>
                                <IonCol size="12">
                                    <span className="sub-page-title">3. Basic Details</span>
                                    <div className="sub-page-title-description">Kindly share your essential information with us so that we can keep you informed.</div>
                                </IonCol>
                                <IonCol size="12">
                                    <IonInput
                                        type="text"
                                        fill="solid"
                                        labelPlacement="floating"
                                        label="Full Name*"
                                        value={fullName}
                                        placeholder="Please type your Full Name"
                                        style={{ marginBottom: '10px' }}
                                        onIonInput={({ detail }) => setFullname(detail.value!)}
                                    ></IonInput>
                                    <IonInput
                                        type="email"
                                        fill="solid"
                                        value={email}
                                        labelPlacement="floating"
                                        label="Email Address*"
                                        placeholder="Please type your email address"
                                        onIonInput={({ detail }) => setEmail(detail.value!)}
                                    ></IonInput>
                                    
                                </IonCol>
                                <IonCol size="12" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <IonCheckbox labelPlacement='end' value={privacyPolicyAccepted} onIonChange={(e) => handlePrivacyPolicyAccept(e)}>
                                        I agree to the 
                                    </IonCheckbox>
                                    <a href="/whitelist/privacy-policy" target='_blank' style={{ marginLeft: '3px' }}> Privacy Policy</a>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={prevStep}>Back</IonButton>
                                </IonCol>
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={handleBasicInfoNextStep} disabled={ !privacyPolicyAccepted }>Next</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        
                        <IonCol size="12" sizeMd="5" className={currentStep !== 4 ? `ion-hide`: ''}>
                            <IonRow>
                                <IonCol size="12">
                                    <span className="sub-page-title">4. Required Token Holdings</span>
                                    <div className="sub-page-title-description">Wallet address should have the required holdings of tokens</div>
                                </IonCol>
                                <IonCol size="12">
                                    <IonList>
                                    { loadedTokenHoldings ? loadedTokenHoldings.map((holding, index) => (
                                        <IonItem key={`holding-${index}`}>
                                            <IonButton fill="clear" onClick={refetchTokenBalances}>
                                                <IonIcon icon={ refresh }></IonIcon>
                                            </IonButton>
                                            <IonLabel>
                                                { holding.loading ? 'Loading...' : `${holding.name}: ${holding.displayValue}` }
                                            </IonLabel>
                                            <IonLabel color={"success"}>
                                                <IonButton target="_blank" href={ holding.buy_link } className="buy-token-btn">Buy</IonButton>
                                            </IonLabel>
                                            <IonLabel style={{ textAlign: 'end' }}>
                                                Required: { holding.requiredFormattedValue }
                                                
                                            </IonLabel>
                                        </IonItem>
                                    )): null }
                                    </IonList>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={prevStep}>Back</IonButton>
                                </IonCol>
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={handleTokenHoldingsNextStep}>Next</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>

                        <IonCol size="12" sizeMd="5" className={currentStep !== 5 ? `ion-hide`: ''}>
                            <IonRow>
                                <IonCol size="12">
                                    <span className="sub-page-title">5. Allocation Amount</span>
                                    <div className="sub-page-title-description">Choose your desired allocation amount.</div>
                                </IonCol>
                                <IonCol size="12" style={{ color: 'white' }}>
                                    Allocation: ${ allocationAmount.toString() }
                                </IonCol>
                                <IonCol size="12">
                                    <IonRange 
                                        aria-label="Allocation" 
                                        onIonChange={({detail}) => handleAllocationAmountChange(detail.value)}
                                        min={100} 
                                        max={10000} 
                                        step={50}
                                        value={allocationAmount} 
                                        pin={true} 
                                        ticks={true} 
                                        snaps={true}>
                                    </IonRange>
                                </IonCol>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={prevStep}>Back</IonButton>
                                </IonCol>
                                <IonCol size="12" sizeMd="4" style={{ marginTop: '30px' }}>
                                    <IonButton expand="block" onClick={handleWhitelistApplication}>Submit</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                            
                    </IonRow>
                    
                </IonGrid>
                <IonModal isOpen={applicationSubmitted} className="whitelist-modal">
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        <IonGrid>
                            <IonRow className="ion-justify-content-center">
                                <IonCol size="10" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={logoRobot} style={{ objectFit: 'contain', height: '200px' }} />
                                </IonCol>
                                <IonCol size="10" className="ion-text-center" style={{ color: "#FFF" }}>
                                    Whitelisting Application Submitted Successfully!, You'll be notified throught your email once we're done reviewing it.
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