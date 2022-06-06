import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Notifications } from 'expo';

const BACKGROUND_FETCH_TASK = 'background-fetch';
const localNotification = { title: 'FOLs foram atualizadas', body: 'Verifique o App' };
let id;

async function updateFOLs(){
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
  );
};

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  axios
      .post('http://localhost:3100/admin/notification', {
        _id: id,
      })

      .then(function (response) {
        if (response){
          //if(id == id){}
          updateFOLs();
        }
      })
      .then(() => {})
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