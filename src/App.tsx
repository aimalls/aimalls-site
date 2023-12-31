import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './styles/globals.scss';
import { Routes } from './routes/Index';

setupIonicReact();
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)

const App: React.FC = () => {

    const [ref, setReferrer] = useLocalStorage("referrer", '')

    useEffect(() => {
        const url_string = window.location.href
        const url = new URL(url_string)
        const referrer = url.searchParams.get("ref")
        if (referrer) {
            setReferrer(referrer)
        }
    },[])

    

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Routes />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}
export default App;
