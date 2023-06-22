import { IonCol, IonGrid, IonRow } from "@ionic/react"

export const WhyAiMalls: React.FC = () => {
    return(
        <div id="why-ai-malls">
            <IonGrid className="container">
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12" sizeMd="8">
                        <div className="title">
                            <span>Why Choose AiMalls?</span> <br />
                            A Comprehensive Overview
                        </div>
                    </IonCol>
                    <IonCol size="12" sizeMd="8">
                        <div className="content">
                            Al-powered online stores, or AiMalls, are the future of e-commerce. we offer a range of advantages over traditional online stores, including improved customer experience and increased efficiency.
                        </div>
                        <div className="content">
                            AiMalls use advanced Al technology to analyze sales and inventory data in real time, allowing them to make informed decisions about stock levels and product placement. This helps to improve overall security while also ensuring that customers get the best possible experience when shopping online.
                        </div>
                        <div className="content">
                            Furthermore, AiMalls are available 24/7, meaning customers can shop whenever they want without having to worry about store opening hours. This makes it easier for customers to find the products they need when they need them. All in all, AiMalls offer a range of advantages over classic online stores that make them an attractive option for businesses looking to improve their customer service and increase their profits.
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}