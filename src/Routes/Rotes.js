import React from "react";
import Login from '../screens/Login';
import Search from '../screens/Search'
import { createStackNavigator } from '@react-navigation/stack';
import Pesquisa from "../components/Pesquisa";
import DailyFOLs from "../components/DailyFOLs";
import Header from "../components/Header";

const Routes = () =>{
    const Stack = createStackNavigator();

      return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Search" component={Pesquisa} />
          <Stack.Screen options={{headerShown: false}} name="FOLs" component={DailyFOLs} />
         </Stack.Navigator>
      );
}

export default Routes;