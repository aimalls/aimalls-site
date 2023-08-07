import { FC } from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow, IonicSlides, useIonAlert, useIonLoading } from "@ionic/react";
export interface iProps {}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

import banner1 from "../../assets/images/banners/20230804_225156_0000.png"
import banner2 from "../../assets/images/banners/20230804_225156_0001.png"
import banner3 from "../../assets/images/banners/20230804_225156_0002.png"
import banner4 from "../../assets/images/banners/20230804_225156_0003.png"
import SwiperEvents from "swiper";

export const AppOverview: FC<iProps> = (props): JSX.Element => {


    return (
        <div id="aimalls-app-overview">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol size="12" className="ion-margin-bottom">
                        <div className="header-title ion-text-center">
                            App <span>Overview</span>
                        </div>
                    </IonCol>
                    <IonCol size="12" sizeSm="12" sizeMd="12">
                    <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
                        autoplay={true}
                        keyboard={true}
                        pagination={true}
                        zoom={true}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src={ banner1 } slot="app overview" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ banner2 } slot="app overview" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ banner3 } slot="app overview" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ banner4 } slot="app overview" />
                        </SwiperSlide>
                    </Swiper>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
};
export default AppOverview;