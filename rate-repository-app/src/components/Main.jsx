import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from '../components/RepositoryList'
import AppBar from './AppBar';
import {Route, Routes, Navigate } from 'react-router-native'
import SignIn from './SignIn';
import SignOut from './SignOut';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor:'#e1e4e8'
  },
});



const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='sign-out' element={<SignOut />} />
      </Routes>
      
    </View>
  );
};

export default Main;