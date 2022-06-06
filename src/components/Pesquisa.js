import { Button,Avatar, Input } from 'react-native-elements';
import { StyleSheet, View,Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

let carros = []

const Pesquisa = ({navigation}) => 
{
  let [car, setCar] = useState('');
  let [fols, setFols] = useState([]);
  let [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      let result = []
      result = await AsyncStorage.getItem('equip');
        
      if (result == null) {
        carros = []
      } else {
        carros = []
        carros = JSON.parse(result)
      }
      setIsLoading(false);
    }
    getCars();
  }, []);

  console.log("equips: ",carros)

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://52.202.196.108:3001/fols', {
        car:car,
      })

      .then(function (response) {
        if (response){  
          fols = []         
          for(let i = 0; i <= response.data.length; i++){
            if(response.data[i] == null){break}
            else if(response.data.Status == "CANCELLED"){continue}
            let resp = response.data[i].equipment
            let keyw = []
            let e = 0
            let key = response.data[i].Keywords          
            keyw.push('')
            for(let a=0; a<=30; a++){
              if(key[a] == null){break;}
              else if(key[a] != ','){
                  if(key[a] == ' ' || key[a] == ''){continue}
                  else{
                    keyw[e]  += key[a]
                  }
  
              }else{
                e++
                keyw.push('')
              }
              console.log('keyword: ',keyword)
            }
            for(let a = 0; a <= carros.length; a++){
              if(carros[a] == resp){
                if(keyw.length > 1){
                for(let y=0; y<=keyw.length; y++){
                  if(keyword == keyw[y] || keyword == ''){
                    fols.push(response.data[i])
                  }                
                }        
              }    
              else{
                fols.push(response.data[i])
              }  
              }
            }
          }
          if(fols.length < 0){fols.push({Title: 'Nenhuma FOL encontrada'})}
          setFols(fols)
          console.log('fols: '+ fols)  
          navigation.navigate('FOLs', {
            paramKey: fols,
          })
        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  }

  if (isLoading == false) {
    return (
      <View style={styles.container}>
            <View>
         <View style={styles.row}>
          
         <View style={styles.user}>
          <Avatar rounded
          size={'medium'}  
          source={{
              uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          }}
          >
          <Avatar.Accessory icon={{}} type='Button' onPress={ ()=>{navigation.navigate('User');}}/>
          </Avatar>
          </View>        
          <View style={styles.logout}>
          <Button 
            icon={<Icon 
            name="sign-out"
            size={40} 
            color='black'/>}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: '#F2F2F2',
            }}
          onPress={ ()=>{navigation.navigate('Login')}}
        />
         </View>
  
         </View>
            </View>
        <View style={styles.viw}>
                <Text style={{justifyContent:'flex-start',}}>Selected car:</Text>
                <Picker
                selectedValue={car}
                style={{ height: "100%", width: "60%", 
                fontSize: 20, textAlign: 'center', marginLeft: '10%'
            }}
                onValueChange={(itemValue) =>
                  setCar(itemValue)
              }>   
              <Picker.Item label="Selecione" value=""/>
              {                   
                carros.map((l, i) => (               
                  <Picker.Item label={l} value={l} key={i}/>                
                  ))
              }      
          </Picker>
          </View>
          <View style={styles.keyw}>
          <Input 
          leftIcon={{ type: 'font-awesome',color:'black' ,size:20,name: 'list-alt' }}
          keyboardType="visible-password"
          placeholder='keyword:'
          value={keyword} 
          onChangeText={(text)=> setKeyword(text)}/>      
          </View>
  
        <Button style={styles.espaçamento} icon={<Icon name="search" size={30} color="black"/>} type="clear" title='Search' titleStyle={{color: 'black'}}
        onPress={handleSubmit}/>
  
      </View>
    );
  }
  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" style={{flex: 1,
      justifyContent: "center"}} />
  }
  
}
 
export default Pesquisa;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
  espaçamento:{
      marginTop:'5%',
  },
  row:{
    flexDirection: 'row',
    margin: '5%',
    justifyContent: 'center',
},
logout:{marginLeft:'50%'
},
home:{
    marginLeft: '30%',
    marginRight: '30%',
},
  keyw:{
    marginTop:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea"
  },
viw:{
  marginTop:'10%',
  flexDirection: 'row',
  marginLeft:'10%',
  marginRight:'10%',
  justifyContent: 'flex-start',
}

});