import { View, StyleSheet, Text,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

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
  const {data} = useQuery(ME)

  return( 
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text='Repositories' link='/' />
      {data && data.me ? <AppBarTab text='Sign Out' link='/sign-out'/>
        : <AppBarTab text='Sign In' link='/sign-in' />}
    </ScrollView>
  </View>
  )
};

export default AppBar;