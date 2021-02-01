import React from 'react'
import Background from '../components/Background'
import { Text } from 'react-native-paper'
import Contacts from './Contacts'

const Home = ({ navigation }) => {
  return (
    <Background>
        <Contacts/>
        <Text>Home</Text>
    </Background>
  )
}

export default Home