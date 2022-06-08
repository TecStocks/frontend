import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../style/mainStyle.js';
import {SafeAreaView,Image, Alert,Text, ActivityIndicator} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { CheckBox, Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Location from 'expo-location';

const Login = ({navigation}) => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [isLoad, setIsLoad] = useState(true);
  const [saveLogin, setSaveLogin] = useState(false);
  const [saveLocal, setSaveLocal] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let [equip,setEquip] = useState([]);
  let id;

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }
  
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }
  
  useEffect(() => {
    const auth = async () => {
      let user = ''
      let pass = ''
      let save = false
      if(await AsyncStorage.getItem('saveLogin') != null){
        save = await AsyncStorage.getItem('saveLogin');
      }        
        user = await AsyncStorage.getItem('login');
        pass = await AsyncStorage.getItem('pass');    
        setSaveLogin(save);   
        setLogin(JSON.parse(user)) 
        setPassword(JSON.parse(pass)) 
        console.log("login carregado",save,'',saveLogin)
        //handleSubmit
        setIsLoad(false); 
    }
    auth();
  }, []);

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

          if(saveLogin == true){
            AsyncStorage.setItem(
              'login',
              JSON.stringify(login),
            );
            AsyncStorage.setItem(
              'pass',
              JSON.stringify(password),
            );           
            console.log("login salvo")
          }else{
            AsyncStorage.removeItem('login');
            AsyncStorage.removeItem('pass');
          }
          AsyncStorage.setItem(
            'saveLogin', 
            JSON.stringify(saveLogin)
            );
          // if(saveLocal == true){
          //   let local = location["coords"];
          //   local = local["latitude"] + "," + local["longitude"]
          //   local = JSON.stringify(local)
          //   let coord = ''
          //   for(let i = 0; i < 20; i++){if(local[i] == null){break};if(local[i]!= '"'){coord += local[i]}}
          //   console.log("COORDENADAS: ",local)
          //   const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+coord+'&key='
          //   axios.get(url)
          //   .then(function (response) {
          //     if (response){

          //       let cidade = response.data.results[0].address_components[3].long_name
          //       let estado = response.data.results[0].address_components[4].long_name
          //       console.log('CIDADE: ', cidade)
          //       console.log('ESTADO: ', estado)
                
          //       // axios.post('http://52.202.196.108:3002/locate',{
          //       //   cidade: cidade,
          //       //   estado: estado,
          //       // }).then(function (response) {if(response){console.log("CIDADE E ESTADO SALVOS")}})
          //     }
          //   }).catch(function (error) {
          //     console.log(error);
          //     console.log(url)
          //   })
          // }

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
              value={password}
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
              <CheckBox
                style={style.checkbox}
                title='Remember Login'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                uncheckedColor='red'
                checked= {saveLogin}
                onPress={()=>setSaveLogin(!saveLogin)}
                />
                </SafeAreaView>  
                {/* <SafeAreaView style={style.checkbox}>
              <CheckBox
                style={style.checkbox}
                title='I accept that my location is collected'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                uncheckedColor='red'
                checked= {saveLocal}
                onPress={()=>setSaveLocal(!saveLocal)}
                />
                </SafeAreaView>             */}
            </SafeAreaView>
          )
    }
  if (isLoad) {
    return <ActivityIndicator size="large" color="#00ff00" style={{flex: 1,
      justifyContent: "center"}} />; 
  }
}



export default Login
