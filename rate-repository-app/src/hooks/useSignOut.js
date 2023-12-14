import { useApolloClient } from "@apollo/client";
import useAuthStorage from "./useAuthStorage";

const useSignOut = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    const signOut = async () => {
        try{
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
        }catch(e){
            console.log(e)
        }
    }
    return signOut
}

export default useSignOut