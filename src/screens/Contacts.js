import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Image, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

import { Card } from 'react-native-elements';

export default function Contact() {

  const [myContacts, setMyContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // const contact = data;
          setMyContacts(data);

          console.log(data)
          
        }
      }
    })();
  }, []);

  return (
      <SafeAreaView>
        <FlatList
          data={myContacts}
          renderItem={({ item }) =>
            (
              <Card title="Local Modules" >
                <Image source={require('../assets/avatar-placeholder.png')} style={{ width: 50, height: 50 }} />
                <Text >
                  { item.name } 
                </Text>
                {  item.phoneNumbers != null ? (
                  <FlatList
                  data={item.phoneNumbers}
                  renderItem={( {item} ) =>
                    (
                      <Text >
                        { item.number } 
                      </Text>
                    )
                  }
                  />

                ) : (<Text>Sem fone</Text>)}
                
         
              </Card>
            )
          }
        />
    </SafeAreaView>
  );
}
