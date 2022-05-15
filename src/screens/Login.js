import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import style from '../style/mainStyle.js';
import {SafeAreaView,Image} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { CheckBox, Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage'



const Login = ({navigation}) => {

  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [checkvalue, setcheckvalue]= useState(false);
  const [equip,setEquip] = useState([]);
  let id;

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3100/user/login', {
        login: login,
        password: password,
      })

      .then(function (response) {
        if (response){
          id = response.data._id
          console.log(id)
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
          navigation.navigate('Home')
      
      }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  }


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
