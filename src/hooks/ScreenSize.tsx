import { useEffect, useState } from "react"

export const useScreen = () => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);


    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.screen.width)
        })
    }, [])

    return {screenWidth}
}