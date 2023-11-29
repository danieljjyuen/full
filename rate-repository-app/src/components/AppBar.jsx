import { View, StyleSheet, Text,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 15,
    flexDirection:'row'
  },

});

const AppBar = () => {
  return( 
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text='Repositories' link='/' />
      <AppBarTab text='Sign In' link='/sign-in' />
    </ScrollView>
  </View>
  )
};

export default AppBar;