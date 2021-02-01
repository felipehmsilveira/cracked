import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import { Text } from 'react-native-paper'

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data;
         // console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <View>
      <Text>Contacts Module</Text>
    </View>
  );
}