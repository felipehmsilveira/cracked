import React from 'react'
import Background from '../components/Background'
import { Text } from 'react-native-paper'
import Contacts from './Contacts'
import SystemInfo from './SystemInfo'
import Location from './Location'
import Battery from './Battery'

const Home = ({ navigation }) => {
  return (
    <Background>
        <Contacts/>
        <SystemInfo/>
        <Location/>
        <Battery/>
    </Background>
  )
}

export default Home