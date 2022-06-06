import React from "react";
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Pesquisa from "../components/Pesquisa";
import DailyFOLs from "../components/DailyFOLs";
import Header from "../components/Header";
import User from '../screens/Usuario'
import PdfView from "../screens/PdfView";

const Routes = () =>{
    const Stack = createStackNavigator();

      return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="User" component={User} />
          <Stack.Screen options={{headerShown: false}} name="Search" component={Pesquisa} />
          <Stack.Screen options={{headerShown: false}} name="FOLs" component={DailyFOLs} />
          <Stack.Screen options={{headerShown: false}} name="Header" component={Header } />
          <Stack.Screen options={{headerShown: false}} name="pdf" component={PdfView} />

         </Stack.Navigator>
      );
}

export default Routes;