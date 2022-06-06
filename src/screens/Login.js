import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../style/mainStyle.js';
import {SafeAreaView,Image, Alert,Text} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { CheckBox, Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage'
import BackgroundFetchScreen from '../tasks/Notification.js';



const Login = ({navigation}) => {

  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoad, setIsLoad] = useState(false);
  let [equip,setEquip] = useState([]);
  let id;

  // useEffect(() => {
  //   const auth = async () => {
  //     let user = ''
  //     let pass = ''

  //     try{
  //       user = await AsyncStorage.getItem('login');
  //       pass = await AsyncStorage.getItem('pass');
  //     }catch{}
      
        
  //     if (user != null && pass != null) {
  //       login = JSON.parse(user)
  //       password = JSON.parse(pass)
  //     }
  //     setIsLoad(false);
  //   }
  //   auth();
  // }, []);

  function alertbutton(){
      Alert.alert(
        "Login error",
        "Incorrect username or password",
        [
          { text: "OK", onPress: () => navigation.navigate("login") }
        ]
      );  }   
  
  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://52.202.196.108:3002/login', {
        login: login,
        password: password, 
      })
      
      .then(function (response) {
        if (response){
          AsyncStorage.setItem(
            'login',
            JSON.stringify(login),
          );
          AsyncStorage.setItem(
            'pass',
            JSON.stringify(password),
          );

          console.log(response.data)
          id = response.data._id

          let i = 0
          let a = 0
          equip = []
          for(a=0; a<=30; a++){
            if(response.data.equipment[a] == null){break;}
            else{
              console.log("add: ",response.data.equipment[a])
              let l = response.data.equipment[a]
              let q = ''
              for(let u=0; u<=30; u++){
                if(l[u] == null){break;}
                else if(l[u] != ' '){q += l[u]}
              }
              equip.push(q)
              i++
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
        console.log('erro de login')
        alertbutton()
        console.log(error.message)
      })
  }


    if(isLoad == false){
      return (
        <SafeAreaView style={style.container}>
              {/* {BackgroundFetchScreen()} */}
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
  if (isLoad) {
    return <Text>Carregando...</Text> // Informa o usuário que está carregando
  }
}



export default Login
