import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../styles/Home.scss';
import { menuOutline } from "ionicons/icons"

import logoFull from "../assets/images/logo-full.png";
import { NavigationList } from '../components/NavigationList';

const Home: React.FC = () => {
    return (
        <IonPage id='home-page'>
            <IonMenu contentId="main-header">
                {/* <div className='responsive-nav-logo-wrap'>
                    
                </div> */}
                <div id='responsive-nav'>
                    <div className='logo-wrap'>
                        <img src={ logoFull } className='logo' />
                    </div>
                    <NavigationList />
                </div>
            </IonMenu>
            <IonHeader id='main-header'>
                <IonToolbar>
                    <IonGrid>
                        <IonRow className='container ion-align-items-center ion-justify-content-between'>
                            <IonCol size='6' sizeMd='2' style={{ display: 'flex', justifyContent: 'start' }}>
                                <img src={ logoFull } className='logo' />
                            </IonCol>
                            <IonCol size='auto' sizeMd='7' className='ion-hide-md-down'>
                                <div id='main-navigation'>
                                    <NavigationList />
                                </div>
                            </IonCol>
                            <IonCol size='auto' sizeMd='3'>
                                <IonButton fill='solid' shape='round' className='ion-hide-md-down'>Contact</IonButton>
                                <IonMenuToggle className='ion-hide-md-up'>
                                    <IonButton fill='solid'>
                                        <IonIcon slot='icon-only' icon={menuOutline}></IonIcon>
                                    </IonButton>
                                </IonMenuToggle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    {/* <IonButtons className='ion-activatable ion-hide-md-up' slot="end">
                        
                    </IonButtons> */}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Home;
