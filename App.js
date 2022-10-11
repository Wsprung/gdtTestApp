import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
      // <TouchableOpacity
      //   onPress={() => alert('Hello, world!')}
      //   style={{ backgroundColor: 'blue' }}>
      //   <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      // </TouchableOpacity>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

//https://reactnavigation.org/docs/hello-react-navigation
//https://reactnative.dev/docs/navigation

//2 screens defined using the Stack.Screen component.
//You can define as many screens as you like.
//Can set options such as the screen title for each screen in the options prop of Stack.Screen.
//Screen One
const ScreenOne = props => {

  //onPress To Navigate
  const onPress = () => {
    props.navigation.navigate('ScreenTwo');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'blue' }}>
        <Text>Press me to change screens</Text>
      </TouchableOpacity>
    </View>
  );
};

//Screen Two
const ScreenTwo = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
