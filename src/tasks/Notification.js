import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Notifications } from 'expo';

const BACKGROUND_FETCH_TASK = 'background-fetch';
const localNotification = { title: 'FOLs foram atualizadas', body: 'Verifique o App' };
const cars = [];
let id;

async function updateFOLs(){
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
  );
};

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  axios
      .get('http://52.202.196.108:3001/admin/notification')

      .then(function (response) {
        if (response){
          for(let i = 0; i <= response.data.length; i++){
            if(response.data[i] == null){break}
            for(let a=0; a<=30; a++){
              if(response.data.Equipment[i] == cars[a]){
                updateFOLs();
              }
            }
          }         
        }
      })
      .catch(function (error) {
        console.log(error)
      })

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 20, //Seconds
    stopOnTerminate: false,
    startOnBoot: true,
  });
}

async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export default function BackgroundFetchScreen() {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  useEffect(() => {
    const getCars = async () => {
      try{
        let result = []
      result = await AsyncStorage.getItem('equip');
        
      if (result == null) {
        cars = []
      } else {
        cars = []
        cars = JSON.parse(result) 
      }
      }catch{}
    }
    getCars();
  }, []);

  React.useEffect(() => {
    checkStatusAsync();
  }, []);

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
    setStatus(status);
    setIsRegistered(isRegistered);
  };

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