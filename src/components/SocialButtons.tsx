import faceBookLogo from "../assets/images/facebook-logo.png"
import twitterLogo from "../assets/images/twitter-logo.png"
import telegramLogo from "../assets/images/telegram-logo.png"

export const SocialButtons = () => {
    return (
        <div style={{ height: "100%" }}>
            <a href="#">
                <img src={ faceBookLogo } alt="facebook" />
            </a>
            <a href="#">
                <img src={ telegramLogo } alt="telegram" />
            </a>
            <a href="#">
                <img src={ twitterLogo } alt="twitter" />
            </a>
        </div>
    )
}