import { useContext } from "react"
import { AuthContext } from "../Components/AuthProvider"

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}
export default useAuth;