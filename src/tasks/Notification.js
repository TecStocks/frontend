import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Device from 'expo-device';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const BACKGROUND_FETCH_TASK = 'background-fetch';

async function updateFOLs(){
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'FOLs foram atualizadas',
      body: 'Verifique o App'
    },
    trigger: { seconds: 2 },
  });
};

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    console.log("executando background task")
    let result = []
    let cars = []
    result = await AsyncStorage.getItem('equip');
      
    if (result == null) {
      cars = []
    } else {
      cars = []
      cars = JSON.parse(result)
      axios
      .get('http://52.202.196.108:3001/admin/notification')

      .then(function (response) {
        if (response && cars != null){ 
          //console.log(response.data)     
          for(let i = 0; i <= response.data.length; i++){
            if(response.data[i] == null){break}
            let carros = response.data[i]
            console.log(carros.Equipment)
            for(let a=0; a<=30; a++){
              if(cars[a] == null){break;}
              else if(carros.Equipment == cars[a]){
                updateFOLs();
              }
              else{console.log("Nao encontrado: ",cars[a])}
            }
          }         
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  return BackgroundFetch.BackgroundFetchResult.NewData;
});
async function registerForPushNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
}
async function registerBackgroundFetchAsync() {   
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60, //Seconds
    stopOnTerminate: false,
    startOnBoot: true,
  });
}

async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export default function BackgroundFetchScreen() {
  console.log("BackgroundFetchScreen chamada")
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
    setStatus(status);
    setIsRegistered(isRegistered);
  };

  useEffect(() => {
    checkStatusAsync();
    registerForPushNotificationsAsync();
  }, []);
  
  const toggleFetchTask = async () => {
    if (isRegistered) {
      await unregisterBackgroundFetchAsync();      
    } else {
      await registerBackgroundFetchAsync();
    }

    checkStatusAsync();
  };

  if(!isRegistered){
    console.log("not registered")
    toggleFetchTask();
  }else{
    console.log("registered")
  }
}