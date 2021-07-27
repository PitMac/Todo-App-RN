import React from 'react';
import Index from './src/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewTask from './src/screens/NewTask';
import UpdateTask from './src/screens/UpdateTask';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="NewTask" component={NewTask} />
        <Stack.Screen name="UpdateTask" component={UpdateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
