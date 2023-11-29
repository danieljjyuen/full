import { Link } from 'react-router-native';
import { View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingLeft: 15,
    },
  
  });

const AppBarTab = ({text, link}) => {
    return (
        <View style={styles.container}>
            <Link to={link}>
                <Text>{text}</Text>
            </Link>
        </View>
    )
}

export default AppBarTab