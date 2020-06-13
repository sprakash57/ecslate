import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './components/routes/Auth';
import Welcome from './components/routes/Welcome';
import Home from './components/routes/Home';
import Category from './components/routes/Category';
import ProductDetail from './components/routes/ProductDetail';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerTitle: '' }} />
        <Stack.Screen name='Auth' component={Auth} options={{ headerTitle: '' }} />
        <Stack.Screen name='Home' component={Home} options={{ headerTitle: '' }} />
        <Stack.Screen name='Category' component={Category} options={{ headerTitle: '' }} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
