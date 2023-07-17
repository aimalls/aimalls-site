import { IonGrid, IonRow, IonCol } from '@ionic/react'
import React from 'react'

import BSCLogo from '../../assets/images/Partners-Featured-Logos/Bsc.png'
import CoinwireLogo from '../../assets/images/Partners-Featured-Logos/Coinwire-2.png'
import AgoraLogo from '../../assets/images/Partners-Featured-Logos/Agora.png'
import CoinMarketCapLogo from '../../assets/images/Partners-Featured-Logos/Coinmarket.png'

const Partners: React.FC = () => {

    const partners_content = [
        {
            title: "BSC",
            img: BSCLogo
        },
        {
            title: "CoinWire",
            img: CoinwireLogo
        },
        {
            title: "Agora",
            img: AgoraLogo
        },
        {
            title: "CoinMarketCap",
            img: CoinMarketCapLogo
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
                    { partners_content.map((partner, index) => (
                        <IonCol key={index} size='12' sizeSm='6' sizeMd='4' sizeLg='3'>
                            <div  style={{ display: "flex", justifyContent: "center"}}>
                                <div style={{height: "auto", margin: "20px 10px"}}>
                                    <img src={partner.img} alt={`${partner.title} Logo`} width={200} />
                                </div>
                            </div>
                        </IonCol>
                    )) }
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Partners
