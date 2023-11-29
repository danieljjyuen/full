import {Text, View, Pressable, StyleSheet} from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flexShrink:1,
      flexDirection:'column'
    },
    input: {
        borderColor:'black',
        padding:2,    
        borderWidth: 1,
        borderRadius: 2,
        flexShrink:1,
        margin:10
    },
    button:{
        borderColor:'blue',
        backgroundColor:'blue',
        padding:1,    
        borderWidth: .5,
        borderRadius: 2,
        margin:20,
        alignSelf: 'flex-start'
    }
  
  });

const initialValues = {
    username:'',
    password:''
}

const SignInForm = ({onSubmit}) => {
    return (
        <View style={styles.container}>
            <FormikTextInput style={styles.input} name='username' placeholder='Username' />
            <FormikTextInput style={styles.input} name='password' placeholder='Password' secureTextEntry={true} />
            <Pressable onPress={onSubmit}>
                <Text style={styles.button}>Sign in</Text>
            </Pressable>
        </View>
    )
}



const SignIn = () => {
    const onSubmitHandler=(values)=>{
        console.log(values)
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}
export default SignIn