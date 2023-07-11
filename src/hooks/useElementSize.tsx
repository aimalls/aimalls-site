import { useEffect, useState } from "react"

export const useElementSize = (selector: string) => {
    const [elementSize, setElementSize] = useState(0);

    useEffect(() => {
        const element: any = document.querySelector(selector);
        
        window.addEventListener("resize", (size) => {
            setElementSize(element?.offsetWidth)
        })
        window.addEventListener("load", (size) => {
            setElementSize(element?.offsetWidth)
        })
    }, [])

    return { elementSize }
}

