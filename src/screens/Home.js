import React from 'react'
import Background from '../components/Background'
import { Text } from 'react-native-paper'
import Contacts from './Contacts'
import SystemInfo from './SystemInfo'
import Location from './Location'

const Home = ({ navigation }) => {
  return (
    <Background>
        <Contacts/>
        <SystemInfo/>
        <Location/>
    </Background>
  )
}

export default Home