import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

export default function Page({navigation, route}) { // Or (props) props.navigation

  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{route.params.name}</Text>
      <Button
        title="Go to Page"
        onPress={() =>
            navigation.navigate('Page', { name: count })
        }
      />

    </View>
    
  );
}