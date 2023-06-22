import { IonCol, IonGrid, IonRow } from "@ionic/react"

import targetCustomer from "../../assets/images/target-customers.png"
import inventory from "../../assets/images/inventory.png"
import business from "../../assets/images/business.png"
import marketing from "../../assets/images/marketing.png"
import secureShopping from "../../assets/images/secure-shopping.png"
export const FutureOfShoppingV2Section: React.FC = () => {

    const fututeOfShopping = [
        {
            icon: targetCustomer,
            title: "Target Customers like a Pro",
            content: "With AiMalls, you can target customers more accurately and effectively with personalized offers and discounts. Our Al-powered algorithms help you understand their needs better and build long-term relationships with them."
        },
        {
            icon: inventory,
            title: "Smarter Inventory Management",
            content: "AiMalls helps you manage your inventory more efficiently with automated stock tracking, order processing, and delivery management. You can also track customer orders in real-time to ensure seamless service."
        },
        {
            icon: secureShopping,
            title: "Secure Shopping Experience",
            content: "We take security seriously at AiMalls, so we offer the highest level of protection for both merchants and customers. Our advanced encryption technology ensures that all transactions are secure and transparent."
        },
        {
            icon: marketing,
            title: "Unlock New Marketing",
            content: "Our powerful marketing tools help you reach new customers by leveraging data insights to craft targeted campaigns that are sure to drive sales. You can also track the performance of your campaigns in real-time for better ROI."
        },
        {
            icon: business,
            title: "Scale Your Business",
            content: "AiMalls offers personalization features that allow you to build a relationship with your customers, getting in touch when it's most effective and maximizing conversions. Our products and technology provide the infrastructure for success."
        },
    ]

    return (
        <div id="future-of-shopping-v2">
            <IonGrid className="">
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12" sizeSm="10" sizeMd="8" sizeLg="7" className="section-title">
                        The <span>Future of Shopping</span> is Here
                    </IonCol>
                    <IonCol size="12" sizeSm="10" sizeMd="8" sizeLg="7" className="section-sub-header">
                    AIMalls is the revolutionary e-commerce platform that helps merchants reach their customers more effectively. while reducing operational cost and improving security.
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center container">
                    { fututeOfShopping.map((shopping, index) => (
                        <IonCol size="12" sizeMd="6" sizeLg="4" key={index}>
                            <div className="shopping-card">
                                <div className="icon">
                                    <img src={shopping.icon} alt={shopping.title} />
                                </div>
                                <div className="title">
                                    { shopping.title }
                                </div>
                                <div className="content">
                                    { shopping.content }
                                </div>
                            </div>
                        </IonCol>
                    )) }
                </IonRow>
            </IonGrid>
        </div>
    )
}