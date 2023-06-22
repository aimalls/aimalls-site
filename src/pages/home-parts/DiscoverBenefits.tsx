import { IonCol, IonRow } from "@ionic/react"
import personalizedProductThumb from "../../assets/images/personalized-product-thumb.png"
import advanceSearchThumb from "../../assets/images/advance-search-thumb.png"
import twentyFourSeverAvailabilityThumb from "../../assets/images/24-7-thumb.png"
import discoverNewProductsThumb from "../../assets/images/discover-new-products-thumb.png"
import checkoutThumb from "../../assets/images/checkout-thumb.png"

export const DiscoverBenefits: React.FC = () => {
    const benefits = [
        {
            thumb: personalizedProductThumb,
            title: "Personalized Product Recommendations",
            content: "AiMalls uses advanced Al algorithms to give you tailored product recommendations that are tailored to your individual needs. With this feature, you'll never have to worry about missing out on the perfect product for you."
        },
        {
            thumb: advanceSearchThumb,
            title: "Advanced Search Capabilities",
            content: "Get exactly what you're looking for with our advanced search capabilities. Search by keyword, price range and more to find the perfect item for you in no time."
        },
        {
            thumb: twentyFourSeverAvailabilityThumb,
            title: "24/7 Availability",
            content: "AiMalls is available 24/7, so you can shop when it's convenient for you. No matter where you are or what time it is, AiMalls has got your back!"
        },
        {
            thumb: discoverNewProductsThumb,
            title: "Discover new Products on the Market",
            content: "Stay up-to-date with the latest trends and products with AiMalls' constantly updated inventory of new products. With our Al-powered system, you'll never miss out on any hot new items!"
        },
        {
            thumb: checkoutThumb,
            title: "Faster and easier Checkout",
            content: "AiMalls can streamline the checkout process, allowing shoppers to complete their purchases faster and easier."
        }
    ]
    return (
        <div id="discover-benefits">
            <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeSm="10" sizeMd="8" sizeLg="7" className="section-title">
                    Discover the <span>Benefits of Shopping with AIMalls</span>
                </IonCol>
                <IonCol size="12" sizeSm="10" sizeMd="8" sizeLg="7" className="section-sub-header">
                    AIMalls is the ultimate shopping experience, powered by AI to make your shopping easier, faster and more enjoyable.
                </IonCol>
            </IonRow>
            <IonRow className="container ion-justify-content-center">
                {benefits.map((benefit, index) => (
                    <IonCol size="12" sizeMd="6" sizeLg="4" key={index}>
                        <div className="benefit-card">
                            <div className="thumb">
                                <img src={ benefit.thumb } alt={ benefit.title } />
                            </div>
                            <div className="title">
                                { benefit.title }
                            </div>
                            <div className="content">
                                { benefit.content }
                            </div>
                        </div>
                    </IonCol>
                ))}
            </IonRow>
        </div>
    )
}