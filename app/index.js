import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import RecipeDetails from './RecipeDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Kriz's Home Recipe">
      <Stack.Screen name="Kriz's Home Recipe" component={Home} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
}
