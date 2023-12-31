import { IonContent, IonPage } from '@ionic/react';
import '../styles/Home.scss';
import { HeroSection } from './home-parts/Hero';
import { AboutSection } from './home-parts/About';
import { FutureOfShoppingSection } from './home-parts/FutureOfShopping';
import { DiscoverBenefits } from './home-parts/DiscoverBenefits';
import { FutureOfShoppingV2Section } from './home-parts/FutureOfShoppingV2';
import { AiMallsApp } from './home-parts/AiMallsApp';
import { TechnologyAndTargetMarket } from './home-parts/TechnologyAndTargetMarket';
import { WhyAiMalls } from './home-parts/WhyAiMalls';
import { VisionAndMission } from './home-parts/VisionAndMission';
import { TokenUtilitySection } from './home-parts/TokenUtility';
import { TokenomicsSection } from './home-parts/Tokenomics';
import { RoadMap } from './home-parts/RoadMap';
import { FAQSection } from './home-parts/FAQSection';
import { FooterSection } from './home-parts/Footer';
import { useEffect, useState } from 'react';
import { PageLoading } from '../components/PageLoading';
import { isPlatform } from '@ionic/react';

import Thumb from "../assets/images/thumb.jpg"
import { Header } from './home-parts/Header';
import Featured from './home-parts/Featured';
import Partners from './home-parts/Partners';
import AppOverview from './home-parts/AppOverview';
import HeroSlider from './home-parts/HeroSlider';
import LicensesAcquired from './home-parts/LicensesAcquired';

const Home: React.FC = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        window.addEventListener('load', () => {
            setLoading(false)
        })


    }, [])

    return (
        <IonPage id='home-page'>
            {loading && !isPlatform('android') && (
                <PageLoading />
            )}
            {/* <img src={Thumb} alt="test thumb" style={{ display: 'none' }} /> */}
            <Header />
            <IonContent fullscreen>
                {/* <HeroSlider /> */}
                <HeroSection />
                <AboutSection />
                <LicensesAcquired />
                <AppOverview />
                <FutureOfShoppingSection />
                <DiscoverBenefits />
                <FutureOfShoppingV2Section />
                <AiMallsApp />
                <TechnologyAndTargetMarket />
                <WhyAiMalls />
                <VisionAndMission />
                {/* <TokenUtilitySection /> */}
                {/* <TokenomicsSection /> */}
                <RoadMap />
                <FAQSection />
                <Featured />
                <Partners />
                <FooterSection />
            </IonContent>
        </IonPage>
    );
};

export default Home;
