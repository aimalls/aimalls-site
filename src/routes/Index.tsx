import { PublicRoutes } from "./Public"
import { PrivateRoutes } from "./PrivateRoutes"

export const Routes: React.FC = () => {
    return (
        <>
            <PublicRoutes />
            <PrivateRoutes />
        </>
    )
}