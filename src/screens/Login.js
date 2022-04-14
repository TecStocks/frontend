import React from 'react'
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native'
import { CheckBox, Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import style from '../style/mainStyle.js';
import axios from 'axios';

const Login = ({navigation}) => {
  
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3100/user/login', {
        login: login,
        password: password
      })

      .then(function (response) {
        if (response){
            console.log(console.data)
           navigation.navigate('Search')

        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  }
  const [checkvalue, setcheckvalue]= useState(false);

  return (
<SafeAreaView style={style.container}>
      
      <SafeAreaView style={style.container}>
        <Image 
        style={style.img}
        source={require('../assets/logo.png')} />
      </SafeAreaView>

      <SafeAreaView style={style.act}>
      <Input
        leftIcon={{ type: 'font-awesome',color:'black' ,size:20,name: 'user' }}
        value={login}
        onChange={e => {
          setLogin(e.target.value)
        }}
        placeholder="User"
      />
      </SafeAreaView>
    <SafeAreaView style={style.act}>
      <Input
      secureTextEntry
        leftIcon={{ type: 'font-awesome',color:'black' ,size:20,name: 'key' }}
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
        placeholder="password"
        keyboardType="visible-password"
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
        <CheckBox
        style={style.checkbox}
        title='Eu aceito os termos de politica de privacidade e uso de dados'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='green'
        uncheckedColor='red'
        checked= {checkvalue}
        onPress={()=>setcheckvalue(!checkvalue)}
        />
        </SafeAreaView>
    </SafeAreaView>
  )
}



export default Login

