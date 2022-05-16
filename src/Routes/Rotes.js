import React from "react";
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Pesquisa from "../components/Pesquisa";
import DailyFOLs from "../components/DailyFOLs";
import Home from "../screens/Home"
import Header from "../components/Header";
import User from '../screens/Usuario'
import pdfView from "../screens/pdfView";

const Routes = () =>{
    const Stack = createStackNavigator();

      return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Usuario" component={User} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="Search" component={Pesquisa} />
          <Stack.Screen options={{headerShown: false}} name="FOLs" component={DailyFOLs} />
          <Stack.Screen options={{headerShown: false}} name="Header" component={Header } />
          <Stack.Screen options={{headerShown: false}} name="pdf" component={pdfView} />

         </Stack.Navigator>
      );
}

export default Routes;