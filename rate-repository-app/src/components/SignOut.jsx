import { useNavigate } from "react-router-native"
import useSignOut from "../hooks/useSignOut"
import { useEffect } from "react"
import { Text, View } from 'react-native';

const SignOut = () => {
    const signOut = useSignOut()
    const navigate = useNavigate()
    useEffect(() => {
        const handleSignOut = async () =>{
        await signOut()
        navigate('/')
        }
        handleSignOut()
    },[signOut, navigate])
    return (
        <View>
            <Text>Signing Out...</Text>
        </View>
    )
}
export default SignOut