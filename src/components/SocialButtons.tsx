import faceBookLogo from "../assets/images/facebook-logo.png"
import twitterLogo from "../assets/images/twitter-logo.png"
import telegramLogo from "../assets/images/telegram-logo.png"

export const SocialButtons = () => {
    return (
        <div style={{ height: "100%" }}>
            <a href="https://www.facebook.com/aimallsapp" target="_blank">
                <img src={ faceBookLogo } alt="facebook" />
            </a>
            <a href="https://t.me/AiMallsOfficial" target="_blank">
                <img src={ telegramLogo } alt="telegram" />
            </a>
            <a href="https://twitter.com/ai_malls" target="_blank">
                <img src={ twitterLogo } alt="twitter" />
            </a>
        </div>
    )
}