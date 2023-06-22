import { IonGrid, IonRow, IonCol } from "@ionic/react"

export const FAQSection: React.FC = () => {
    const faq_content = [
        {
            title: "Q: What is AiMalls?",
            content: "A: AiMalls is an AI powered online mall or store, a platform and an app that uses intelligent algorithms to provide personalized shopping experiences."
        },
        {
            title: "Q: What are the benefits will AiMalls bring?",
            content: "A: Personalized product recommendations, Chatbots for Customer Service, Automated Product Categorization, Mobile-Friendly design, Secure payment processing, Integration with Quality brands and dispute resolution."
        },
        {
            title: "Q: What advantages AiMalls has against its competitors?",
            content: "A: Security, fast and reliable shipping for customers, AiMalls algorithms can help online stores/apps manage their inventory more efficiently, with AI-powered chatbots and virtual assistants it can provide good customer service 24/7, AiMalls offers competitive pricing and affiliate programs."
        },
        {
            title: "Q: When is AiMalls Launching live?",
            content: "A: AiMalls is Launching in October."
        },
        {
            title: "Q: How can I participate in the AiMalls Launch?",
            content: "A: Please wait further announcement regarding Public Sale and Exchange Listing Schedule (TBA)."
        },
        {
            title: "Q: Do you have the project Whitepaper?",
            content: "A: Yes, here is the link : https://drive.google.com/file/d/1EJ2UrREwaaSyAe94OFBRRnNeXCjnRwnW/view"
        },
        {
            title: "Q: What is the ticker for AiMalls token?",
            content: "A: It is $AIT"
        },
        {
            title: "Q: What is $AIT use cases?",
            content: "A: With AIT you can buy sponsored slots to promote your store and products in our marketplace , also means of accessing exclusive content or products on the app, offering added value for users who hold the token."
        },
        {
            title: "Q: What is the Total Token Supply?",
            content: "A: 850,000"
        },
        {
            title: "Q: Where can I find the roadmap, token allocation, and token utility?",
            content: "A: All can be found in our Whitepaper link provided above."
        },
    ]
    return (
        <div id="faq-section">
            <IonGrid className="container">
                <IonRow>
                    <IonCol size="12">
                        <div className="title">AiMalls FAQs:</div>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12" sizeMd="10">
                        { faq_content.map((content, index) => (
                            <div key={index} className="content">
                                <div className="content-title">
                                    { content.title }
                                </div>
                                <div className="content-details">
                                    { content.content }
                                </div>
                            </div>
                        )) }
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}