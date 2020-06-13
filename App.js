import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';
import Welcome from './components/routes/Welcome';
import Home from './components/routes/Home';
import BestSell from './components/routes/BestSell';
import Featured from './components/routes/Featured';
import ProductDetail from './components/routes/ProductDetail';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='BestSell' component={BestSell} />
        <Stack.Screen name='Featured' component={Featured} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
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
