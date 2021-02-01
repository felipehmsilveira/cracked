import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

import Contacts from './Contacts'

import Background from '../components/Background'


import SystemInfo from './SystemInfo'
import Location from './Location'
import Battery from './Battery'
import ImagePicker from './ImagePicker'


const Home = ({ navigation }) => {
  return (
    <View>
      <Contacts/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default Home