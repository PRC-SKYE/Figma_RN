import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown:false }}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown: false}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   parentContainer: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'white'
//   },
//   myinfo: {
//     width: '100%',
//     height: '45%',
//     backgroundColor: 'white'
//   }




// });
export default MyStack

