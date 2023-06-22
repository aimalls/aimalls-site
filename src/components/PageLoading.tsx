import loadingAnimation from "../assets/images/loading.gif"
export const PageLoading: React.FC = () => {
    return (
        <div id="loading-wrapper">
            <img src={loadingAnimation} alt="loading" />
        </div>
    )
}