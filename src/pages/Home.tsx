import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../styles/Home.scss';
import { Header } from './home-parts/Header';
import { HeroSection } from './home-parts/Hero';
import { AboutSection } from './home-parts/About';
import { FutureOfShoppingSection } from './home-parts/FutureOfShopping';
import { DiscoverBenefits } from './home-parts/DiscoverBenefits';
import { FutureOfShoppingV2Section } from './home-parts/FutureOfShoppingV2';

const Home: React.FC = () => {
    return (
        <IonPage id='home-page'>
            <Header />
            <IonContent fullscreen>
                <HeroSection />
                <AboutSection />
                <FutureOfShoppingSection />
                <DiscoverBenefits />
                <FutureOfShoppingV2Section />
            </IonContent>
        </IonPage>
    );
};

export default Home;
