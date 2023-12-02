import { Link } from 'react-router-native';
import { View, Text, StyleSheet} from 'react-native';
import theme from '../theme';
const styles = StyleSheet.create({
    container: {
      paddingLeft: 15,
    },
    textStyle:{
        fontFamily: theme.fonts.main
    }
  });

const AppBarTab = ({text, link}) => {
    return (
        <View style={styles.container}>
            <Link to={link}>
                <Text style={styles.textStyle}>{text}</Text>
            </Link>
        </View>
    )
}

export default AppBarTab