import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from '../components/HomeScreen';

const Home = ({ navigation }) => {
  // console.log(navigation);
  return (
    <>
      <HomeScreen navigation={navigation} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
