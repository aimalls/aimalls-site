import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React from 'react'

import BSCLogo from '../../assets/images/Partners-Featured-Logos/Bsc.png'
import CoinwireLogo from '../../assets/images/Partners-Featured-Logos/Coinwire-2.png'
import AgoraLogo from '../../assets/images/Partners-Featured-Logos/Agora.png'
import CoinMarketCapLogo from '../../assets/images/Partners-Featured-Logos/Coinmarket.png'
import TrustFi from '../../assets/images/Partners-Featured-Logos/Trustfi.png'
import Mexc from '../../assets/images/Partners-Featured-Logos/Mexc.png'
import Certik from "../../assets/images/Partners-Featured-Logos/certik.png"
import Cryptorev from "../../assets/images/Partners-Featured-Logos/cryptorev.png"
import Cryptodet from "../../assets/images/cryptodetect.jpg"

import KingdomStarter from '../../assets/images/Partners-Featured-Logos/KingdomStarter.jpg'

import ixir from '../../assets/images/Partners-Featured-Logos/Ixirpad.png'
import nftb from '../../assets/images/Partners-Featured-Logos/nftb.png'
import momo from '../../assets/images/Partners-Featured-Logos/momo.png'
import cryptorank from '../../assets/images/Partners-Featured-Logos/cryptorank.svg'
import dao from '../../assets/images/Partners-Featured-Logos/dao.png'

const Partners: React.FC = () => {

    const partners_content = [
        {
            title: "Certik",
            img: Certik,
            link: "https://skynet.certik.com/projects/aimalls"
        },
        {
            title: "CoinWire",
            img: CoinwireLogo,
            link: "https://coinwire.com/"
        },
        {
            title: "BSC",
            img: BSCLogo,
            link: "https://twitter.com/bsc_daily"
        },
        {
            title: "Agora",
            img: AgoraLogo,
            link: "https://agoragroup.ae/"
        },
        {
            title: "CoinMarketCap",
            img: CoinMarketCapLogo,
            link: "https://coinmarketcap.com/"
        },
        {
            title: "TrustFi",
            img: TrustFi,
            link: "https://www.trustfi.org/"
        },
        {
            title: "MEXC",
            img: Mexc,
            link: "https://www.mexc.com/"
        },
        {
            title: "Crypto Revolution",
            img: Cryptorev,
            link: "#"
        },
        {
            title: "Crypto Detect",
            img: Cryptodet,
            link: "#"
        },
        {
            title: "Kingdom Starter",
            img: KingdomStarter,
            link: "https://kingdomstarter.io/"
        },
        {
            title: "IXIRPad",
            img: ixir,
            link: "https://www.ixirpad.com/"
        },
        {
            title: "NFTb",
            img: nftb,
            link: "https://nftb.io/"
        },
        {
            title: "cryptorank",
            img: cryptorank,
            link: "https://cryptorank.io/"
        },
        {
            title: "DAOStarter",
            img: dao,
            link: "https://www.daostarter.pro/#/index"
        },
        {
            title: "Momo",
            img: momo,
            link: "https://www.momo-erc.com/index.html"
        }
    ]

    return (
        <div id='partners-section'>
            <IonGrid className="container">
                <IonRow>
                    <IonCol size="12">
                        <div className="title">Partnerships</div>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    {partners_content.map((partner, index) => (
                        <IonCol key={index} size='12' sizeSm='6' sizeMd='4' sizeLg='3'>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <IonButton fill='clear' href={partner.link} color={"light"} style={{ height: "auto", margin: "20px 0" }} target='_blank'>
                                    <img src={partner.img} alt={`${partner.title} Logo`} width={200} />
                                </IonButton>
                            </div>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Partners
