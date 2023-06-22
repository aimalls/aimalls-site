import { IonCol, IonGrid, IonRow } from "@ionic/react"

import missionIcon from "../../assets/images/mission.png"
import visionIcon from "../../assets/images/vision.png"
import ourGoalIcon from "../../assets/images/our-goal.png"

export const VisionAndMission: React.FC = () => {
    

    const mission_vision = [
        {
            icon: ourGoalIcon,
            title: "Our Goal",
            content: "Aimalls short-term goal is to attract sellers and buyers to the platforms and establish a reputation for providing a high-quality shopping experience. Aimalls long-term goal is to become one of the leading online marketplaces worldwide."
        },
        {
            icon: visionIcon,
            title: "Vision",
            content: "Our vision is to become the go-to destination for online shopping, where customers can find a wide range of high-quality products and services at competitive prices. We strive to build a community of buyers and sellers who trust and respect each other, and who share a commitment to excellence, innovation, and sustainability. We believe that by harnessing the power of AI and other cutting-edge technologies, we can create a better and more inclusive future for all."
        },
        {
            icon: missionIcon,
            title: "Mission",
            content: "Our mission is to create a vibrant and inclusive online marketplace that connects buyers and sellers from around the world. We aim to leverage the power of AI and other advanced technologies to offer a personalized and seamless shopping experience that is tailored to the unique needs and preferences of our customers."
        },
        
    ]

    return(
        <div id="vision-and-mission">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center">
                    <IonCol size="11" sizeMd="10" className="misson-vision-wrapper ion-no-padding">
                        <IonRow>
                            { mission_vision.map((mv, index) => (
                                <IonCol size="12" sizeMd="4" key={`mv-${index}`} className="mv-content-wrapper">
                                    <div className="icon">
                                        <img src={ mv.icon } alt={ mv.title } />
                                    </div>
                                    <div className="title">
                                        { mv.title }
                                    </div>
                                    <div className="content">
                                        { mv.content }
                                    </div>
                                </IonCol>
                            )) }
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}