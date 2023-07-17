import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'

import BSCLogo from '../../assets/images/Partners-Featured-Logos/Bsc.png'
import CoinWireLogo from "../../assets/images/Partners-Featured-Logos/Coinwire-2.png"
import YahooLogo from '../../assets/images/Partners-Featured-Logos/Yahoo.png'
import BloombergLogo from '../../assets/images/Partners-Featured-Logos/Bloomberg.png'
import BusinessInsiderLogo from '../../assets/images/Partners-Featured-Logos/Business-insider-2.png'
import DigitalJornalLogo from '../../assets/images/Partners-Featured-Logos/Digital-journal-2.png'
import MorningStarLogo from '../../assets/images/Partners-Featured-Logos/Morningstar_Logo.svg.png'


const Featured: React.FC = () => {

    const featured_content = [
        {
            title: "BSC",
            img: BSCLogo,
            link: "https://twitter.com/bsc_daily/status/1678078741443133441?fbclid=IwAR3bJK-j4QEEcV9iUM_RG7ieju-ravNkJxGMR3-LLqRxHuIgFqQ7W_LuStA"
        },
        {
            title: "CoinWire",
            img: CoinWireLogo,
            link: 'https://aimalls.medium.com/powering-the-future-of-ecommerce-through-a-dynamic-partnership-19c9c56b0583'
        },
        {
            title: "Yahoo! Finance",
            img: YahooLogo,
            link: "https://finance.yahoo.com/news/aimalls-unveils-future-shopping-ai-152000205.html"
        },
        {
            title: "Bloomberg",
            img: BloombergLogo,
            link: "https://www.bloomberg.com/press-releases/2023-06-29/aimalls-unveils-the-future-of-shopping-with-ai-powered-online-store?fbclid=IwAR23IWKUdDzimAKfUklF9JcDQHTYRhm18ASHjdUIDq9Oq5s50C2BEFT9MxY"
        },
        {
            title: "Business Insider",
            img: BusinessInsiderLogo,
            link: "https://markets.businessinsider.com/news/stocks/aimalls-unveils-the-future-of-shopping-with-ai-powered-online-store-1032418350?fbclid=IwAR0xPIZWR64hcY6-TTzU69dh12dNG4pxvyDAjmmfh9J-u4YIDV6P9lFXG-M"
        },
        {
            title: "Digital Jornal",
            img: DigitalJornalLogo,
            link: "https://www.digitaljournal.com/pr/news/accesswire/aimalls-unveils-the-future-of-shopping-with-ai-powered-online-store?fbclid=IwAR2CUnMY-GjIWhdWvq17xXvDwnRnY70PPm3O9VpP_FzKZ2e5O4PJT9rr4cE"
        },
        {
            title: "Morning Star",
            img: MorningStarLogo,
            link: "https://www.morningstar.com/news/accesswire/764612msn/aimalls-unveils-the-future-of-shopping-with-ai-powered-online-store?fbclid=IwAR3cgZVGkAs7WWga8PASw7p9GO4T5l9WIngMMKXBGEVgcwHX-Ky2gu4xtw8"
        }
    ]

    return (
        <div id='featured-section'>
            <IonGrid className='container'>
                <IonRow className='ion-justify-content-center'>
                    <IonCol size='12'>
                        <div className="featured-title">Featured In</div>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    { featured_content.map((featured, index) => (
                        <IonCol key={index} size='12' sizeSm='6' sizeMd='4' sizeLg='3'>
                            <div  style={{ display: "flex", justifyContent: "center"}}>
                                <IonButton fill='clear' href={featured.link} color={"light"} style={{height: "auto", margin: "20px 0"}} target='_blank'>
                                    <img src={featured.img} alt={`${featured.title} Logo`} width={200}/>
                                </IonButton>
                            </div>
                        </IonCol>
                    )) }
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Featured
