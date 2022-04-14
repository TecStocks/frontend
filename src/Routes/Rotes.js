import React from "react";
import Login from '../screens/Login';
import Search from '../screens/Search'
import { createStackNavigator } from '@react-navigation/stack';

const Routes = () =>{
    const Stack = createStackNavigator();

      return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Search" component={Search} />
    
         </Stack.Navigator>
      );
}

export default Routes;