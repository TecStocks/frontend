import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import style from '../style/mainStyle.js';
import {SafeAreaView,Image} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { CheckBox, Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackgroundFetchScreen from '../tasks/Notification.js';



const Login = ({navigation}) => {

  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [equip,setEquip] = useState([]);
  let id;


  const handleSubmit = e => {
    e.preventDefault()
    console.log(login,password)
    console.log(login,password)
    axios.post('http://52.202.196.108:3100/user/login/', {
        login: login,
        password: password,
      
      })
      
      .then(function (response) {
        console.log(response)
        if (response){
          let i = 0
          let a = 0
          equip.push('')
          for(a=0; a<=30; a++){
            if(response.data.equipment[a] == null){break;}
            else if(response.data.equipment[a] != ','){
                if(response.data.equipment[a] == ' ' || response.data.equipment[a] == ''){}
                else{

                  equip[i]  += response.data.equipment[a]
                }

            }else{
              i++
              equip.push('')
            }
          }
          //salvar
          AsyncStorage.setItem(
            'equip',
            JSON.stringify(equip),
          );
          AsyncStorage.setItem(
            'id',
            JSON.stringify(id),
          );
          //carregar 
          AsyncStorage.getItem('equip', (err, result) => {
            let cars = JSON.parse(result)
            console.log(cars);
          });
          AsyncStorage.getItem('id', (err, result) => {
            console.log('id: ', result);
          });

          setEquip(equip)
          navigation.navigate('Search')
      
      }
      })
      .catch(function (error) {
        console.log('Passou aquiaaaaaaaaaa') 
        console.log(error.message)
      })
  }


    return (
<SafeAreaView style={style.container}>
      {BackgroundFetchScreen()}
      <SafeAreaView style={style.container}>
        <Image 
        style={style.img}
        source={require('../assets/logo.png')} />
      </SafeAreaView>
      
      <SafeAreaView style={style.act}>
      
      
      <Input
        style={{color:'white'}}
        leftIcon={{ type: 'font-awesome',color:'white' ,size:20,name: 'user' }}
        value={login}
        onChangeText={(text)=>setLogin(text) }
        placeholder="User"
      />
      </SafeAreaView>
    <SafeAreaView style={style.act}>
      <Input
      style={{color:'white'}}
      secureTextEntry={true} 
      leftIcon={{ type: 'font-awesome',color:'white' ,size:20,name: 'key' }}
      onChangeText={(text)=>setPassword(text) }
      placeholder="password"
        
      />
      </SafeAreaView>
      <SafeAreaView style={style.button}>
        <Button 
          icon={<Icon 
          name="check"
          size={20} 
          color='white'/>}
          buttonStyle={{
            borderRadius: 30,
            backgroundColor: '#0D0D0D',
          }}
          title=' Login' 
          onPress={handleSubmit}
      />
      </SafeAreaView>
      <SafeAreaView style={style.checkbox}>
       
        </SafeAreaView>
    </SafeAreaView>
  )
}



export default Login
